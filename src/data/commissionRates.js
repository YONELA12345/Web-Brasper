const commissionRates = {
  "PEN-BRL": [
    { min: 100, max: 199, rate: 0.045 },
    { min: 200, max: 299, rate: 0.04 },
    { min: 300, max: 499, rate: 0.035 },
    { min: 500, max: 999, rate: 0.03 },
    { min: 1000, max: 4999, rate: 0.03 },
    { min: 5000, max: 100000, rate: 0.03 }
  ],
  "USD-BRL": [
    { min: 100, max: 199, rate: 0.035 },
    { min: 200, max: 299, rate: 0.035 },
    { min: 300, max: 499, rate: 0.035 },
    { min: 500, max: 999, rate: 0.035 },
    { min: 1000, max: 4999, rate: 0.035 },
    { min: 5000, max: 100000, rate: 0.035 }
  ],
  "BRL-PEN": [
    { min: 100, max: 199, rate: 0.045 },
    { min: 200, max: 299, rate: 0.04 },
    { min: 300, max: 499, rate: 0.035 },
    { min: 500, max: 999, rate: 0.03 },
    { min: 1000, max: 4999, rate: 0.03 },
    { min: 5000, max: 100000, rate: 0.03 }
  ],
  "BRL-USD": [
    { min: 100, max: 299, rate: 0.035 },
    { min: 300, max: 499, rate: 0.035 },
    { min: 500, max: 999, rate: 0.035 },
    { min: 1000, max: 4999, rate: 0.035 },
    { min: 5000, max: 100000, rate: 0.035 }
  ]
};
export default commissionRates;
