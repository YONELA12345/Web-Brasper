import Layout from "@/layout";

const Pricing = () => {
  return (
    <Layout>
      {" "}
      <section
        className="p-0 mb-7 d-flex align-items-center position-relative overflow-hidden"
        style={{ marginBottom: "20px", height: "90vh" }} // Ajustamos la altura para centrar verticalmente
      >
        <div className="container-fluid rounded-3">
          <div className="row">
            {/* Sección Izquierda */}
            <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
              <div className="p-3 p-lg-5">
                {/* Título */}
                <div className="text-center">
                  <h2 className="fw-bold">
                    Bienvenidos a la comunidad más grande
                  </h2>
                  <p className="mb-0 h6 fw-light">
                    Haz Tranfereancias con nosotros
                  </p>
                </div>
                {/* Imagen SVG */}

                {/* Información */}
              </div>
            </div>

            {/* Sección Derecha */}
            <div className="col-12 col-lg-6 m-auto">
              <div className="row my-5">
                <div className="col-sm-10 col-xl-8 m-auto">
                  {/* Título */}
                  <span className="mb-0 fs-1">👋</span>
                  <h1 className="fs-2">¡Inicia sesión en Blasper!</h1>
                  <p className="lead mb-4">
                    ¡Qué bueno verte! Por favor, inicia sesión con tu cuenta.
                  </p>

                  {/* Formulario Inicio */}
                  <form>
                    {/* Email */}
                    <div className="mb-4">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Correo electrónico *
                      </label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                          <i className="bi bi-envelope-fill"></i>
                        </span>
                        <input
                          type="email"
                          className="form-control border-0 bg-light rounded-end ps-1"
                          placeholder="Correo electrónico"
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
                          placeholder="Contraseña"
                          id="inputPassword5"
                        />
                      </div>
                      <div id="passwordHelpBlock" className="form-text">
                        Tu contraseña debe tener al menos 8 caracteres
                      </div>
                    </div>
                    {/* Check box */}
                    <div className="mb-4 d-flex justify-content-between">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          Recuérdame
                        </label>
                      </div>
                      <div className="text-primary-hover">
                        <a
                          href="forgot-password.html"
                          className="text-secondary"
                        >
                          <u>¿Olvidaste tu contraseña?</u>
                        </a>
                      </div>
                    </div>
                    {/* Botón */}
                    <div className="align-items-center mt-0">
                      <div className="d-grid">
                        <button className="btn btn-primary mb-0" type="button">
                          Iniciar Sesión
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* Formulario Fin */}

                  {/* Botones sociales y divisor */}
                  <div className="row">
                    {/* Divisor con texto */}
                    <div className="position-relative my-4">
                      <hr />
                      <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">
                        O
                      </p>
                    </div>

                    {/* Botones sociales */}
                    <div className="col-xxl-6 d-grid">
                      <a href="#" className="btn bg-google mb-2 mb-xxl-0">
                        <i className="fab fa-fw fa-google text-white me-2"></i>
                        Inicia sesión con Google
                      </a>
                    </div>
                    <div className="col-xxl-6 d-grid">
                      <a href="#" className="btn bg-facebook mb-0">
                        <i className="fab fa-fw fa-facebook-f me-2"></i>Inicia
                        sesión con Facebook
                      </a>
                    </div>
                  </div>

                  {/* Enlace para registro */}
                  <div className="mt-4 text-center">
                    <span>
                      ¿No tienes una cuenta?{" "}
                      <a href="singup">Regístrate aquí</a>
                    </span>
                  </div>
                </div>
              </div>{" "}
              {/* Fin de la fila */}
            </div>
          </div>{" "}
          {/* Fin de la fila */}
        </div>
      </section>
    </Layout>
  );
};
export default Pricing;
