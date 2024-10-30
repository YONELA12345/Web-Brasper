import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-light bg-light top-bar border-bottom shadow-sm">
      <div className="container-fluid">
        <button
          className="navbar-toggler d-xl-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-xl-none" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/admin/users">
                Usuarios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/admin/tasa">
                Tipo de Cambio
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={isOpen}
                onClick={toggleDropdown}
              >
                Rangos
                {/* Flecha personalizada */}
                <i
                  className={`fas fa-chevron-down ms-2 ${isOpen ? "rotate-icon" : ""
                    }`}
                  style={{ transition: "transform 0.3s ease" }}
                ></i>
              </a>
              <ul
                className={`dropdown-menu ${isOpen ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link className="dropdown-item" href="/admin/solreal">
                    Sol a Real
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/admin/realsol">
                    Real a Sol
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/admin/dolarreal">
                    Dólar a Real
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/admin/realdolar">
                    Real a Dólar
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#contact">
                admin Settings
              </a>
            </li> */}
          </ul>
        </div>

        {/* Profile & Notification section */}
        <div className="ms-xl-auto d-flex align-items-center">
          {/* Profile Dropdown */}
          <li className="nav-item dropdown">
            <a
              className="avatar "
              href="#"
              id="profileDropdown"
              role="button"
              data-bs-auto-close="outside"
              data-bs-display="static"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ width: '60px', height: 'auto' }}  
            >
              <img
                className="custom-logo"
                src="/assets/images/logos/logo_principal.png"
                alt="avatar"
              />
            </a>

            <ul
              className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
              aria-labelledby="profileDropdown"
            >
              <li>
                <Link className="dropdown-item bg-danger-soft-hover" href="/">
                  <i className="bi bi-power fa-fw me-2"></i>Cerrar sesión
                </Link>
              </li>
            </ul>
          </li>
        </div>
      </div>

      {/* Styles for custom icons and transitions */}
      <style jsx>{`
        /* Rotación de la flecha */
        .rotate-icon {
          transform: rotate(180deg);
        }

        /* Ocultar ícono predeterminado de Bootstrap */
        .dropdown-toggle::after {
          display: none;
        }

        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%2870, 70, 70, 0.5%29' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }

        .dropdown-animation {
          animation: dropdown-slide 0.3s ease;
        }

        @keyframes dropdown-slide {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
