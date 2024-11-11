import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Singup = () => {
  const router = useRouter();
  const [formdata, setFormdata] = useState({
    email: "",
    first_name: "",
    last_name: "",
    document_number: "",
    phone_number: "",
    country: "", // Nuevo campo
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const handleOnchange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{9,15}$/;

    if (!emailRegex.test(formdata.email)) {
      formErrors.email = "El correo no es válido.";
    }
    if (formdata.first_name.trim() === "") {
      formErrors.first_name = "El nombre es obligatorio.";
    }
    if (formdata.last_name.trim() === "") {
      formErrors.last_name = "El apellido es obligatorio.";
    }
    if (formdata.document_number.trim() === "") {
      formErrors.document_number = "El número de documento es obligatorio.";
    }
    if (!phoneRegex.test(formdata.phone_number)) {
      formErrors.phone_number = "El teléfono debe tener entre 9 y 15 dígitos.";
    }
    if (formdata.country.trim() === "") {
      formErrors.country = "El campo país es obligatorio.";
    }
    if (formdata.password.length < 6) {
      formErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }
    if (formdata.password !== formdata.password2) {
      formErrors.password2 = "Las contraseñas no coinciden.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}api/v1/auth/register/`,
          formdata,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        console.log(response.data);
        if (response.status === 201) {
          toast.success(
            "Registro exitoso, redirigiendo a la página de inicio de sesión..."
          );
          router.push("/login"); // Redirige a la página de inicio de sesión
        }
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          for (const key in serverErrors) {
            toast.error(`${key}: ${serverErrors[key].join(", ")}`);
          }
        } else {
          toast.error("Error en el registro, por favor revisa los datos.");
        }
        console.error(error);
      }
    } else {
      toast.error("Por favor corrige los errores en el formulario.");
    }
  };
  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: handleGoogleResponse,
      });
      google.accounts.id.renderButton(
        document.getElementById("googleSignInButton"),
        { theme: "outline", size: "large" }
      );
    }
  }, []);
  const handleGoogleResponse = async (response) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}auth/google`,
        { token: response.credential }
      );

      if (res.status === 200) {
        const data = res.data;
        sessionStorage.setItem("token", data.token);
        login({
          token: data.token,
          id: data.id,
          nombre: data.nombre,
          rol: data.rol,
        });

        if (data.rol === "Admin") {
          navigate("/admin");
        } else if (data.rol === "Super Admin") {
          navigate("/superadmin");
        } else if (data.rol === "Alumno") {
          navigate("/Alumno");
        }
      }
    } catch (error) {
      console.error("Error al autenticar con Google:", error);
    }
  };

  return (
    <>
      <div className="form-body without-side">
        <div className="website-logo">
          <Link href="/" legacyBehavior>
            <a>
              <div className="logo">
                <img
                  className="logo-size"
                  src="/assets/images/logos/logo-light.svg"
                  alt="Logo"
                />
              </div>
            </a>
          </Link>
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
                <h2 className="text-center pb-4">Registrar nueva cuenta</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Correo"
                    value={formdata.email}
                    onChange={handleOnchange}
                    required
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}

                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    placeholder="Nombres"
                    value={formdata.first_name}
                    onChange={handleOnchange}
                    required
                  />
                  {errors.first_name && (
                    <p className="error-text">{errors.first_name}</p>
                  )}

                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    placeholder="Apellidos"
                    value={formdata.last_name}
                    onChange={handleOnchange}
                    required
                  />
                  {errors.last_name && (
                    <p className="error-text">{errors.last_name}</p>
                  )}

                  {/* <input
                    type="text"
                    className="form-control"
                    name="document_number"
                    placeholder="Número de documento"
                    value={formdata.document_number}
                    onChange={handleOnchange}
                    required
                  />
                  {errors.document_number && <p className="error-text">{errors.document_number}</p>} */}

                  <input
                    type="text"
                    className="form-control"
                    name="phone_number"
                    placeholder="Teléfono"
                    value={formdata.phone_number}
                    onChange={handleOnchange}
                    required
                  />
                  {errors.phone_number && (
                    <p className="error-text">{errors.phone_number}</p>
                  )}

                  <input
                    type="text"
                    className="form-control"
                    name="country"
                    placeholder="País"
                    value={formdata.country}
                    onChange={handleOnchange}
                    required
                  />
                  {errors.country && (
                    <p className="error-text">{errors.country}</p>
                  )}

                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formdata.password}
                    onChange={handleOnchange}
                    required
                  />
                  {errors.password && (
                    <p className="error-text">{errors.password}</p>
                  )}

                  <input
                    className="form-control"
                    type="password"
                    name="password2"
                    placeholder="Confirmar contraseña"
                    value={formdata.password2}
                    onChange={handleOnchange}
                    required
                  />
                  {errors.password2 && (
                    <p className="error-text">{errors.password2}</p>
                  )}

                  <div className="form-button">
                    <button id="submit" type="submit" className="ibtn">
                      Registrate
                    </button>
                  </div>
                </form>
                <div className="page-links">
                  <div id="googleSignInButton" className="mt-4"></div>
                  <Link href="/login" legacyBehavior>
                    <a>Inicio de sesión</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singup;
