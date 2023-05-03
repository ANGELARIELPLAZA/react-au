import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import { Global } from "../../../helpers/Global";

export const GraphicVenta = () => {
  const chartRef = useRef();
  const chartInstanceRef = useRef(null);
  const token = localStorage.getItem("token");
  const [ventas, setVentas] = useState([]);
  const colors = ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'];

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    if (chartInstanceRef.current !== null) {
      chartInstanceRef.current.destroy();
    }
    const fetchData = async () => {
      try {
        const response = await fetch(Global.url + "ventas/list", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        const data = await response.json();

        // Crear objeto para agrupar las rutas
        const ventasAgrupadas = data.reduce((obj, venta) => {
          const codigo = venta.nombre_ruta;
          if (!obj[codigo]) {
            obj[codigo] = 0;
          }
          obj[codigo] += Number(venta.totalventa);
          return obj;
        }, {});

        // Convertir objeto a array de objetos
        const ventasFinales = Object.keys(ventasAgrupadas).map((codigo) => ({
          nombre_ruta: codigo,
          totalventa: ventasAgrupadas[codigo],
        }));

        // Actualizar estado con datos agrupados
        setVentas(ventasFinales);
      } catch (error) {
        console.error(error);
      }
    };
    if (ventas.length > 0) {
      const ventasFinales = ventas.map((venta) => ({
        nombre_ruta: venta.nombre_ruta,
        totalventa: venta.totalventa,
      }));
      chartInstanceRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Ingresos por ruta"],
          datasets: ventasFinales.map((venta, index) => ({
            data: [venta.totalventa],
            label: venta.nombre_ruta,
            borderColor: colors[index % colors.length],
            backgroundColor: colors[index % colors.length],
            fill: false,
          })),
        },
      });
    } else {
      fetchData();
    }
  }, [ventas]);

  return (
    <div>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};
