"use client";
import { useState, useEffect } from "react";
import Layout from "../layout";
import commissionRates from "@/src/data/commissionRates"; 
import factors from "@/src/data/factors"; 
import axios from "axios";

const API_URL = "https://api-brasper.onrender.com/api/v1/coin/exchange-rates/";

const DolarReal = () => {
  const brlToUsdRates = commissionRates["USD-BRL"];

  const [commissions, setCommissions] = useState(
    brlToUsdRates.map((rate, index) => ({
      label: `${rate.min} a ${rate.max}`,
      id: index + 1,
      value: rate.rate.toFixed(3), 
    }))
  );

  const brlToUsdFactors = factors["USD-BRL"];

  const [inverseCommissions, setInverseCommissions] = useState(
    brlToUsdFactors.map((rate, index) => ({
      label: `${rate.min} a ${rate.max}`,
      id: index + 1,
      value: rate.rate.toFixed(4), 
    }))
  );

  const handleInputChange = (id, newValue, setter, items) => {
    setter(items.map((item) => (item.id === id ? { ...item, value: newValue } : item)));
  };

  const handleLabelChange = (id, newLabel, setter, items) => {
    setter(items.map((item) => (item.id === id ? { ...item, label: newLabel } : item)));
  };

  const handleSaveRate = async (item, setter, items, currencyType) => {
    try {
      await axios.put(`${API_URL}${item.id}/`, {
        base_currency: "USD",
        target_currency: currencyType,
        rate: parseFloat(item.value),
      });
      console.log("Tasa de cambio guardada correctamente.");
      setter(items.map((rate) => (rate.id === item.id ? { ...rate, value: item.value } : rate)));
    } catch (error) {
      console.error("Error al guardar la tasa de cambio:", error);
    }
  };

  const handleAddRange = (setter, items) => {
    const newId = items.length + 1;
    const newLabel = `Nuevo Rango ${newId}`; 
    setter([...items, { label: newLabel, id: newId, value: "" }]);
  };

  return (
    <Layout>
      <div className="container my-5">
        <div className="text-center mb-6">
          <h1>Dólar a Real</h1>
        </div>
        
        <div className="container">
        <div className="">
          <h3>Comisión Porcentaje</h3>
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
                  className="btn btn-success"
                  onClick={() => handleSaveRate(item, setCommissions, commissions, "BRL")}
                >
                  Guardar
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
                  className="btn btn-success"
                  onClick={() => handleSaveRate(item, setInverseCommissions, inverseCommissions, "USD")}
                >
                  Guardar
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

export default DolarReal;
