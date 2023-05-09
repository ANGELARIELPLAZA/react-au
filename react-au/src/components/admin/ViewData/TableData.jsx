import React from "react";

export const TableData = ({ datos }) => {
  return (
    <div className="text-white">
      <table>
        <thead>
          <tr>
            <th>vendedor</th>
            <th>Ruta</th>
            <th>total</th>
            <th>Fecha</th>

          </tr>
        </thead>
        <tbody>
          {datos && datos.map((datos) => (
            <tr key={datos._id}>
              <td>{datos.vendedor}</td>
              <td>{datos.nombre_ruta}</td>
              <td>{datos.total}</td>
              <td>{datos.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
