"use client";
import { useState, useEffect } from "react";
import Layout from "../layout";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/v1/coin/commission-rates-app/";
const API_BASE_URL = "http://localhost:8000/api/v1/coin/commissions/1";

const SolReal = () => {
  const [commissions, setCommissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommissions = async () => {
      try {
        const response = await axios.get(API_URL);
        // Asumiendo que la respuesta tiene un formato similar a:
        // { "PEN-BRL": [ { "min": ..., "max": ..., "rate": ... }, ... ] }
        const data = response.data["PEN-BRL"] || []; // Asegúrate de manejar el caso de no encontrar la clave
        setCommissions(
          data.map((rate, index) => ({
            label: `${rate.min} a ${rate.max}`,
            id: index + 1, // Usa un índice si no hay `id` en los datos
            value: rate.rate.toFixed(3),
            min: rate.min,
            max: rate.max
          }))
        );
      } catch (error) {
        console.error("Error al obtener las comisiones:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCommissions();
  }, []);

  const handleInputChange = (id, newValue, setter, items) => {
    setter(items.map((item) => (item.id === id ? { ...item, value: newValue } : item)));
  };

  const handleLabelChange = (id, newLabel, setter, items) => {
    setter(items.map((item) => (item.id === id ? { ...item, label: newLabel } : item)));
  };

  const handleSaveRate = async (item, setter, items) => {
    try {
      // Verifica que el `id` esté presente en el item
      if (!item.id) {
        console.error("El elemento no tiene un id válido.");
        return;
      }
  
      const url = `http://localhost:8000/api/v1/coin/commissions/1/`;
  
      // Solo se envía el campo `commission_percentage`
      const requestData = {
        commission_percentage: parseFloat(item.value),
      };
  
      await axios.put(url, requestData);
      console.log("Tasa de cambio guardada correctamente.");
      setter(items.map((rate) => (rate.id === item.id ? { ...rate, value: item.value } : rate)));
    } catch (error) {
      console.error("Error al guardar la tasa de cambio:", error);
    }
  };

  const handleAddRange = (setter, items) => {
    const newId = items.length + 1;
    const newLabel = `Nuevo Rango ${newId}`;
    setter([...items, { label: newLabel, id: newId, value: "", min: 0, max: 0 }]);
  };

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  return (
    <Layout>
      <div className="container my-5">
        <div className="text-center mb-6">
          <h1>Sol a Real</h1>
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
                  onClick={() => handleSaveRate(item, setCommissions, commissions)}
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
      </div>
    </Layout>
  );
};

export default SolReal;
