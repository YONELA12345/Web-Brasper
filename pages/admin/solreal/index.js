// SolReal.js
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../layout";
import CommissionList from "./CommissionList"; // Ajusta la ruta según tu estructura de archivos

const API_URL = "http://localhost:8000/api/v1/coin/commissions/";

// Establecemos los IDs de las monedas por defecto
const baseCurrencyId = 1; // ID para Sol (PEN)
const targetCurrencyId = 2; // ID para Real (BRL)

const SolReal = () => {
  const [commissions, setCommissions] = useState([]);

  useEffect(() => {
    const fetchCommissions = async () => {
      console.log("Obteniendo datos de comisiones");
      try {
        const response = await axios.get(API_URL);
        const commissionsData = response.data;

        // Filtrar las comisiones para base_currency: 1 y target_currency: 2 (Soles a Reales)
        const penToBrlCommissions = commissionsData.filter(
          (commission) =>
            commission.base_currency === baseCurrencyId &&
            commission.target_currency === targetCurrencyId
        );

        // Crear los items combinados con el campo 'range' separado
        setCommissions(
          penToBrlCommissions.map((item) => ({
            id: item.id,
            range: item.range,
            commission_percentage: item.commission_percentage.toFixed(2),
            reverse_commission: item.reverse_commission.toFixed(4),
          }))
        );
      } catch (error) {
        console.error("Error al obtener las comisiones:", error);
      }
    };

    fetchCommissions();
  }, []);

  return (
    <Layout>
      <div className="container my-5">
        <div className="text-center mb-6">
          <h1>Sol a Real</h1>
        </div>

        <CommissionList
          items={commissions}
          setItems={setCommissions}
          apiUrl={API_URL}
          baseCurrencyId={baseCurrencyId}
          targetCurrencyId={targetCurrencyId}
        />
      </div>
    </Layout>
  );
};

export default SolReal;
