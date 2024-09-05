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
    <div className="calculator">
      <h2>Ingrese monto a enviar</h2>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          placeholder="Cantidad"
        />
      </div>
      <div>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          <option value="PEN">Soles (PEN)</option>
          <option value="USD">Dólares (USD)</option>
          <option value="BRL">Reales (BRL)</option>
        </select>
        <span> a </span>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          <option value="USD">Dólares (USD)</option>
          <option value="PEN">Soles (PEN)</option>
          <option value="BRL">Reales (BRL)</option>
        </select>
      </div>
      <button onClick={handleConversion}>Convertir</button>
      {result !== null && (
        <div>
          <h4>Resultado: {result.toFixed(2)} {toCurrency}</h4>
        </div>
      )}
    </div>
  );
};

export default Calculator;
