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
    const sanitizedValue = newValue.replace(/,/g, "");
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: sanitizedValue } : item
      )
    );
  };

  const handleSaveCommission = async (item) => {
    try {
      const commissionData = {
        base_currency: baseCurrencyId,
        target_currency: targetCurrencyId,
        commission_percentage:
          parseFloat(item.commission_percentage.toString().replace(/,/g, "")) ||
          0,
        reverse_commission:
          parseFloat(item.reverse_commission.toString().replace(/,/g, "")) || 0,
        range: item.range,
      };

      const rangeData = {
        min_amount:
          parseFloat(item.min_amount.toString().replace(/,/g, "")) || 0,
        max_amount:
          parseFloat(item.max_amount.toString().replace(/,/g, "")) || 0,
      };

      if (item.id) {
        // Actualizar registro existente
        await axios.put(`${apiUrl}${item.id}/`, {
          ...commissionData,
          range_details: rangeData,
        });
      } else {
        // Crear nuevo registro
        const response = await axios.post(apiUrl, {
          ...commissionData,
          range_details: rangeData,
        });
        // Actualiza el item con el nuevo ID asignado por el servidor
        const newId = response.data.id;
        setItems(
          items.map((commission) =>
            commission.range === item.range
              ? { ...commission, id: newId }
              : commission
          )
        );
      }

      console.log("Comisión guardada correctamente.");
    } catch (error) {
      console.error("Error al guardar la comisión:", error.response.data);
    }
  };

  // Función para agregar un nuevo rango
  const handleAddRange = () => {
    const nextRange =
      items.length > 0 ? Math.max(...items.map((item) => item.range)) + 1 : 1;
    setItems([
      ...items,
      {
        id: null,
        min_amount: "",
        max_amount: "",
        commission_percentage: "",
        reverse_commission: "",
        range: nextRange,
        range_id: null,
      },
    ]);
  };

  return (
    <div className="container">
      <div>
        <h3>Comisiones</h3>
      </div>
      {items
        .sort((a, b) => a.range - b.range)
        .map((item, index) => (
          <div
            className="row mt-3 d-flex justify-content-center align-items-center"
            key={item.id || `range-${item.range}-${index}`}
          >
            <div className="col-md-2">
              <input
                type="text"
                className="form-control"
                value={item.min_amount}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // Remover todo excepto dígitos
                  handleInputChange(item.id, "min_amount", value);
                }}
                placeholder="Min Amount"
                inputMode="numeric"
                pattern="[0-9]*"
              />
            </div>

            <div className="col-md-2">
              <input
                type="text"
                className="form-control"
                value={item.max_amount}
                onChange={(e) =>
                  handleInputChange(item.id, "max_amount", e.target.value)
                }
                placeholder="Max Amount"
                inputMode="numeric"
                pattern="[0-9]*"
              />
            </div>

            <div className="col-md-2">
              <input
                type="text"
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
                inputMode="decimal"
                pattern="[0-9]*[.]?[0-9]*"
              />
            </div>

            <div className="col-md-2">
              <input
                type="text"
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
                inputMode="decimal"
                pattern="[0-9]*[.]?[0-9]*"
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
