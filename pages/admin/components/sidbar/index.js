'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const OffcanvasSidebar = () => {
  const router = useRouter();

  useEffect(() => {
    // Importar Bootstrap JS solo en el cliente
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const isActive = (path) => router.pathname === path;

  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Botón de menú para dispositivos móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSidebar"
          aria-controls="offcanvasSidebar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas para dispositivos móviles y sidebar para pantallas grandes */}
        <div
          className="offcanvas offcanvas-start bg-dark custom-offcanvas"
          id="offcanvasSidebar"
          tabIndex="-1"
          data-bs-backdrop="true"
        >
          <div className="offcanvas-header">
            {/* Logo */}
            <Link className="navbar-brand" href="/">
              <img
                src="/assets/images/logos/logo_completo.png"
                alt="Logo"
                title="Logo"
                style={{ height: '40px' }}
              />
            </Link>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-flex flex-column p-3">
            <ul className="navbar-nav flex-column" id="navbar-sidebar">
              <li className="nav-item">
                <Link
                  href="/admin"
                  className={`nav-link ${isActive('/admin') ? 'active' : ''}`}
                >
                  <i className="fas fa-house fa-fw me-2"></i>Dashboard
                </Link>
              </li>
              <li className="nav-item ms-2 my-2 text-white">Vistas</li>
              <li className="nav-item">
                <Link
                  href="/admin/users"
                  className={`nav-link ${isActive('/admin/users') ? 'active' : ''}`}
                >
                  <i className="far fa-user-alt fa-fw me-2"></i>Usuarios
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/admin/tasa"
                  className={`nav-link ${isActive('/admin/tasa') ? 'active' : ''}`}
                >
                  <i className="fas fa-percentage fa-fw me-2"></i>Tipo Cambio
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="collapse"
                  href="#collapsepage"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapsepage"
                >
                  <i className="fas fa-money-bill fa-fw me-2"></i>Rangos
                </a>
                <ul className="nav collapse flex-column" id="collapsepage">
                  <li className="nav-item">
                    <Link
                      href="/admin/solreal"
                      className={`nav-link ${isActive('/admin/solreal') ? 'active' : ''}`}
                    >
                      Sol a Real
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/admin/realsol"
                      className={`nav-link ${isActive('/admin/realsol') ? 'active' : ''}`}
                    >
                      Real a Sol
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/admin/dolarreal"
                      className={`nav-link ${isActive('/admin/dolarreal') ? 'active' : ''}`}
                    >
                      Dólar a Real
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/admin/realdolar"
                      className={`nav-link ${isActive('/admin/realdolar') ? 'active' : ''}`}
                    >
                      Real a Dólar
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  href="/admin/settings"
                  className={`nav-link ${isActive('/admin/settings') ? 'active' : ''}`}
                >
                  <i className="fas fa-user-cog fa-fw me-2"></i>Admin Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-offcanvas {
          width: 250px; /* Ajusta el ancho del offcanvas */
        }

        @media (max-width: 576px) {
          .custom-offcanvas {
            width: 80%; /* Menor ancho en dispositivos móviles */
          }
        }
      `}</style>
    </nav>
  );
};

export default OffcanvasSidebar;
