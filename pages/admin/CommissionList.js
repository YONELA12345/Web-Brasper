// CommissionList.js
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

const CommissionList = ({
  items = [],
  setItems,
  apiUrl,
  baseCurrencyId,
  targetCurrencyId,
}) => {
  // Manejar cambios en los inputs
  const handleInputChange = (id, field, newValue) => {
    const sanitizedValue = newValue.replace(/,/g, "");
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: sanitizedValue } : item
      )
    );
  };

  // Guardar comisión y recargar datos
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
        // Actualizar el item con el nuevo ID asignado por el servidor
        const newId = response.data.id;
        setItems((prevItems) =>
          prevItems.map((commission) =>
            commission.range === item.range
              ? { ...commission, id: newId }
              : commission
          )
        );
      }

      console.log("Comisión guardada correctamente.");
      // Recargar datos después de guardar
      reloadData();
    } catch (error) {
      console.error(
        "Error al guardar la comisión:",
        error.response?.data || error.message
      );
    }
  };

  // Función para recargar los datos
  const reloadData = async () => {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          base_currency: baseCurrencyId,
          target_currency: targetCurrencyId,
        },
      });
      const data = response.data;

      // Mapear los datos según sea necesario
      const updatedItems = data.map((commissionItem) => ({
        id: commissionItem.id,
        min_amount: commissionItem.range_details.min_amount,
        max_amount: commissionItem.range_details.max_amount,
        commission_percentage: commissionItem.commission_percentage.toString(),
        reverse_commission: commissionItem.reverse_commission.toString(),
        range: commissionItem.range,
        range_id: commissionItem.range_details.id,
      }));

      setItems(updatedItems);
    } catch (error) {
      console.error(
        "Error al recargar los datos:",
        error.response?.data || error.message
      );
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
                type="number"
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
                type="number"
                className="form-control"
                value={item.max_amount}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  handleInputChange(item.id, "max_amount", value);
                }}
                placeholder="Max Amount"
                inputMode="numeric"
                pattern="[0-9]*"
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
                inputMode="decimal"
                pattern="[0-9]*[.]?[0-9]*"
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
                inputMode="decimal"
                pattern="[0-9]*[.]?[0-9]*"
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
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  setItems: PropTypes.func.isRequired,
  apiUrl: PropTypes.string.isRequired,
  baseCurrencyId: PropTypes.number.isRequired,
  targetCurrencyId: PropTypes.number.isRequired,
};

export default CommissionList;
