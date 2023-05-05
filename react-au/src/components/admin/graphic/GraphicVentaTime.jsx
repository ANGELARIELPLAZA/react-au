import { FaMoneyBillAlt, FaRoute } from "react-icons/fa";
import { Global } from "../../../helpers/Global";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { MyDate } from "../MyDate";
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
      const fechaActual = new Date().toISOString().slice(0, 7); // obtener mes y año de la fecha actual
      return fechaVenta.isSame(fechaActual, "day");
    })
    .reduce((total, venta) => total + venta.totalventa, 0);

  const ventaPorRuta = ventas.reduce((rutaVentas, venta) => {
    const ruta = venta.nombre_ruta;
    const total = venta.totalventa;
    if (!rutaVentas[ruta]) {
      rutaVentas[ruta] = total;
    } else {
      rutaVentas[ruta] += total;
    }
    return rutaVentas;
  }, {});

  const rutaMaxVentas = Object.entries(ventaPorRuta).reduce(
    (max, [ruta, ventas]) => {
      if (ventas > max.ventas) {
        return { ruta, ventas };
      }
      return max;
    },
    { ruta: "", ventas: 0 }
  ).ruta;

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
          <div className="col-md-6">
            <div className="stats-container row">
              <div className="stat col-12">
                <div className="stat-icon">
                  <FaMoneyBillAlt />
                </div>
                <div className="stat-info">
                  <div className="stat-value">${ventaTotalMes}</div>
                  <div className="stat-label">Ventas totales del mes</div>
                </div>
              </div>
              <div className="stat col-12">
                <div className="stat-icon">
                  <FaMoneyBillAlt />
                </div>
                <div className="stat-info">
                  <div className="stat-value">${ventaTotalDia}</div>
                  <div className="stat-label">Ventas totales del día</div>
                </div>
              </div>
              <div className="stat col-12">
                <div className="stat-icon">
                  <FaRoute />
                </div>
                <div className="stat-info">
                  <div className="stat-value">{rutaMaxVentas}</div>
                  <div className="stat-label">
                    Ruta con mayor ventas en el mes
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="stats-container row">
                <MyDate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
