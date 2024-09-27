// src/components/Calculator.js

import React, { useState, useEffect } from "react";

//soles a reales , reales a soles , dolares a reales , reales a dolares ,sol a doladres y de dolares a soles 
const exchangeRates = {
  "PEN-USD": 0.27,
  "USD-PEN": 3.7,
  "PEN-BRL": 1.3,
  "BRL-PEN": 0.77,
  "USD-BRL": 4.7,
  "BRL-USD": 0.21,
};

const commissions = {
  "PEN-USD": 0.035,
  "USD-PEN": 0.04,
  "PEN-BRL": 0.035,
  "BRL-PEN": 0.04,
  "USD-BRL": 0.035,
  "BRL-USD": 0.04,
};

const Calculator = () => {
  const [amountSend, setAmountSend] = useState(0);
  const [amountReceive, setAmountReceive] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("PEN");
  const [toCurrency, setToCurrency] = useState("USD");
  const [commission, setCommission] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalToSend, setTotalToSend] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0);

  const currencies = [
    { code: "PEN", name: "Soles Peruanos", flag: "🇵🇪" },
    { code: "USD", name: "Dólares Estadounidenses", flag: "🇺🇸" },
    { code: "BRL", name: "Reales Brasileños", flag: "🇧🇷" },
  ];

  const calculate = (amount) => {
    const key = `${fromCurrency}-${toCurrency}`;
    const rate = exchangeRates[key];

    if (!rate) {
      setCommission(0);
      setTax(0);
      setTotalToSend(0);
      setExchangeRate(0);
      setAmountReceive(0);
      return;
    }

    const commissionRate = commissions[key] || 0;

    const commissionAmount = amount * commissionRate;
    const taxAmount = amount * 0.0018;

    const total = amount - commissionAmount - taxAmount;
    const received = total * rate;

    setCommission(commissionAmount.toFixed(2));
    setTax(taxAmount.toFixed(2));
    setTotalToSend(total.toFixed(2));
    setExchangeRate(rate.toFixed(2));
    setAmountReceive(received.toFixed(2));
  };

  useEffect(() => {
    calculate(amountSend);
  }, [amountSend, fromCurrency, toCurrency]);

  const handleAmountChange = (e) => {
    const amount = parseFloat(e.target.value) || 0;
    setAmountSend(amount);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleSendWhatsAppMessage = () => {
    // Número de teléfono al que se enviará el mensaje (formato internacional sin '+')
    const phoneNumber = "51966991933"; // +51 966991933

    // Crear el mensaje con los datos de la cotización
    const fromCurrencyName = currencies.find(
      (currency) => currency.code === fromCurrency
    ).name;
    const toCurrencyName = currencies.find(
      (currency) => currency.code === toCurrency
    ).name;

    const message = `*Cotización de Cambio de Moneda*\n\n*Envías:* ${amountSend} ${fromCurrency} (${fromCurrencyName})\n*Comisión:* ${commission} ${fromCurrency}\n*Impuestos:* ${tax} ${fromCurrency}\n*Total a Enviar:* ${totalToSend} ${fromCurrency}\n\n*Tipo de Cambio:* 1 ${fromCurrency} = ${exchangeRate} ${toCurrency}\n\n*Recibes:* ${amountReceive} ${toCurrency} (${toCurrencyName})`;

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);

    // Crear el enlace de WhatsApp con el número específico
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="calculator-container m-1 text-center">
      <h5>Ingrese el Monto a Enviar</h5>
      <p>Envías</p>
      <div className="currency-inputs">
        <div className="currency-row ">
          <select
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
            className="w-50"
          >
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.flag} {currency.code}
              </option>
            ))}
          </select>
          <input
            type="number"
            className="currency-input"
            placeholder="Envia"
            value={amountSend}
            onChange={handleAmountChange}
          />
        </div>
        <div className="row gy-5">
          <div className="col-6">
            <div>Comisión:</div>
          </div>
          <div className="col-6">
            <div className="border bg-light">{commission}</div>
          </div>
          <div className="col-6">
            <div>Impuestos:</div>
          </div>
          <div className="col-6">
            <div className="border bg-light">{tax}</div>
          </div>
          <div className="col-6">
            <div>Total a Enviar:</div>
          </div>
          <div className="col-6">
            <div className="border bg-light">{totalToSend}</div>
          </div>
          <div className="col-6">
            <div>Tipo de Cambio:</div>
          </div>
          <div className="col-6">
            <div className="border bg-light">{exchangeRate}</div>
          </div>
        </div>
        <div className="currency-row">
          <select
            value={toCurrency}
            onChange={handleToCurrencyChange}
            className="w-50"
          >
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.flag} {currency.code}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="currency-input"
            placeholder="Recibes"
            value={amountReceive}
            disabled
          />
        </div>
      </div>

      <button className="theme-btn" onClick={handleSendWhatsAppMessage}>
        Enviar Cotización por WhatsApp
      </button>
    </div>
  );
};

export default Calculator;
