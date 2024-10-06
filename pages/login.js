import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import users from "@/src/data/users.json"; 

const Login = () => {
  const router = useRouter();

  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });

  const handleOnchange = (e) => {
    setLogindata({ ...logindata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = logindata;

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("token", user.access_token);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Login exitoso");

      if (user.role === "admin") {
        router.push("/admin"); 
      } else if (user.role === "user") {
        router.push("/Dash"); 
      }
    } else {
      toast.error("Usuario o contraseña incorrectos");
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
                <h3 className="text-center pb-3">Inicio de sesión</h3>
                <p>Accede a todos nuestros beneficios en Brasper</p>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="btn btn-primary">
                      Ingresar
                    </button>
                  </div>
                  <a href="/forget">¿Olvidaste tu contraseña?</a>
                </form>
                <div className="page-links">
                  <a href="/signup">Registrarse</a>
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
