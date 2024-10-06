import { useRouter } from "next/router"; // Para redirigir al usuario

const Navbar = () => {
  const router = useRouter();

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    // Eliminar el token de localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    
    // Si estás usando cookies, también puedes limpiar el token de las cookies.
    // document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Redirigir al usuario a la página de login
    router.push("/login");
  };

  return (
    <nav className="navbar top-bar navbar-light border-bottom py-0 py-xl-3">
      <div className="container-fluid p-0">
        <div className="d-flex align-items-center w-100">
          {/* Logo START */}
          <div className="d-flex align-items-center d-xl-none">
            <a className="navbar-brand" href="index.html">
              <img
                className="light-mode-item navbar-brand-item h-30px"
                src="assets/images/logo-mobile.svg"
                alt="Logo"
              />
              <img
                className="dark-mode-item navbar-brand-item h-30px"
                src="assets/images/logo-mobile-light.svg"
                alt="Logo"
              />
            </a>
          </div>
          {/* Logo END */}

          <div className="ms-xl-auto">
            <ul className="navbar-nav flex-row align-items-center">
              {/* Profile dropdown START */}
              <li className="nav-item ms-2 ms-md-3 dropdown">
                <a
                  className="avatar avatar-sm p-0"
                  href="#"
                  id="profileDropdown"
                  role="button"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/avatar/01.jpg"
                    alt="avatar"
                  />
                </a>

                {/* Profile dropdown START */}
                <ul
                  className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                  aria-labelledby="profileDropdown"
                >
                  <li className="px-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3 mb-3">
                        <img
                          className="avatar-img rounded-circle shadow"
                          src="assets/images/avatar/01.jpg"
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <a className="h6 mt-2 mt-sm-0" href="#">
                          Lori Ferguson
                        </a>
                        <p className="small m-0">example@gmail.com</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <a
                      className="dropdown-item bg-danger-soft-hover"
                      href="#"
                      onClick={handleLogout} // Llama a la función para cerrar sesión
                    >
                      <i className="bi bi-power fa-fw me-2"></i>Cerrar sesión
                    </a>
                  </li>
                </ul>
                {/* Profile dropdown END */}
              </li>
              {/* Profile dropdown END */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
