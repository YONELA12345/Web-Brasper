// src/components/Calculator.js

import React, { useState } from "react";

const exchangeRates = {
  "PEN-USD": 0.27, // Tipo de cambio de Soles a Dólares
  "USD-PEN": 3.7,  // Tipo de cambio de Dólares a Soles
  "PEN-BRL": 1.3,  // Tipo de cambio de Soles a Reales
  "BRL-PEN": 0.77, // Tipo de cambio de Reales a Soles
  "USD-BRL": 4.7,  // Tipo de cambio de Dólares a Reales
  "BRL-USD": 0.21, // Tipo de cambio de Reales a Dólares
};

const Calculator = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("PEN");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState(null);
  const [coupon, setCoupon] = useState("");

  const handleConversion = () => {
    const conversionKey = `${fromCurrency}-${toCurrency}`;
    const rate = exchangeRates[conversionKey];
    if (rate) {
      setResult(amount * rate);
    } else {
      setResult(null); // Si no hay tasa de conversión, se muestra null
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator-header">
        <button className="calculator-btn">Calculadora</button>
        <button className="calculator-btn">TKOFERTAS</button>
      </div>

      <h5>Tipo de cambio hoy en Perú:</h5>
      <div className="currency-switch">
        <button className="currency-option">Compra</button>
        <button className="currency-option active">Venta</button>
      </div>

      <div className="currency-inputs">
        <div className="currency-row">
          <span className="currency-flag">🇵🇪</span>
          <input
            type="number"
            className="currency-input"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            placeholder="S/ Envia"
          />
        </div>
        <div className="currency-row">
          <span className="currency-flag">🇺🇸</span>
          <input
            type="text"
            className="currency-input"
            value={result !== null ? result.toFixed(2) : ''}
            placeholder="$ Recibes"
            disabled
          />
        </div>
      </div>

      <div className="coupon-section">
        <input
          type="text"
          className="coupon-input"
          placeholder="Ingresa aquí tu cupón"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <button className="apply-btn">Aplicar</button>
      </div>

      <div className="savings-info">
        Estás ahorrando aprox. S/ {result !== null ? (result * 0.05).toFixed(2) : '0.00'}
      </div>

      <button className="start-operation-btn" onClick={handleConversion}>
        Iniciar operación
      </button>
    </div>
  );
};

export default Calculator;
