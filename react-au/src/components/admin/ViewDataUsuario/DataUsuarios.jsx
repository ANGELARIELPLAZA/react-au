import React from "react";

export const DataUsuarios = ({ data }) => {
  return (
    <div className="text-white">
      <table>
        <thead>
          <tr>
          <th>Boletos</th>
            <th>Vendedor</th>
            <th>Ruta</th>
            <th>Total</th>
            <th>Descuento</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {data.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.num_boletos}</td>
              <td>{usuario.vendedor}</td>
              <td>{usuario.nombre_ruta}</td>
              <td>{usuario.totalventa}</td>
              <td>{usuario.descuento === 1 ? 0 : `%${usuario.descuento}`}</td>
              <td>{usuario.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
