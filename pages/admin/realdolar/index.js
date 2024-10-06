"use client";
import { useState, useEffect } from "react";
import Layout from "../layout";
import commissionRates from "@/src/data/commissionRates"; // Importamos las tasas de comisión

const RealSol = () => {
  // Obtener las tasas de "BRL-USD" desde commissionRates
  const brlToUsdRates = commissionRates["BRL-USD"];

  // Estado inicial de los rangos para "Comisión Porcentaje" usando los valores de "BRL-USD"
  const [commissions, setCommissions] = useState(
    brlToUsdRates.map((rate, index) => ({
      label: `${rate.min} a ${rate.max}`,
      id: index + 1,
      value: rate.rate.toFixed(5), // Inicializamos con el valor de comisión desde el array
    }))
  );

  // Estado inicial de los rangos para "Comisión Inversa"
  const [inverseCommissions, setInverseCommissions] = useState([
    { label: "100 a 199", id: 1, value: "" },
    { label: "200 a 299", id: 2, value: "" },
    { label: "300 a 499", id: 3, value: "" },
    { label: "500 a 999", id: 4, value: "" },
    { label: "1000 a 4999", id: 5, value: "" },
  ]);

  // Función para actualizar el valor de un rango existente
  const handleInputChange = (id, newValue, setter, items) => {
    setter(items.map((item) => (item.id === id ? { ...item, value: newValue } : item)));
  };

  // Función para editar el rango (label)
  const handleLabelChange = (id, newLabel, setter, items) => {
    setter(items.map((item) => (item.id === id ? { ...item, label: newLabel } : item)));
  };

  // Función para agregar un nuevo rango
  const handleAddRange = (setter, items) => {
    const newId = items.length + 1;
    const newLabel = `Nuevo Rango ${newId}`; // Etiqueta por defecto para el nuevo rango
    setter([...items, { label: newLabel, id: newId, value: "" }]);
  };

  // Función para eliminar un rango
  const handleDeleteRange = (id, setter, items) => {
    setter(items.filter((item) => item.id !== id));
  };

  return (
    <Layout>
      <div className="container my-5">
        <div className="text-center mb-4">
          <h1>Real a Dólar</h1>
          <h2>Comisión Porcentaje</h2>
        </div>

        {/* Grupo de Inputs para Comisión Porcentaje */}
        <div className="container">
          {commissions.map((item) => (
            <div
              className="row mt-3 d-flex justify-content-center align-items-center"
              key={item.id}
            >
              {/* Editable Label */}
              <div className="col-md-3 text-end">
                <input
                  type="text"
                  className="form-control"
                  value={item.label}
                  onChange={(e) => handleLabelChange(item.id, e.target.value, setCommissions, commissions)}
                  placeholder="Editar rango"
                />
              </div>
              
              <div className="col-md-3">
                <input
                  type="number"
                  className="form-control"
                  value={item.value}
                  onChange={(e) => handleInputChange(item.id, e.target.value, setCommissions, commissions)}
                  placeholder="Ingrese valor"
                  step="0.001"  // Permite hasta 5 decimales
                  min="0"         // Opcional: valor mínimo
                />
              </div>

              {/* Botón de eliminar */}
              <div className="col-md-2">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteRange(item.id, setCommissions, commissions)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para agregar nuevo rango en Comisión Porcentaje */}
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={() => handleAddRange(setCommissions, commissions)}>
            Agregar nuevo rango
          </button>
        </div>

        {/* Comisión Inversa */}
        <div className="text-center my-4">
          <h2>Comisión Inversa</h2>
        </div>

        {/* Grupo de Inputs para Comisión Inversa */}
        <div className="container">
          {inverseCommissions.map((item) => (
            <div
              className="row mt-3 d-flex justify-content-center align-items-center"
              key={item.id}
            >
              {/* Editable Label */}
              <div className="col-md-3 text-end">
                <input
                  type="text"
                  className="form-control"
                  value={item.label}
                  onChange={(e) => handleLabelChange(item.id, e.target.value, setInverseCommissions, inverseCommissions)}
                  placeholder="Editar rango"
                />
              </div>
              
              {/* Editable Value - Números con 5 decimales */}
              <div className="col-md-3">
                <input
                  type="number"
                  className="form-control"
                  value={item.value}
                  onChange={(e) => handleInputChange(item.id, e.target.value, setInverseCommissions, inverseCommissions)}
                  placeholder="Ingrese valor"
                  step="0.00001"  // Permite hasta 5 decimales
                  min="0"         // Opcional: valor mínimo
                />
              </div>

              {/* Botón de eliminar */}
              <div className="col-md-2">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteRange(item.id, setInverseCommissions, inverseCommissions)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para agregar nuevo rango en Comisión Inversa */}
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={() => handleAddRange(setInverseCommissions, inverseCommissions)}>
            Agregar nuevo rango
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default RealSol;
