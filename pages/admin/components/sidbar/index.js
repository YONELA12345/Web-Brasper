"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const OffcanvasSidebar = () => {
  const router = useRouter();

  useEffect(() => {
    // Este código solo se ejecutará en el cliente, no en el servidor
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // Función para determinar si un enlace está activo
  const isActive = (path) => router.pathname === path;

  return (
    <nav className="navbar sidebar navbar-expand-xl navbar-dark bg-dark">
      {/* Navbar brand for xl START */}
      <div className="d-flex align-items-center">
        <Link className="navbar-brand" href="/">
          <img
            src="/assets/images/logos/logo_completo.png"
            alt="Logo"
            title="Logo"
          />
        </Link>
      </div>
      {/* Navbar brand for xl END */}

      <div
        className="offcanvas offcanvas-start flex-row custom-scrollbar h-100"
        data-bs-backdrop="true"
        tabIndex="-1"
        id="offcanvasSidebar"
      >
        <div className="offcanvas-body sidebar-content d-flex flex-column bg-dark">
          {/* Sidebar menu START */}
          <ul className="navbar-nav flex-column" id="navbar-sidebar">
            {/* Menu item 1 */}
            <li className="nav-item">
              <Link
                href="/admin"
                className={`nav-link ${isActive("/admin") ? "active" : ""}`}
              >
                <i className="fas fa-house fa-fw me-2"></i>Dashboard
              </Link>
            </li>

            {/* Title */}
            <li className="nav-item ms-2 my-2 ">Pages</li>

            {/* Menu item 2 */}
            <li className="nav-item">
              <Link
                href="/admin/users"
                className={`nav-link ${
                  isActive("/admin/users") ? "active" : ""
                }`}
              >
                <i className="far fa-user-alt fa-fw me-2"></i>Usuarios
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
              {/* Submenu */}
              <ul
                className="nav collapse flex-column"
                id="collapsepage"
                data-bs-parent="#navbar-sidebar"
              >
                <li className="nav-item">
                  <Link
                    href="/admin/rangos/sol-real"
                    className={`nav-link ${
                      isActive("/admin/rangos/sol-real") ? "active" : ""
                    }`}
                  >
                    Sol a Real
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/admin/rangos/real-sol"
                    className={`nav-link ${
                      isActive("/admin/rangos/real-sol") ? "active" : ""
                    }`}
                  >
                    Real a Sol
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/admin/rangos/dolar-real"
                    className={`nav-link ${
                      isActive("/admin/rangos/dolar-real") ? "active" : ""
                    }`}
                  >
                    Dolar a Real
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/admin/rangos/real-dolar"
                    className={`nav-link ${
                      isActive("/admin/rangos/real-dolar") ? "active" : ""
                    }`}
                  >
                    Real a Dolar
                  </Link>
                </li>
              </ul>
            </li>

            {/* Menu item 6 */}
            <li className="nav-item">
              <Link
                href="/admin/earnings"
                className={`nav-link ${
                  isActive("/admin/earnings") ? "active" : ""
                }`}
              >
                <i className="far fa-chart-bar fa-fw me-2"></i>Earnings
              </Link>
            </li>

            {/* Menu item 7 */}
            <li className="nav-item">
              <Link
                href="/admin/settings"
                className={`nav-link ${
                  isActive("/admin/settings") ? "active" : ""
                }`}
              >
                <i className="fas fa-user-cog fa-fw me-2"></i>Admin Settings
              </Link>
            </li>
          </ul>
          {/* Sidebar menu end */}
        </div>
      </div>
    </nav>
  );
};

export default OffcanvasSidebar;
