import React from "react";

export const DataUsuarios = ({ data }) => {
  // Objeto para almacenar la suma de ventas por fecha
  const ventasPorFecha = {};

  // Recorrer el array de datos y sumar las ventas por fecha
  data.forEach((venta) => {
    const fecha = venta.created_at.split('T')[0];
    const vendedor = venta.vendedor;
    const ruta = venta.nombre_ruta;
    const totalVentas = venta.totalventa;
    const totalBoletos = parseInt(venta.num_boletos);

    if (ventasPorFecha.hasOwnProperty(fecha)) {
      ventasPorFecha[fecha].totalVentas += totalVentas;
      ventasPorFecha[fecha].totalBoletos += totalBoletos;
      ventasPorFecha[fecha].vendedores.add(vendedor);
      ventasPorFecha[fecha].rutas.add(ruta);
    } else {
      ventasPorFecha[fecha] = {
        totalVentas,
        totalBoletos,
        vendedores: new Set([vendedor]),
        rutas: new Set([ruta])
      };
    }
  });

  // Convertir el objeto de sumas de ventas por fecha en un array de objetos
  const ventasPorFechaArray = Object.keys(ventasPorFecha).map((fecha) => ({
    fecha,
    totalVentas: ventasPorFecha[fecha].totalVentas,
    totalBoletos: ventasPorFecha[fecha].totalBoletos,
    vendedores: Array.from(ventasPorFecha[fecha].vendedores).join(", "),
    rutas: Array.from(ventasPorFecha[fecha].rutas).join(", "),
  }));
  
  ventasPorFechaArray.sort((a, b) => (a.fecha < b.fecha ? 1 : -1));
   
  return (
    <div className="text-white">
      <table>
        <thead>
          <tr>
            <th>Boletos</th>
            <th>Vendedor</th>
            <th>Ruta</th>
            <th>Total</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {ventasPorFechaArray.map((venta) => (
            <tr key={venta.fecha}>
              <td>{venta.totalBoletos}</td>
              <td>{venta.vendedores}</td>
              <td>{venta.rutas}</td>
              <td>{venta.totalVentas}</td>
              <td>{venta.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
