"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../layout";
import CommissionList from "../CommissionList"; // Ajusta la ruta según tu estructura de archivos

// Utiliza la variable de entorno para las URLs de la API
const COMMISSIONS_API_URL = `${process.env.NEXT_PUBLIC_API_URL}api/v1/coin/commissions/`;

// Establecemos los IDs de las monedas por defecto
const baseCurrencyId = 1; // ID para Sol (PEN)
const targetCurrencyId = 2; // ID para Real (BRL)

const SolReal = () => {
  const [commissions, setCommissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener las comisiones existentes
        const commissionsResponse = await axios.get(COMMISSIONS_API_URL);
        const commissionsData = commissionsResponse.data;

        // Filtrar las comisiones para base_currency: 1 y target_currency: 2 (Soles a Reales)
        const penToBrlCommissions = commissionsData.filter(
          (commission) =>
            commission.base_currency === baseCurrencyId &&
            commission.target_currency === targetCurrencyId
        );

        // Mapear las comisiones para obtener los datos necesarios
        const combinedData = penToBrlCommissions.map((commissionItem) => ({
          id: commissionItem.id,
          min_amount: commissionItem.range_details.min_amount.replace(/,/g, ''),
          max_amount: commissionItem.range_details.max_amount.replace(/,/g, ''),
          commission_percentage: commissionItem.commission_percentage.toFixed(2),
          reverse_commission: commissionItem.reverse_commission.toFixed(4),
          range: commissionItem.range, // Usamos el campo 'range' del commissionItem
          range_id: commissionItem.range_details.id, // ID del rango
        }));

        setCommissions(combinedData);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
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
          apiUrl={COMMISSIONS_API_URL}
          baseCurrencyId={baseCurrencyId}
          targetCurrencyId={targetCurrencyId}
        />
      </div>
    </Layout>
  );
};

export default SolReal;
