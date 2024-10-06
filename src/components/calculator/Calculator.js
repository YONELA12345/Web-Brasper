import React, { useState, useEffect } from "react";
import Select from "react-select";
import exchangeRates from "@/src/data/exchangeRates"; // Importar las tasas de cambio
import commissionRates from "@/src/data/commissionRates"; // Importar las tasas de comisión

const Calculator = () => {
  // Estados existentes
  const [amountSend, setAmountSend] = useState("");
  const [amountReceive, setAmountReceive] = useState("");
  const [fromCurrency, setFromCurrency] = useState("PEN");
  const [toCurrency, setToCurrency] = useState("BRL");
  const [commission, setCommission] = useState(0);
  const [commissionRateDisplay, setCommissionRateDisplay] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalToSend, setTotalToSend] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [editingReceiveAmount, setEditingReceiveAmount] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

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
      image: "/assets/images/flags/pe.png",
    },
    {
      code: "BRL",
      name: "Reales Brasileños",
      flag: "🇧🇷",
      image: "/assets/images/flags/bra.png",
    },
  ];

  const currencyOptions = {
    PEN: ["BRL"],
    USD: ["BRL"],
    BRL: ["PEN", "USD"],
  };

  const calculateCommissionRate = (amount, currencyPair) => {
    const rates = commissionRates[currencyPair];
    if (!rates) {
      return 0.03;
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
      setErrorMessage("Tipo de cambio no disponible");
      return;
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) {
      return;
    }

    const taxRate = 0.18;
    let commissionRate;
    let amountSendCalc;

    if (isReceiveAmount) {
      amountSendCalc = parsedAmount / rate;
      commissionRate = calculateCommissionRate(amountSendCalc, key);
      const commissionAndTaxRate = commissionRate * (1 + taxRate);
      amountSendCalc = parsedAmount / (rate * (1 - commissionAndTaxRate));

      if (amountSendCalc < 100) {
        setCommission(0);
        setCommissionRateDisplay(0);
        setTax(0);
        setTotalToSend(0);
        setExchangeRate(rate.toFixed(2));
        setErrorMessage("El monto mínimo es 100");
        return;
      } else {
        setErrorMessage("");
      }

      commissionRate = calculateCommissionRate(amountSendCalc, key);
      setCommissionRateDisplay((commissionRate * 100).toFixed(2) + "%");

      const commissionAmount = amountSendCalc * commissionRate;
      const taxAmount = commissionAmount * taxRate;
      const totalToSendCalc = amountSendCalc - commissionAmount - taxAmount;

      setCommission(commissionAmount.toFixed(2));
      setTax(taxAmount.toFixed(2));
      setTotalToSend(totalToSendCalc.toFixed(2));
      setExchangeRate(rate.toFixed(2));
      setAmountSend(amountSendCalc.toFixed(2));
    } else {
      if (parsedAmount < 100) {
        setCommission(0);
        setCommissionRateDisplay(0);
        setTax(0);
        setTotalToSend(0);
        setExchangeRate(rate.toFixed(2));
        setErrorMessage("El monto mínimo es 100");
        return;
      } else {
        setErrorMessage("");
      }

      commissionRate = calculateCommissionRate(parsedAmount, key);
      setCommissionRateDisplay((commissionRate * 100).toFixed(2) + "%");

      const commissionAmount = parsedAmount * commissionRate;
      const taxAmount = commissionAmount * taxRate;
      const total = parsedAmount - commissionAmount - taxAmount;
      const received = total * rate;

      setCommission(commissionAmount.toFixed(2));
      setTax(taxAmount.toFixed(2));
      setTotalToSend(total.toFixed(2));
      setExchangeRate(rate.toFixed(2));
      setAmountReceive(received.toFixed(2));
    }
  };

  const resetCalculations = () => {
    setCommission(0);
    setCommissionRateDisplay(0);
    setTax(0);
    setTotalToSend(0);
    setExchangeRate(0);
    setErrorMessage("");
  };

  useEffect(() => {
    if (editingReceiveAmount) {
      if (amountReceive !== "" && !isNaN(parseFloat(amountReceive))) {
        calculate(amountReceive, true);
      } else {
        resetCalculations();
        setAmountSend("");
      }
    } else {
      if (amountSend !== "" && !isNaN(parseFloat(amountSend))) {
        calculate(amountSend);
      } else {
        resetCalculations();
        setAmountReceive("");
      }
    }
  }, [amountSend, amountReceive, fromCurrency, toCurrency, editingReceiveAmount]);

  const handleAmountChange = (e) => {
    const amount = e.target.value;
    setAmountSend(amount);
    setEditingReceiveAmount(false);
  };

  const handleAmountReceiveChange = (e) => {
    const amount = e.target.value;
    setAmountReceive(amount);
    setEditingReceiveAmount(true);
  };

  const currencyOptionsSelect = currencies.map((currency) => ({
    value: currency.code,
    label: currency.code,
    image: currency.image,
  }));

  const CustomOption = (props) => {
    const { innerProps, innerRef, data } = props;
    return (
      <div ref={innerRef} {...innerProps} style={{ display: "flex", alignItems: "center", padding: "8px 12px" }}>
        <img src={data.image} alt={data.label} style={{ width: "24px", height: "24px", marginRight: "8px", objectFit: "contain" }} />
        <span>{data.label}</span>
      </div>
    );
  };

  const CustomSingleValue = (props) => {
    const { innerProps, data } = props;
    return (
      <div style={{ display: "flex", alignItems: "center" }} {...innerProps}>
        <img src={data.image} alt={data.label} style={{ width: "24px", height: "24px", marginRight: "8px", objectFit: "contain" }} />
        <span>{data.label}</span>
      </div>
    );
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
    if (!acceptedTerms) {
      alert("Debe aceptar la Política de Privacidad y los Términos y Condiciones para continuar.");
      return;
    }

    if (amountSend === "" || amountReceive === "" || isNaN(parseFloat(amountSend)) || isNaN(parseFloat(amountReceive))) {
      alert("Por favor, ingrese los montos a enviar y recibir antes de continuar.");
      return;
    }

    if (errorMessage) {
      alert("Por favor, corrija los errores antes de continuar.");
      return;
    }

    const phoneNumber = "51966991933";

    const fromCurrencyName = currencies.find((currency) => currency.code === fromCurrency).name;
    const toCurrencyName = currencies.find((currency) => currency.code === toCurrency).name;

    const message = `*Cotización de Cambio de Moneda*\n\n*Envías:* ${amountSend} ${fromCurrency} (${fromCurrencyName})\n*Comisión (${commissionRateDisplay}):* ${commission} ${fromCurrency}\n*Impuestos (18% de la comisión):* ${tax} ${fromCurrency}\n*Total a Enviar:* ${totalToSend} ${fromCurrency}\n\n*Tipo de Cambio:* 1 ${fromCurrency} = ${exchangeRate} ${toCurrency}\n\n*Recibes:* ${amountReceive} ${toCurrency} (${toCurrencyName})`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="calculator-container m-3 text-center">
      <h5>Ingrese el Monto a Enviar o Recibir</h5>
      <div className="currency-inputs r pb-4 pt-2">
        <a style={{ color: "rgba(0, 0, 255, 1)", fontSize: "20px", paddingBottom: "50px" }}>Envías</a>
        <div className="currency-row pb-2">
          <Select
            value={currencyOptionsSelect.find((option) => option.value === fromCurrency)}
            onChange={handleFromCurrencyChange}
            options={currencyOptionsSelect.filter((option) => Object.keys(currencyOptions).includes(option.value))}
            components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
            isSearchable={false}
            styles={{
              container: (base) => ({ ...base, width: "50%", margin: "0 auto" }), control: (base) => ({ ...base, minHeight: "45px" }), valueContainer: (base) => ({
                ...base,
                display: "flex",
                alignItems: "center",
              }),
            }}
          />
          <input
            type="number"
            className="currency-input"
            placeholder="Envías"
            value={amountSend}
            onChange={handleAmountChange}
            min="100"
            style={{ backgroundColor: "transparent" }}
          />
        </div>
        {errorMessage && <div className="error-message text-danger">{errorMessage}</div>}
        <div className="row gy-4 mb-3 text-dark">
          <div className="col-6">
            <strong>Comisión {commissionRateDisplay}:</strong>
          </div>
          <div className="col-6" style={{ color: "#c91c10" }}>
            <strong>{commission}</strong>
          </div>
          <div className="col-6">
            <strong>Impuestos:</strong>
          </div>
          <div className="col-6" style={{ color: "#c91c10" }}>
            <strong>{tax}</strong>
          </div>
          <div className="col-6">
            <strong>Total a Enviar:</strong>
          </div>
          <div className="col-6" style={{ color: "#c91c10" }}>
            <strong>{totalToSend}</strong>
          </div>
          <div className="col-6">
            <strong>Tipo de Cambio:</strong>
          </div>
          <div className="col-6" style={{ color: "#c91c10" }}>
            <strong>{exchangeRate}</strong>
          </div>
        </div>
        <a style={{ color: "rgba(0, 0, 255, 1)", fontSize: "20px", paddingBottom: "50px" }}>Recibe</a>
        <div className="currency-row">
          <Select
            value={currencyOptionsSelect.find((option) => option.value === toCurrency)}
            onChange={handleToCurrencyChange}
            options={currencyOptionsSelect.filter((option) => getAvailableToCurrencies().includes(option.value))}
            components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
            isSearchable={false}
            styles={{
              container: (base) => ({ ...base, width: "50%", margin: "0 auto" }), control: (base) => ({ ...base, minHeight: "45px" }), valueContainer: (base) => ({
                ...base,
                display: "flex",
                alignItems: "center",
              }),
            }}
          />
          <input
            type="number"
            className="currency-input"
            placeholder="Recibes"
            value={amountReceive}
            onChange={handleAmountReceiveChange}
            min="100"
            style={{
              backgroundColor: "transparent",
              //border: 'none',
              //color: 'inherit', // Mantiene el color del texto heredado
            }}
          />
        </div>
      </div>
      <div className="terms-container" style={{ margin: "20px 0" }}>
        <input
          type="checkbox"
          id="acceptTerms"
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
          style={{ marginRight: "8px" }}
        />
        <label htmlFor="acceptTerms">
          Acepto{" "}
          <a href="/terminos-y-condiciones" target="_blank">
            Términos y Condiciones
          </a>
        </label>
      </div>
      <button className="theme-btn" onClick={handleSendWhatsAppMessage}>
        Enviar Dinero
      </button>
    </div>
  );
};

export default Calculator;
