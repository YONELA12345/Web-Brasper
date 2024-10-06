const factors = {
  "PEN-BRL": [
    { min: 100, max: 199, rate: 0.9469 },
    { min: 200, max: 299, rate: 0.9528 },
    { min: 300, max: 499, rate: 0.9587 },
    { min: 500, max: 999, rate: 0.9646 },
    { min: 1000, max: 4999, rate: 0.9646 },
    { min: 5000, max: 100000, rate: 0.9646 }
  ],
  "USD-BRL": [
    { min: 100, max: 199, rate: 0.9587},
    { min: 200, max: 299, rate: 0.9587 },
    { min: 300, max: 499, rate: 0.9587 },
    { min: 500, max: 999, rate: 0.9587 },
    { min: 1000, max: 4999, rate: 0.9587 },
    { min: 5000, max: 100000, rate: 0.9646 }
  ],
  "BRL-PEN": [
    { min: 100, max: 199, rate: 0.9469 },
    { min: 200, max: 299, rate: 0.9528 },
    { min: 300, max: 499, rate: 0.9587 },
    { min: 500, max: 999, rate: 0.9646 },
    { min: 1000, max: 4999, rate: 0.9646 },
    { min: 5000, max: 100000, rate: 0.9646 }
  ],
  "BRL-USD": [
    { min: 100, max: 299, rate: 0.9587 },
    { min: 200, max: 299, rate: 0.9587},
    { min: 300, max: 499, rate: 0.9587 },
    { min: 500, max: 999, rate: 0.9587 },
    { min: 1000, max: 4999, rate: 0.9587 },
    { min: 5000, max: 100000, rate: 0.9646 }
  ]
};

export default factors;
