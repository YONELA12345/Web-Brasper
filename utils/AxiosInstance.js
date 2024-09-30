import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1/";

const AxiosInstance = axios.create({
  baseURL: baseURL,
  "Content-type": "application/json",
});

// Interceptor para manejar tokens y refresco automático
AxiosInstance.interceptors.request.use(async (req) => {
  // Solo ejecutar en el lado del cliente
  if (typeof window !== "undefined") {
    let accessToken = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token") || '""') : "";
    let refreshToken = localStorage.getItem("refresh_token") ? JSON.parse(localStorage.getItem("refresh_token") || '""') : "";

    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`;
      try {
        // Decodificar token para verificar si está expirado
        const user = jwt_decode(accessToken);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

        if (!isExpired) {
          return req; // Si el token no ha expirado, continuar la solicitud
        }

        // Refrescar token si ha expirado
        const response = await axios.post(`${baseURL}auth/token/refresh/`, {
          refresh: refreshToken,
        });

        // Guardar nuevo token y actualizar el header de la solicitud
        localStorage.setItem("token", JSON.stringify(response.data.access));
        req.headers.Authorization = `Bearer ${response.data.access}`;
        console.log("Token refrescado: ", response.data.access);
      } catch (error) {
        console.error("Error al decodificar o refrescar el token:", error);
        // Manejar el caso de error (redirigir al login, etc.)
      }
    }
  }
  
  return req;
});

export default AxiosInstance;
