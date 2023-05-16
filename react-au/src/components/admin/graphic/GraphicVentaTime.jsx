import { FaMoneyBillAlt } from "react-icons/fa";
import React from "react";
import moment from "moment";

export const GraphicVentaTime = ({ datos }) => {
  const ventaTotalDia = datos.reduce((total, datos) => {
    const fechaVenta = datos.fecha;
    const fechaActual = moment().format("DD/M/YYYY");

    if (fechaVenta === fechaActual) {
      return total + datos.totalventa;
    }
    return total;
  }, 0);

  const ventaTotalDiaTurno1 = datos
  .filter((datos) => {
    const hour = parseInt(datos.hora.split(":")[0]);
    return hour >= 5 && hour < 14;
  })
  .reduce((total, datos) => total + datos.totalventa, 0);

  const ventaTotalDiaTurno2 = datos
  .filter((datos) => {
    const hour = parseInt(datos.hora.split(":")[0]);
    return hour >= 14 && hour < 23;
  })
  .reduce((total, datos) => total + datos.totalventa, 0);

  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="stats-container row">
            <div className="stat col-12">
              <div className="stat-icon">
                <FaMoneyBillAlt />
              </div>
              <div className="stat-info">
                <div className="stat-label">Ganancias del día</div>
                <div className="stat-value">${ventaTotalDia}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="stats-container row">
            <div className="stat col-12">
              <div className="stat-icon">
                <FaMoneyBillAlt />
              </div>
              <div className="stat-info">
                <div className="stat-label">Ganancias del Turno 1:</div>
                <div className="stat-value">${ventaTotalDiaTurno1}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="stats-container row">
            <div className="stat col-12">
              <div className="stat-icon">
                <FaMoneyBillAlt />
              </div>
              <div className="stat-info">
                <div className="stat-label">Ganancias del Turno 2:</div>
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
