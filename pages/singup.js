import Layout from "@/layout";
import Image from "next/image";
import Link from "next/link";

const Pricing = () => {
  return (
    <Layout>
      <section
        className="p-0 d-flex align-items-center position-relative overflow-hidden"
        style={{ marginBottom: "20px", height: "100vh" }}
      >
        <div className="container-fluid">
          <div className="row">
            {/* Sección Izquierda */}
            <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
              <div className="p-3 p-lg-5">
                {/* Título */}
                <div className="text-center">
                  <h2 className="fw-bold">
                    Bienvenido a la comunidad de Blasper{" "}
                  </h2>
                  {/*  <p className="mb-0 h6 fw-light">
                    Let's learn something new today!
                  </p> */}
                </div>
              </div>
            </div>

            {/* Sección Derecha */}
            <div className="col-12 col-lg-6 m-auto">
              <div className="row my-5">
                <div className="col-sm-10 col-xl-8 m-auto">
                  {/* Título */}

                  <h2>Registra tu ceutna con Brasper</h2>
                  <p className="lead mb-4">
                    {/*            Nice to see you! Please Sign up with your account. */}
                  </p>

                  {/* Formulario Inicio */}
                  <form>
                    {/* Email */}
                    <div className="mb-4">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Correo electronico *
                      </label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                          <i className="bi bi-envelope-fill"></i>
                        </span>
                        <input
                          type="email"
                          className="form-control border-0 bg-light rounded-end ps-1"
                          placeholder="E-mail"
                          id="exampleInputEmail1"
                        />
                      </div>
                    </div>
                    {/* Contraseña */}
                    <div className="mb-4">
                      <label htmlFor="inputPassword5" className="form-label">
                        Contraseña *
                      </label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                          <i className="fas fa-lock"></i>
                        </span>
                        <input
                          type="password"
                          className="form-control border-0 bg-light rounded-end ps-1"
                          placeholder="*********"
                          id="inputPassword5"
                        />
                      </div>
                    </div>
                    {/* Confirmar Contraseña */}
                    <div className="mb-4">
                      <label htmlFor="inputPassword6" className="form-label">
                        Confirma la contraseña *
                      </label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                          <i className="fas fa-lock"></i>
                        </span>
                        <input
                          type="password"
                          className="form-control border-0 bg-light rounded-end ps-1"
                          placeholder="*********"
                          id="inputPassword6"
                        />
                      </div>
                    </div>
                    {/* Check box */}
                    {/*  <div className="mb-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkbox-1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkbox-1"
                        >
                          By signing up, you agree to the{" "}
                          <Link href="#">terms of service</Link>
                        </label>
                      </div>
                    </div> */}
                    {/* Botón */}
                    <div className="align-items-center mt-0">
                      <div className="d-grid">
                        <button className="btn btn-primary mb-0" type="button">
                          inicia Session
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* Fin del Formulario */}

                  {/* Botones sociales */}
                  <div className="row">
                    {/* Divisor con texto */}
                    <div className="position-relative my-4">
                      <hr />
                      <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">
                        O{" "}
                      </p>
                    </div>
                    {/* Botón social */}
                    <div className="col-xxl-6 d-grid">
                      <a href="#" className="btn bg-google mb-2 mb-xxl-0">
                        <i className="fab fa-fw fa-google text-white me-2"></i>
                        Google
                      </a>
                    </div>
                    {/* Botón social */}
                    <div className="col-xxl-6 d-grid">
                      <a href="#" className="btn bg-facebook mb-0">
                        <i className="fab fa-fw fa-facebook-f me-2"></i>Signup
                        Facebook
                      </a>
                    </div>
                  </div>

                  {/* Enlace para registro */}
                  <div className="mt-4 text-center">
                    <span>
                      Already have an account?{" "}
                      <Link href="/login">inicia session aqui</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Pricing;
