import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo START */}

        {/* Logo END */}

        {/* Toggler for sidebar START */}
        <button
          className="navbar-toggler d-xl-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-animation">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        {/* Toggler for sidebar END */}

        {/* Collapsible content START */}
        <div className="collapse navbar-collapse d-xl-none" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="ms-xl-auto">
          <ul className="navbar-nav flex-row align-items-center">
            {/* Notification dropdown START */}
            {/*     <li className="nav-item ms-2 ms-md-3 dropdown">
              <a
                className="btn btn-light btn-round mb-0"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                <i className="bi bi-bell fa-fw"></i>
              </a>
              <span className="notif-badge animation-blink"></span>

           
            </li> */}
            {/* Notification dropdown END */}

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
                  src="assets/images/logos/logo_principal.png"
                  alt="avatar"
                />
              </a>

              {/* Profile dropdown START */}
              <ul
                className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                aria-labelledby="profileDropdown"
              >
                {/*  <li className="px-3">
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
                </li> */}
                {/*   <li>
                  {" "}
                  <hr className="dropdown-divider" />
                </li>
 */}
                <li>
                  <a className="dropdown-item bg-danger-soft-hover" href="#">
                    <i className="bi bi-power fa-fw me-2"></i>Cerrar sesion
                  </a>
                </li>
              </ul>
              {/* Profile dropdown END */}
            </li>
            {/* Profile dropdown END */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
