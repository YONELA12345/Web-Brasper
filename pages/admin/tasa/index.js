'use client';
import Layout from "../layout";
import exchangeRates from "@/src/data/exchangeRates";

const Tasa = () => {
  return (
    <Layout>
      <div className="d-flex justify-content-center align-items-center vh-90">
        <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '450px' }}>
          <h2 className="text-center mb-4">Tasas de Cambio</h2>
          <form>
            {/* Sol a Dólar */}
            <div className="row mb-3 align-items-center">
              <label htmlFor="solDolar" className="col-sm-6 col-form-label">Sol a Dólar (USD)</label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  value={exchangeRates["PEN-USD"] || "N/A"}
                  disabled
                />
              </div>
            </div>

            {/* Sol a Real */}
            <div className="row mb-3 align-items-center">
              <label htmlFor="solReal" className="col-sm-6 col-form-label">Sol a Real (BRL)</label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  value={exchangeRates["PEN-BRL"] || "N/A"}
                  disabled
                />
              </div>
            </div>

            {/* Dólar a Real */}
            <div className="row mb-3 align-items-center">
              <label htmlFor="dolarReal" className="col-sm-6 col-form-label">Dólar a Real (BRL)</label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  value={exchangeRates["USD-BRL"] || "N/A"}
                  disabled
                />
              </div>
            </div>

            {/* Real a Dólar */}
            <div className="row mb-3 align-items-center">
              <label htmlFor="realDolar" className="col-sm-6 col-form-label">Real a Dólar (USD)</label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  value={exchangeRates["BRL-USD"] || "N/A"}
                  disabled
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Tasa;
