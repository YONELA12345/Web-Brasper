import React, { useState, useEffect } from "react";

const exchangeRates = {
  "PEN-BRL": 1.3,
  "BRL-PEN": 0.77,
  "USD-BRL": 4.7,
  "BRL-USD": 0.21,
};

const Calculator = () => {
  const [amountSend, setAmountSend] = useState(0);
  const [amountReceive, setAmountReceive] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("PEN");
  const [toCurrency, setToCurrency] = useState("BRL");
  const [commission, setCommission] = useState(0);
  const [commissionRateDisplay, setCommissionRateDisplay] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalToSend, setTotalToSend] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [editingReceiveAmount, setEditingReceiveAmount] = useState(false);

  const currencies = [
    {
      code: "PEN",
      name: "Soles Peruanos",
      flag: "🇵🇪",
      image: "/assets/images/flags/peru.png",
    },
    {
      code: "USD",
      name: "Dólares Estadounidenses",
      flag: "🇺🇸",
      image: "/assets/images/flags/usa.png",
    },
    {
      code: "BRL",
      name: "Reales Brasileños",
      flag: "🇧🇷",
      image: "/assets/images/flags/bra.png",
    },
  ];

  const commissionRates = [
    { min: 100, max: 199, rate: 0.045 },
    { min: 200, max: 299, rate: 0.04 },
    { min: 300, max: 499, rate: 0.035 },
    { min: 500, max: 999, rate: 0.03 },
    { min: 1000, max: 4999, rate: 0.03 },
    { min: 5000, max: 100000, rate: 0.03 },
  ];

  const currencyOptions = {
    PEN: ["BRL"],
    USD: ["BRL"],
    BRL: ["PEN", "USD"],
  };

  const calculateCommissionRate = (amount) => {
    for (let i = 0; i < commissionRates.length; i++) {
      const { min, max, rate } = commissionRates[i];
      if (amount >= min && amount <= max) {
        return rate;
      }
    }
    return 0;
  };

  const calculate = (amount, isReceiveAmount = false) => {
    const key = `${fromCurrency}-${toCurrency}`;
    const rate = exchangeRates[key];

    if (!rate) {
      setCommission(0);
      setCommissionRateDisplay(0);
      setTax(0);
      setTotalToSend(0);
      setExchangeRate("N/A");
      setAmountReceive(0);
      return;
    }

    let commissionRate = calculateCommissionRate(amount);
    let taxRate = 0.0018;

    setCommissionRateDisplay((commissionRate * 100).toFixed(2) + "%");

    if (isReceiveAmount) {
      // Reverse calculation
      const netAmount = amount / rate;
      const amountBeforeFees = netAmount / (1 - commissionRate - taxRate);
      const commissionAmount = amountBeforeFees * commissionRate;
      const taxAmount = amountBeforeFees * taxRate;
      const amountSendCalc = amountBeforeFees;

      setCommission(commissionAmount.toFixed(2));
      setTax(taxAmount.toFixed(2));
      setTotalToSend(
        (amountSendCalc - commissionAmount - taxAmount).toFixed(2)
      );
      setExchangeRate(rate.toFixed(2));
      setAmountSend(amountSendCalc.toFixed(2));
    } else {
      // Forward calculation
      const commissionAmount = amount * commissionRate;
      const taxAmount = amount * taxRate;
      const total = amount - commissionAmount - taxAmount;
      const received = total * rate;

      setCommission(commissionAmount.toFixed(2));
      setTax(taxAmount.toFixed(2));
      setTotalToSend(total.toFixed(2));
      setExchangeRate(rate.toFixed(2));
      setAmountReceive(received.toFixed(2));
    }
  };

  useEffect(() => {
    if (editingReceiveAmount) {
      calculate(amountReceive, true);
    } else {
      calculate(amountSend);
    }
  }, [
    amountSend,
    amountReceive,
    fromCurrency,
    toCurrency,
    editingReceiveAmount,
  ]);

  const handleAmountChange = (e) => {
    const amount = parseFloat(e.target.value) || 0;
    setAmountSend(amount);
  };

  const handleAmountReceiveChange = (e) => {
    const amount = parseFloat(e.target.value) || 0;
    setAmountReceive(amount);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
    // Reset toCurrency if it's not in the new options
    const newToCurrencies = currencyOptions[e.target.value];
    if (!newToCurrencies.includes(toCurrency)) {
      setToCurrency(newToCurrencies[0]);
    }
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const getAvailableToCurrencies = () => {
    return currencyOptions[fromCurrency] || [];
  };

  const handleSendWhatsAppMessage = () => {
    const phoneNumber = "51966991933";

    const fromCurrencyName = currencies.find(
      (currency) => currency.code === fromCurrency
    ).name;
    const toCurrencyName = currencies.find(
      (currency) => currency.code === toCurrency
    ).name;

    const message = `*Cotización de Cambio de Moneda*\n\n*Envías:* ${amountSend} ${fromCurrency} (${fromCurrencyName})\n*Comisión (${commissionRateDisplay}):* ${commission} ${fromCurrency}\n*Impuestos (0.18%):* ${tax} ${fromCurrency}\n*Total a Enviar:* ${totalToSend} ${fromCurrency}\n\n*Tipo de Cambio:* 1 ${fromCurrency} = ${exchangeRate} ${toCurrency}\n\n*Recibes:* ${amountReceive} ${toCurrency} (${toCurrencyName})`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="calculator-container m-1 text-center">
      <h5>Ingrese el Monto a Enviar o Recibir</h5>

      <div className="currency-inputs">
        <div className="currency-row ">
          <select
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
            className="w-50"
          >
            {currencies.map((currency) => (
              <option
                key={currency.code}
                value={currency.code}
                data-image={currency.image}
              >
                {currency.flag} {currency.code}
              </option>
            ))}
          </select>
          <input
            type="number"
            className="currency-input"
            placeholder="Envías"
            value={amountSend}
            onChange={handleAmountChange}
            onFocus={() => setEditingReceiveAmount(false)}
          />
        </div>

        <div className="row gy-4 mb-3 text-dark">
          <div className="col-6">
            <div>Comisión ({commissionRateDisplay}):</div>
          </div>
          <div className="col-6">
            <div>{commission}</div>
          </div>
          <div className="col-6">
            <div>Impuestos (0.18%):</div>
          </div>
          <div className="col-6">
            <div>{tax}</div>
          </div>
          <div className="col-6">
            <div>Total a Enviar:</div>
          </div>
          <div className="col-6">
            <div>{totalToSend}</div>
          </div>
          <div className="col-6">
            <div>Tipo de Cambio:</div>
          </div>
          <div className="col-6">
            <div>{exchangeRate}</div>
          </div>
        </div>

        <div className="currency-row">
          <select
            value={toCurrency}
            onChange={handleToCurrencyChange}
            className="w-50"
          >
            {getAvailableToCurrencies().map((code) => {
              const currency = currencies.find((cur) => cur.code === code);
              return (
                <option key={currency.code} value={currency.code}>
                  {currency.flag} {currency.code}
                </option>
              );
            })}
          </select>
          <input
            type="number"
            className="currency-input"
            placeholder="Recibes"
            value={amountReceive}
            onChange={handleAmountReceiveChange}
            onFocus={() => setEditingReceiveAmount(true)}
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
