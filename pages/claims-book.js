// claims-book.js
import React, { useState, useEffect } from "react";
import Header from "../src/layout/header/Index";
import Footer from "../src/layout/footer/Index";
import { FaPaperclip } from "react-icons/fa";
//import "bootstrap/dist/css/bootstrap.min.css";

const ClaimsBook = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      setCurrentDate(formattedDate);
    };

    updateDate();
    const timer = setInterval(updateDate, 1000 * 60 * 60 * 24);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header />

      <div className="claims-book-container d-flex justify-content-center align-items-center">
        <div className="card p-5 pb-10 shadow-sm w-100" style={{ maxWidth: "800px" }}>
          <h1 className="d-flex justify-content-center align-items-center">Libro de Reclamaciones</h1>
          <p className="description text-left">
            Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, esta institución cuenta con un libro de reclamaciones a su disposición.
            
          </p>
          <p>
          Proyecto ley Nº 29571
          </p>

          <div className="form-section mb-4">
            <div className="form-group d-flex justify-content-between align-items-center mb-3">
              <button className="btn btn-primary date-button">
                Fecha: {currentDate}
              </button>
              <span className="claim-number">N° 000 000001-2024</span>
            </div>

            <p className="instruction-text text-left">
              Antes de empezar, indícanos el lugar en el que se dieron los sucesos del reclamo:
            </p>

            <div className="form-group d-flex gap-3 mb-3">
              <select className="form-select">
                <option>Persona natural</option>
                <option>Empresa</option>
              </select>
              <input type="text" placeholder="RUC" className="form-control" />
            </div>

            <p className="note text-left text-muted">
              Nota: Si la queja o reclamo se relaciona con un proyecto entregado, consignar a la oficina principal.
            </p>

            <hr />

            {/* Sección de Identificación del Consumidor Reclamante */}
            <h5 className="text-left mt-4">1. Identificación del consumidor reclamante</h5>
            <div className="row g-3 mt-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Nombres" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Apellidos" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Correo Electrónico" />
              </div>
              <div className="col-md-6 d-flex">
                <span className="input-group-text">🇵🇪 +51</span>
                <input type="tel" className="form-control" placeholder="Teléfono" />
              </div>
              <div className="col-md-6">
                <select className="form-select">
                  <option>Tipo de Documento</option>
                  <option>DNI</option>
                  <option>Pasaporte</option>
                  <option>Carné de Extranjería</option>
                </select>
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="No. de Documento" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Departamento" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Provincia" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Distrito" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Dirección" />
              </div>
            </div>
          </div>
          <hr />

          {/* Sección de Detalle de Reclamación */}
          <h5 className="mt-4">2. Detalle de la Reclamación y Pedido del Consumidor</h5>
          <div className="form-section">
            <div className="form-group mb-3">
              <div className="d-flex gap-3">
                <div>
                  <input type="radio" id="reclamo" name="tipoReclamo" />
                  <label htmlFor="reclamo" className="ms-1">Reclamo</label>
                </div>
                <div>
                  <input type="radio" id="queja" name="tipoReclamo" />
                  <label htmlFor="queja" className="ms-1">Queja</label>
                </div>
              </div>
              <p className=" mt-2">
                <small>*Reclamo:</small> Disconformidad relacionada a los proyectos o servicios.<br />
                <small>***Queja:</small> Disconformidad no relacionada a los proyectos o servicios; o, malestar o descontento respecto a la atención al público.
              </p>
            </div>

            <div className="form-group mb-3">
              <textarea className="form-control" rows="3" placeholder="*Detalle"></textarea>
            </div>

            <div className="form-group mb-3">
              <textarea className="form-control" rows="3" placeholder="*Pedido"></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="file-upload" className="btn btn-primary d-flex align-items-center gap-2">
                <FaPaperclip />
                <span>Adjuntar Archivo</span>
              </label>
              <input id="file-upload" type="file" className="d-none" />
              <p className="text-muted mt-2">
                Adjuntar archivo (PDF, PPTX, WORD o imágenes JPG, PNG)
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .claims-book-container {
          min-height: 100vh;
          background-color: #f4f7fa;
        }
        .date-button {
          cursor: default;
        }
        h1 {
          color: #1b1f2e;
          font-size: 2em;
          margin-bottom: 1em;
        }
        .description {
          color: #737683;
          font-size: 1em;
          margin-bottom: 2em;
        }
        .instruction-text {
          font-size: 1em;
          color: #737683;
          margin-bottom: 1em;
        }
        .note {
          font-size: 0.9em;
        }
      `}</style>
    </>
  );
};

export default ClaimsBook;
