import { FaMoneyBillAlt, FaRoute } from "react-icons/fa";
import { Global } from "../../../helpers/Global";
import React, { useState, useEffect } from "react";
import moment from "moment";
export const GraphicVentaTime = () => {
  const token = localStorage.getItem("token");

  const [ventas, setVentas] = useState([]);

  const ventaTotalMes = ventas.reduce((total, venta) => {
    const fechaVenta = venta.created_at.slice(0, 7); // obtener mes y año de la fecha de venta
    const fechaActual = new Date().toISOString().slice(0, 7); // obtener mes y año de la fecha actual
    if (fechaVenta === fechaActual) {
      return total + venta.totalventa;
    }
    return total;
  }, 0);

  const ventaTotalDia = ventas
    .filter((venta) => {
      const fechaVenta = moment(venta.created_at);
      console.log(fechaVenta)
      const fechaActual = new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' }).slice(0, 10);
      console.log(fechaActual)

      return fechaVenta.isSame(fechaActual, "day");
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
      console.log(data)
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
                  <div className="stat-value">${ventaTotalDia}</div>
                </div>
              </div>
              <div className="stat col-12">
                <div className="stat-icon">
                  <FaMoneyBillAlt />
                </div>
                <div className="stat-info">
                  <div className="stat-label">Turno 2:</div>
                  <div className="stat-value">${ventaTotalDia}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
