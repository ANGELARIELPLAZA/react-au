import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { Global } from "../../../helpers/Global";

export const GraphicVentaSeries = () => {
  const chartRef = useRef();
  const chartInstanceRef = useRef(null);
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Global.url + "ventas/list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstanceRef.current !== null) {
      chartInstanceRef.current.destroy();
    }

    if (data.length === 0) {
      return;
    }

    const labels = data.map((d) => new Date(d.created_at).toLocaleDateString());
    const datasets = [];

    // Cada dataset corresponde a una ruta diferente
    const rutas = new Set(data.map((d) => d.nombre_ruta));
    for (const ruta of rutas) {
      const datos = data.filter((d) => d.nombre_ruta === ruta);
      const valores = datos.map((d) => d.totalventa);
      datasets.push({
        data: valores,
        label: ruta,
        borderColor: getRandomColor(),
        backgroundColor: getRandomColor(),
        fill: false,
      });
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: datasets,
      },
    });
  }, [data]);

  // Función auxiliar para obtener un color aleatorio
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};