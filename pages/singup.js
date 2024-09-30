import { useEffect, useState, React } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Script from "next/script";

const singup = () => {
  const router = useRouter();
  const [formdata, setFormdata] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
  });

  const handleOnchange = async (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  // const handleSigninWithGoogle =  async (response) => {
  //   const payload = response.credential;
  //   const server_res = await axios.post(
  //     `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/google/`,
  //     { access_token: payload }
  //   );
  //   console.log(server_res.data);
  // };

  // useEffect(() => {
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  //     callback: handleSigninWithGoogle,
  //   });
  //   google.accounts.id.renderButton(document.getElementById("signInDiv"), {
  //     theme: "outline",
  //     size: "large",
  //     text: "continue_with",
  //     shape: "circle",
  //     width: "280",
  //   });
  // }, []);

  const { email, first_name, last_name, password, password2 } = formdata;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/register/`,
        formdata
      );
      console.log(response.data);
      const result = response.data;
      if (response.status === 201) {
        router.push("/verify");
        toast.success(result.message);
      }
    } catch (error) {
      toast.error("Registration failed");
      console.error(error);
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
                <form action="" onSubmit={handleSubmit}>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Correo"
                    value={email}
                    onChange={handleOnchange}
                    required
                  />
                  <input
                    type="text"
                    className="email-form"
                    name="first_name"
                    placeholder="Nombres"
                    value={first_name}
                    onChange={handleOnchange}
                    required
                  />
                  <input
                    type="text"
                    className="email-form"
                    name="last_name"
                    placeholder="Apellidos"
                    value={last_name}
                    onChange={handleOnchange}
                    required
                  />
                  
                  <input
                    className="form-control"
                    type="number"
                    name="number"
                    placeholder="Telefono"
                    required
                  />
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handleOnchange}
                    required
                  />
                  <input
                    className="form-control"
                    type="password"
                    name="password2"
                    placeholder="Confirmar contraseña"
                    value={password2}
                    onChange={handleOnchange}
                    required
                  />
                  <div className="form-button">
                    <button id="submit" type="submit" className="ibtn">
                      Registrate
                    </button>
                  </div>
                </form>
                {/* <div className="other-links social-with-title">
                  <div className="text">Or register with</div>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>Facebook
                  </a>
                  <a href="#">
                    <i className="fab fa-google" id="signInDiv"></i>Google
                  </a>
                </div> */}
                <div className="page-links">
                  <Link href="/login" legacyBehavior>
                    <a>Incio de sesion </a>
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
export default singup;
