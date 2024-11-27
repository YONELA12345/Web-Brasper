"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  FaUserAlt,
  FaPercentage,
  FaMoneyBill,
  FaCog,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";

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
        <Link className="navbar-brand" href="/admin">
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
            {/* Vistas */}
            <li className="nav-item ms-2 my-2 text-white">Vistas</li>

            
            <li className="nav-item">
              <Link
                href="/admin/users"
                className={`nav-link ${
                  isActive("/admin/users") ? "active" : ""
                }`}
              >
                <FaUsers className="me-2" /> Usuarios
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/admin/users"
                className={`nav-link ${
                  isActive("/admin/users") ? "active" : ""
                }`}
              >
                <FaUserTie className="me-2" /> Clientes
              </Link>
            </li>

            {/* Tipo Cambio */}
            <li className="nav-item">
              <Link
                href="/admin/tasa"
                className={`nav-link ${
                  isActive("/admin/tasa") ? "active" : ""
                }`}
              >
                <FaPercentage className="me-2" /> Tipo Cambio
              </Link>
            </li>

            {/* Rangos */}
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#collapsepage"
                role="button"
                aria-expanded="false"
                aria-controls="collapsepage"
              >
                <FaMoneyBill className="me-2" /> Rangos
              </a>
              <ul className="nav collapse flex-column" id="collapsepage">
                <li className="nav-item">
                  <Link
                    href="/admin/solreal"
                    className={`nav-link ${
                      isActive("/admin/solreal") ? "active" : ""
                    }`}
                  >
                    Sol a Real
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/admin/realsol"
                    className={`nav-link ${
                      isActive("/admin/realsol") ? "active" : ""
                    }`}
                  >
                    Real a Sol
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/admin/dolarreal"
                    className={`nav-link ${
                      isActive("/admin/dolarreal") ? "active" : ""
                    }`}
                  >
                    Dólar a Real
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/admin/realdolar"
                    className={`nav-link ${
                      isActive("/admin/realdolar") ? "active" : ""
                    }`}
                  >
                    Real a Dólar
                  </Link>
                </li>
              </ul>
            </li>

            {/* Admin Settings */}
            <li className="nav-item">
              <Link
                href="/claims-book"
                className="claims-book-link d-flex align-items-center justify-content-center"
              >
                <GiOpenBook className="me-2" size={28} />
                Libro de reclamaciones
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/admin/settings"
                className={`nav-link ${
                  isActive("/admin/settings") ? "active" : ""
                }`}
              >
                <FaCog className="me-2" /> Admin Settings
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
