'use client';
import { useState } from "react";
import Layout from "../layout";
import exchangeRatesData from "@/src/data/exchangeRates"; 

const Tasa = () => {
  const [exchangeRates, setExchangeRates] = useState(exchangeRatesData);

  const handleInputChange = (key, value) => {
    setExchangeRates({
      ...exchangeRates,
      [key]: parseFloat(value),
    });
  };

  const handleDeleteRate = (key) => {
    const updatedRates = { ...exchangeRates };
    delete updatedRates[key]; 
    setExchangeRates(updatedRates); 
  };

  const handleAddRate = () => {
    const newKey = prompt("Ingrese la nueva clave de tasa (por ejemplo: 'PEN-USD')");
    const newRate = prompt("Ingrese el valor de la tasa (por ejemplo: '3.5')");

    if (newKey && newRate) {
      setExchangeRates({
        ...exchangeRates,
        [newKey]: parseFloat(newRate),
      });
    }
  };

  return (
    <Layout>
      <div className="d-flex justify-content-center align-items-center vh-90">
        <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '600px' }}>
          <h2 className="text-center mb-4">Tasas de Cambio</h2>
          <form>
            {Object.entries(exchangeRates).map(([key, rate]) => (
              <div key={key} className="row mb-3 align-items-center">
                <label htmlFor={key} className="col-sm-4 col-form-label">
                  {key}
                </label>
                <div className="col-sm-5">
                  <input
                    type="number"
                    className="form-control"
                    value={rate}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                    step="0.0001"
                  />
                </div>
                <div className="col-sm-3 text-end">
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    style={{ width: "100%" }}
                    onClick={() => handleDeleteRate(key)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}

            <div className="text-center mt-4">
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "100%" }}
                onClick={handleAddRate}
              >
                Agregar nueva tasa
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Tasa;
