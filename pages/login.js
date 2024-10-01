import { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Reemplazamos useNavigate y useSearchParams por useRouter
import { toast } from "react-toastify";
import AxiosInstance from "../utils/AxiosInstance";
import Link from "next/link"; // Reemplazar Link de react-router-dom por Link de Next.js

const Login = () => {
  const router = useRouter(); // Reemplaza useNavigate con useRouter

  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });

  const handleOnchange = (e) => {
    setLogindata({ ...logindata, [e.target.name]: e.target.value });
  };

  // const handleLoginWithGoogle = (response: any) => {
  //   console.log("id_token", response.credential);
  // };

  const handleLoginWithGithub = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize/?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`
    );
  };

  // const sendGithubCodeToServer = async () => {
  //   const code = router.query.code as string; // Usamos router.query para obtener el parámetro de la URL
  //   if (code) {
  //     try {
  //       const resp = await AxiosInstance.post("auth/github/", {
  //         code: code,
  //       });
  //       const result = resp.data;
  //       if (resp.status === 200) {
  //         const user = {
  //           email: result.email,
  //           names: result.full_name,
  //         };
  //         localStorage.setItem("token", JSON.stringify(result.access_token));
  //         localStorage.setItem(
  //           "refresh_token",
  //           JSON.stringify(result.refresh_token)
  //         );
  //         localStorage.setItem("user", JSON.stringify(user));
  //         router.push("/dashboard"); // Usa router.push para navegar
  //         toast.success("Login successful");
  //       }
  //     } catch (error: any) {
  //       if (error.response) {
  //         toast.error(error.response.data.detail);
  //       }
  //     }
  //   }
  // };

  // Detectar código de GitHub en los query params
  useEffect(() => {
    if (router.isReady && router.query.code) {
      sendGithubCodeToServer();
    }
  }, [router.isReady, router.query.code]);

  useEffect(() => {
    /* global google */
    if (typeof window !== "undefined" && window.google) {
      google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: handleLoginWithGoogle,
      });
      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "outline",
        size: "large",
        text: "continue_with",
        shape: "circle",
        width: "280",
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (logindata) {
      try {
        const res = await AxiosInstance.post("auth/login/", logindata);
        const response = res.data;
        const user = {
          full_name: response.full_name,
          email: response.email,
        };

        if (res.status === 200) {
          localStorage.setItem("token", JSON.stringify(response.access_token));
          localStorage.setItem(
            "refresh_token",
            JSON.stringify(response.refresh_token)
          );
          localStorage.setItem("user", JSON.stringify(user));
          await router.push("/admin");
          toast.success("Login successful");
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    }
  };


  return (
    <>
      <div className="form-body without-side">
        <div className="website-logo">
          <a href="/">
            <div className="logo">
              <img
                className="logo-size"
                src="/assets/images/logos/logo-light.svg"
                alt="Logo"
              />
            </div>
          </a>
        </div>
        <div className="iofrm-layout">
          <div className="img-holder">
            <div className="bg"></div>
            <div className="info-holder">
              <img src="/assets/images/logos/graphic3.svg" alt="Graphic" />
            </div>
          </div>
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3 className="text-center pb-3">Inicio de sesion</h3>
                <p>Accede a todos nuestro beneficios en brasper</p>
                <form>
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    placeholder="Correo"
                    value={logindata.email}
                    onChange={handleOnchange}
                    required
                  />
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={logindata.password}
                    onChange={handleOnchange}
                    required
                  />
                  <div className="form-button">
                    <a className="ibtn">
                      Ingresar
                    </a>
                  </div>
                  <a href="forget">¿olvidades tu contraseña?</a>
                </form>
                {/* <div className="other-links social-with-title">
                  <div className="text">O inicia sesión con</div>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>Facebook
                  </a>
                  <a href="#">
                    <i className="fab fa-google"></i>Google
                  </a>
                  
                </div> */}

                <div className="page-links">
                  <a href="/singup">Registrate </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
