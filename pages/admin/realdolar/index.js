"use client";
import { useState, useEffect } from "react";
import Layout from "../layout";
import commissionRates from "@/src/data/commissionRates"; 
import factors from "@/src/data/factors"; 

const RealDolar = () => {
  
  const brlToUsdRates = commissionRates["BRL-USD"];


  const [commissions, setCommissions] = useState(
    brlToUsdRates.map((rate, index) => ({
      label: `${rate.min} a ${rate.max}`,
      id: index + 1,
      value: rate.rate.toFixed(5), 
    }))
  );

  const brlToUsdFactors = factors["BRL-USD"];

  const [inverseCommissions, setInverseCommissions] = useState(
    brlToUsdFactors.map((rate, index) => ({
      label: `${rate.min} a ${rate.max}`,
      id: index + 1,
      value: rate.rate.toFixed(5), 
    }))
  );

  const handleInputChange = (id, newValue, setter, items) => {
    setter(items.map((item) => (item.id === id ? { ...item, value: newValue } : item)));
  };

  const handleLabelChange = (id, newLabel, setter, items) => {
    setter(items.map((item) => (item.id === id ? { ...item, label: newLabel } : item)));
  };

  const handleAddRange = (setter, items) => {
    const newId = items.length + 1;
    const newLabel = `Nuevo Rango ${newId}`; 
    setter([...items, { label: newLabel, id: newId, value: "" }]);
  };

  const handleDeleteRange = (id, setter, items) => {
    setter(items.filter((item) => item.id !== id));
  };

  return (
    <Layout>
      <div className="container my-5">
        <div className="text-center mb-6">
          <h1>Real a Dólar</h1>
        </div>
        
        <div className="container">
        <div className="">
          <h3 >Comisión Porcentaje</h3>
        </div>
          {commissions.map((item) => (
            
            <div
              className="row mt-3 d-flex justify-content-center align-items-center"
              key={item.id}
            >
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
                  step="0.000001"  
                  min="0"         
                />
              </div>

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

        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={() => handleAddRange(setCommissions, commissions)}>
            Agregar nuevo rango
          </button>
        </div>

        <div className="container">
        <div className="">
          <h3>Comisión Inversa</h3>
        </div>
          {inverseCommissions.map((item) => (
            <div
              className="row mt-3 d-flex justify-content-center align-items-center"
              key={item.id}
            >
              <div className="col-md-3 text-end">
                <input
                  type="text"
                  className="form-control"
                  value={item.label}
                  onChange={(e) => handleLabelChange(item.id, e.target.value, setInverseCommissions, inverseCommissions)}
                  placeholder="Editar rango"
                />
              </div>
              <div className="col-md-3">
                <input
                  type="number"
                  className="form-control"
                  value={item.value}
                  onChange={(e) => handleInputChange(item.id, e.target.value, setInverseCommissions, inverseCommissions)}
                  placeholder="Ingrese valor"
                  step="0.000001"  
                  min="0"       
                />
              </div>

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
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={() => handleAddRange(setInverseCommissions, inverseCommissions)}>
            Agregar nuevo rango
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default RealDolar;
