import React, { useState, useEffect } from "react";
import Select from 'react-select';

const exchangeRates = {
  "PEN-BRL": 1.45,
  "BRL-PEN": 0.674,
  "USD-BRL": 5.416,
  "BRL-USD": 0.182,
};

const Calculator = () => {
  const [amountSend, setAmountSend] = useState('');
  const [amountReceive, setAmountReceive] = useState('');
  const [fromCurrency, setFromCurrency] = useState("PEN");
  const [toCurrency, setToCurrency] = useState("BRL");
  const [commission, setCommission] = useState(0);
  const [commissionRateDisplay, setCommissionRateDisplay] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalToSend, setTotalToSend] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [editingReceiveAmount, setEditingReceiveAmount] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const currencies = [
    {
      code: "PEN",
      name: "Soles Peruanos",
      flag: "🇵🇪",
      image: "/assets/images/flags/pe.png",
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

  const commissionRates = {
    "PEN-BRL": [
      { min: 100, max: 199, rate: 0.045 },
      { min: 200, max: 299, rate: 0.04 },
      { min: 300, max: 499, rate: 0.035 },
      { min: 500, max: 999, rate: 0.03 },
      { min: 1000, max: 4999, rate: 0.03 },
      { min: 5000, max: 100000, rate: 0.03 },
    ],
    "USD-BRL": [
      { min: 100, max: 199, rate: 0.05 },
      { min: 200, max: 299, rate: 0.045 },
      { min: 300, max: 499, rate: 0.04 },
      { min: 500, max: 999, rate: 0.035 },
      { min: 1000, max: 4999, rate: 0.03 },
      { min: 5000, max: 100000, rate: 0.025 },
    ],
    "BRL-PEN": [
      { min: 100, max: 199, rate: 0.045 },
      { min: 200, max: 299, rate: 0.04 },
      { min: 300, max: 499, rate: 0.035 },
      { min: 500, max: 999, rate: 0.03 },
      { min: 1000, max: 4999, rate: 0.03 },
      { min: 5000, max: 100000, rate: 0.03 },
    ],
    "BRL-USD": [
      { min: 100, max: 299, rate: 0.035 },
      { min: 300, max: 499, rate: 0.035 },
      { min: 500, max: 999, rate: 0.035 },
      { min: 1000, max: 4999, rate: 0.035 },
      { min: 5000, max: 100000, rate: 0.03 },
    ],
  };

  const currencyOptions = {
    PEN: ["BRL"],
    USD: ["BRL"],
    BRL: ["PEN", "USD"],
  };

  const calculateCommissionRate = (amount, currencyPair) => {
    const rates = commissionRates[currencyPair];
    if (!rates) {
      return 0.03; // Tasa de comisión predeterminada
    }
    for (let i = 0; i < rates.length; i++) {
      const { min, max, rate } = rates[i];
      if (amount >= min && amount <= max) {
        return rate;
      }
    }
    return rates[rates.length - 1].rate;
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
      setErrorMessage("Tipo de cambio no disponible");
      return;
    }

    if (amount < 100) {
      setCommission(0);
      setCommissionRateDisplay(0);
      setTax(0);
      setTotalToSend(0);
      setExchangeRate(rate.toFixed(2));
      setAmountReceive(0);
      setErrorMessage("El monto mínimo es 100");
      return;
    } else {
      setErrorMessage("");
    }

    const commissionRate = calculateCommissionRate(amount, key);
    const taxRate = 0.18; // 18% de impuesto sobre la comisión

    setCommissionRateDisplay((commissionRate * 100).toFixed(2) + "%");

    if (isReceiveAmount) {
      // Cálculo inverso
      const totalAfterFees = amount / rate;
      const commissionAndTaxRate = commissionRate * (1 + taxRate);
      const amountSendCalc = totalAfterFees / (1 - commissionAndTaxRate);
      const commissionAmount = amountSendCalc * commissionRate;
      const taxAmount = commissionAmount * taxRate;
      const totalToSendCalc = amountSendCalc - commissionAmount - taxAmount;

      setCommission(commissionAmount.toFixed(2));
      setTax(taxAmount.toFixed(2));
      setTotalToSend(totalToSendCalc.toFixed(2));
      setExchangeRate(rate.toFixed(2));
      setAmountSend(amountSendCalc.toFixed(2));
    } else {
      // Cálculo directo
      const commissionAmount = amount * commissionRate;
      const taxAmount = commissionAmount * taxRate;
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
    const amount = parseFloat(e.target.value) || '';
    setAmountSend(amount);
    setEditingReceiveAmount(false);
  };

  const handleAmountReceiveChange = (e) => {
    const amount = parseFloat(e.target.value) || '';
    setAmountReceive(amount);
    setEditingReceiveAmount(true);
  };

  // Prepare options with images for react-select
  const currencyOptionsSelect = currencies.map((currency) => ({
    value: currency.code,
    label: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={currency.image}
          alt={currency.code}
          style={{ width: '20px', marginRight: '8px' }}
        />
        {currency.code}
      </div>
    ),
  }));

  const CustomOption = (props) => {
    const { innerProps, innerRef, data } = props;
    return (
      <div ref={innerRef} {...innerProps}>
        {data.label}
      </div>
    );
  };

  const CustomSingleValue = (props) => {
    const { data } = props;
    return data.label;
  };

  const handleFromCurrencyChange = (selectedOption) => {
    const newFromCurrency = selectedOption.value;
    setFromCurrency(newFromCurrency);
    const newToCurrencies = currencyOptions[newFromCurrency];
    if (!newToCurrencies.includes(toCurrency)) {
      setToCurrency(newToCurrencies[0]);
    }
  };

  const handleToCurrencyChange = (selectedOption) => {
    setToCurrency(selectedOption.value);
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

    const message = `*Cotización de Cambio de Moneda*\n\n*Envías:* ${amountSend} ${fromCurrency} (${fromCurrencyName})\n*Comisión (${commissionRateDisplay}):* ${commission} ${fromCurrency}\n*Impuestos (18% de la comisión):* ${tax} ${fromCurrency}\n*Total a Enviar:* ${totalToSend} ${fromCurrency}\n\n*Tipo de Cambio:* 1 ${fromCurrency} = ${exchangeRate} ${toCurrency}\n\n*Recibes:* ${amountReceive} ${toCurrency} (${toCurrencyName})`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="calculator-container m-1 text-center">
      <h5>Ingrese el Monto a Enviar o Recibir</h5>

      <div className="currency-inputs">
        <div className="currency-row ">
          <Select
            value={currencyOptionsSelect.find(
              (option) => option.value === fromCurrency
            )}
            onChange={handleFromCurrencyChange}
            options={currencyOptionsSelect.filter((option) =>
              Object.keys(currencyOptions).includes(option.value)
            )}
            components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
            isSearchable={false}
            styles={{ container: (base) => ({ ...base, width: '50%' }) }}
          />
          <input
            type="number"
            className="currency-input"
            placeholder="Envías"
            value={amountSend}
            onChange={handleAmountChange}
            min="100"
          />
        </div>

        {errorMessage && (
          <div className="error-message text-danger">{errorMessage}</div>
        )}

        <div className="row gy-4 mb-3 text-dark">
          <div className="col-6">
            <div>Comisión ({commissionRateDisplay}):</div>
          </div>
          <div className="col-6">
            <div>{commission}</div>
          </div>
          <div className="col-6">
            <div>Impuestos:</div>
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
          <Select
            value={currencyOptionsSelect.find(
              (option) => option.value === toCurrency
            )}
            onChange={handleToCurrencyChange}
            options={currencyOptionsSelect.filter((option) =>
              getAvailableToCurrencies().includes(option.value)
            )}
            components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
            isSearchable={false}
            styles={{ container: (base) => ({ ...base, width: '50%' }) }}
          />
          <input
            type="number"
            className="currency-input"
            placeholder="Recibes"
            value={amountReceive}
            onChange={handleAmountReceiveChange}
            min="100"
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
