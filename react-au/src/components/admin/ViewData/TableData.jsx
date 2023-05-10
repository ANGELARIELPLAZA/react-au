import React from "react";

export const TableData = ({ datos }) => {
  return (
    <div className="text-white">
      <table>
        <thead>
          <tr>
            <th>vendedor</th>
            <th>Ruta</th>
            <th>Ganancia</th>
            <th>Descuento Aplicado</th>
            <th>Fecha</th>
            <th>Hora</th>

          </tr>
        </thead>
        <tbody>
          {datos && datos.map((datos) => (
            <tr key={datos._id}>
              <td>{datos.vendedor}</td>
              <td>{datos.nombre_ruta}</td>
              <td>{datos.totalventa}</td>
              <td>%{datos.descuento}</td>
              <td>{datos.fecha}</td>
              <td>{datos.hora}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
