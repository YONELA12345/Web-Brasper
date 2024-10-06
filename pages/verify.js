'use client';
import { useState } from "react";
import Layout from "../layout";
import { useRouter } from "next/router";

const Login = () => {
  const [user, setUser] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 
  const [loading, setLoading] = useState(false); 
  
  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!user || !password) {
      setErrorMessage("Por favor, rellene ambos campos.");
      return;
    }

    try {
      setLoading(true); 
      setErrorMessage(""); 

      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login exitoso:", data);
        router.push("/dashboard"); 
      } else {
        setErrorMessage(data.message || "Usuario o contraseña incorrectos");
      }
    } catch (error) {
      setErrorMessage("Hubo un problema al procesar su solicitud. Inténtelo más tarde.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <Layout>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="user" className="form-label">Usuario</label>
              <input
                type="text"
                className="form-control"
                id="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Ingrese su usuario"
                disabled={loading} 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese su contraseña"
                disabled={loading} 
              />
            </div>

            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}

            <div className="text-center">
              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? "Cargando..." : "Iniciar Sesión"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
