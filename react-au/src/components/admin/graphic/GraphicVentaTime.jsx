import { FaMoneyBillAlt } from "react-icons/fa";
import { Global } from "../../../helpers/Global";
import React, { useState, useEffect } from "react";
import moment from "moment";
export const GraphicVentaTime = () => {
  const token = localStorage.getItem("token");
  const [ventas, setVentas] = useState([]);


  const ventaTotalMes = ventas.reduce((total, venta) => {
    const fechaVenta = moment(venta.created_at, "D/M/YYYY").format("YYYY-MM");
    const fechaActual = moment().format("YYYY-MM");
    
    if (fechaVenta === fechaActual) {
      return total + venta.totalventa;
    }
    return total;
  }, 0);

  const ventaTotalDia = ventas
    .filter((venta) => {
      const fechaVenta = moment(venta.created_at);
      const fechaActual = new Date()
        .toLocaleString("es-MX", { timeZone: "America/Mexico_City" })
        .slice(0, 10);

      return fechaVenta.isSame(fechaActual, "day");
    })
    .reduce((total, venta) => total + venta.totalventa, 0);

  const ventaTotalDiaTurno1 = ventas
    .filter((venta) => {
      const fechaVenta = moment(venta.created_at);
      const fechaActual = new Date()
        .toLocaleString("es-MX", { timeZone: "America/Mexico_City" })
        .slice(0, 10);
      const hour = fechaVenta.hour();
      return fechaVenta.isSame(fechaActual, "day") && hour >= 0 && hour < 14;
    })
    .reduce((total, venta) => total + venta.totalventa, 0);

  const ventaTotalDiaTurno2 = ventas
    .filter((venta) => {
      const fechaVenta = moment(venta.created_at);
      const fechaActual = new Date()
        .toLocaleString("es-MX", { timeZone: "America/Mexico_City" })
        .slice(0, 10);
      const hour = fechaVenta.hour();
      return fechaVenta.isSame(fechaActual, "day") && hour >= 14 && hour <= 24;
    })
    .reduce((total, venta) => total + venta.totalventa, 0);
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
      setVentas(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="stats-container row">
              <div className="stat col-12">
                <div className="stat-icon">
                  <FaMoneyBillAlt />
                </div>
                <div className="stat-info">
                  <div className="stat-label">Ganancias total</div>
                  <div className="stat-value">${ventaTotalMes}</div>
                </div>
              </div>
              <div className="stat col-12">
                <div className="stat-icon">
                  <FaMoneyBillAlt />
                </div>
                <div className="stat-info">
                  <div className="stat-label">Ganancias del dia</div>
                  <div className="stat-value">${ventaTotalDia}</div>
                </div>
              </div>
              <div className="stat col-12">
                <div className="stat-icon">
                  <FaMoneyBillAlt />
                </div>
                <div className="stat-info">
                  <div className="stat-label">Turno 1:</div>
                  <div className="stat-value">${ventaTotalDiaTurno1}</div>
                </div>
              </div>
              <div className="stat col-12">
                <div className="stat-icon">
                  <FaMoneyBillAlt />
                </div>
                <div className="stat-info">
                  <div className="stat-label">Turno 2:</div>
                  <div className="stat-value">${ventaTotalDiaTurno2}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
