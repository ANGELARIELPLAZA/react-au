import React, { useState, useEffect } from "react";
import { Global } from "../../../helpers/Global";

export const DataUsuarios = (prop) => {
  const [ventas, setVentas] = useState([]);
  const [vendedor, setVendedor] = useState("");

  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const response = await fetch(Global.url + "ventas/corte/ariel", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();
      console.log(data);
      setVentas(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setVendedor(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Obtener los nombres de vendedores disponibles
  const vendedoresDisponibles = [
    ...new Set(ventas.map((venta) => venta.vendedor)),
  ];

  return (
    <div className="content__title">
      <header className="content__header">
        <h1 className="content__title">Dashboard Usuarios</h1>
      </header>
      <div className="select-container">
        <label htmlFor="vendedor">Vendedor:</label>
        <select
          name="vendedor"
          id="vendedor"
          onChange={handleChange}
          value={vendedor}
        >
          <option value="">Todos los vendedores</option>
          {vendedoresDisponibles.map((vendedor) => (
            <option key={vendedor} value={vendedor}>
              {vendedor}
            </option>
          ))}
        </select>
      </div>
      <table className="ventas-list">
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Ruta</th>
            <th>Total venta</th>
          </tr>
        </thead>
        <tbody>
          {ventas
            .filter((venta) => !vendedor || venta.vendedor === vendedor) // Filtrar ventas por vendedor seleccionado
            .map((venta) => (
              <tr key={venta.id}>
                <td>{venta.total_boletos}</td>
                <td>{venta.nombre_ruta}</td>
                <td>{venta.total_venta}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
