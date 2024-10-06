import Navbar from "../components/navbar";
import OffcanvasSidebar from "../components/sidbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout-container d-flex">
        {/* Sidebar con ancho fijo */}
        <div className="sidebar-container">
          <OffcanvasSidebar />
        </div>

        {/* Contenido principal */}
        <div className="content-container flex-grow-1">
          <Navbar />
          <div className="page-content-wrapper">
            {children}
          </div>
        </div>
      </div>

      <style jsx>{`
        .layout-container {
          height: 100vh;
          display: flex;
        }

        .sidebar-container {
          width: 250px; /* Ancho fijo para el sidebar */
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          background-color: #343a40; /* Color oscuro para el sidebar */
          z-index: 1000;
        }

        .content-container {
          margin-left: 250px; /* Dejar espacio para el sidebar */
          width: calc(100% - 250px);
          overflow-y: auto;
          background-color: transparent; /* Fondo transparente para el contenido */
          padding: 20px;
        }

        .page-content-wrapper {
          background-color: #ffffff; /* Fondo blanco limpio para el contenido */
          padding: 20px;
        }

        /* Responsividad para pantallas pequeñas */
        @media (max-width: 768px) {
          .sidebar-container {
            width: 100%;
            height: auto;
            position: relative;
          }

          .content-container {
            margin-left: 0;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Layout;
