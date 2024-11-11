// CommissionList.js
import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

const CommissionList = ({
  items,
  setItems,
  apiUrl,
  baseCurrencyId,
  targetCurrencyId,
}) => {
  const handleInputChange = (id, field, newValue) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: newValue } : item
      )
    );
  };

  const handleSaveCommission = async (item) => {
    try {
      const data = {
        base_currency: baseCurrencyId,
        target_currency: targetCurrencyId,
        commission_percentage: parseFloat(item.commission_percentage),
        reverse_commission: parseFloat(item.reverse_commission),
        range: parseInt(item.range) || 0,
      };

      if (item.id) {
        // Actualizar registro existente
        await axios.put(`${apiUrl}${item.id}/`, data);
      } else {
        // Crear nuevo registro
        const response = await axios.post(apiUrl, data);
        // Actualiza el item con el nuevo ID asignado por el servidor
        const newId = response.data.id;
        setItems(
          items.map((commission) =>
            commission === item ? { ...commission, id: newId } : commission
          )
        );
      }

      console.log("Comisión guardada correctamente.");
    } catch (error) {
      console.error("Error al guardar la comisión:", error.response.data);
    }
  };

  const handleAddRange = () => {
    // Determinar el siguiente número de rango disponible
    const nextRange =
      items.length > 0 ? Math.max(...items.map((item) => item.range)) + 1 : 1;
    setItems([
      ...items,
      {
        id: null,
        range: nextRange,
        commission_percentage: "",
        reverse_commission: "",
      },
    ]);
  };

  return (
    <div className="container">
      <div>
        <h3>Comisiones</h3>
      </div>
      {(items || [])
        .sort((a, b) => a.range - b.range)
        .map((item, index) => (
          <div
            className="row mt-3 d-flex justify-content-center align-items-center"
            key={item.id || `new-${index}`}
          >
            <div className="col-md-2 text-end">
              <input
                type="number"
                className="form-control"
                value={item.range}
                onChange={(e) =>
                  handleInputChange(item.id, "range", e.target.value)
                }
                placeholder="Rango"
                min="1"
              />
            </div>

            <div className="col-md-2">
              <input
                type="number"
                className="form-control"
                value={item.commission_percentage}
                onChange={(e) =>
                  handleInputChange(
                    item.id,
                    "commission_percentage",
                    e.target.value
                  )
                }
                placeholder="Comisión (%)"
                step="0.01"
                min="0"
              />
            </div>

            <div className="col-md-2">
              <input
                type="number"
                className="form-control"
                value={item.reverse_commission}
                onChange={(e) =>
                  handleInputChange(
                    item.id,
                    "reverse_commission",
                    e.target.value
                  )
                }
                placeholder="Comisión inversa"
                step="0.0001"
                min="0"
              />
            </div>

            <div className="col-md-2">
              <button
                className="btn btn-success"
                onClick={() => handleSaveCommission(item)}
              >
                Guardar
              </button>
            </div>
          </div>
        ))}
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={handleAddRange}>
          Agregar nuevo rango
        </button>
      </div>
    </div>
  );
};

CommissionList.propTypes = {
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
  apiUrl: PropTypes.string.isRequired,
  baseCurrencyId: PropTypes.number.isRequired,
  targetCurrencyId: PropTypes.number.isRequired,
};

export default CommissionList;
