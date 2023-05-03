import React, { useState, useEffect, useRef } from "react";
import { Global } from "../../helpers/Global";
import DataTable from "react-data-table-component";
import printJS from "print-js";

export default function CorteCaja() {
  const columns = [
    {
      name: <h3>Numero de boletos</h3>,
      selector: (row) => row.num_boletos,
      sortable: true,
    },
    {
      name: <h3>Ruta</h3>,
      selector: (row) => row.nombre_ruta,
      sortable: true,
    },
    {
      name: <h3>Ganancia</h3>,
      selector: (row) => row.totalventa,
      sortable: true,
      cell: (row) => `$${row.totalventa}`,
    },
    {
      name: <h3>Descuento*</h3>,
      selector: (row) => row.descuento,
      sortable: true,
      cell: (row) => `%${row.descuento}`,
    },
    {
      name: <h3>Fecha</h3>,
      selector: (row) => row.created_at,
      sortable: true,
      cell: (row) => {
        const [fecha, hora] = row.created_at.split("T"); // dividir la cadena en fecha y hora
        return <div>{fecha}</div>; // mostrar solo la fecha
      },
    },
    {
      name: <h3>Hora</h3>,
      selector: (row) => row.created_at,
      sortable: true,
      cell: (row) => {
        const date = new Date(row.created_at); // crear un objeto Date a partir de la cadena de fecha y hora
        const hora = date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false, // desactivar la presentación de la hora en formato AM/PM
        }); // obtener la hora en formato de 24 horas
        return <div>{hora}</div>; // mostrar la hora en formato de 24 horas
      },
    },
    {
      name: <h3>Vendedor</h3>,
      selector: (row) => row.vendedor,
      sortable: true,
      cell: (row) => `${row.vendedor}`,
    },
  ];
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [totalGanancias, setTotalGanancias] = useState(0); // estado para guardar la suma total de las ganancias
  const [totalBoletos, setTotalBoletos] = useState(0);
  const tableRef = useRef(null);
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);
  let vendedor = parsedUser.name;

  const handlePrint = () => {
    const now = new Date().toLocaleString("es-ES", { hour12: false });

    const ticketContent = `
    <div style="font-family: Arial; font-weight: bold; text-align: center;">
    <h2 style="color: red; font-size: 24px;">Corte de caja</h2>
    <p style="font-family: Arial; font-weight: bold; font-size: 17px;">${now}</p>
  </div>
  <div style="display: flex;">
    <p style="font-family: Arial; font-weight: bold; font-size: 17px;">Cajera: ${vendedor}</p>
    <p style="font-family: Arial; font-weight: bold; font-size: 17px;">_Turno: 1</p>
  </div>
  <div style="flex: 1;">
    <p style="font-family: Arial; font-weight: bold; font-size: 17px;">Monto total del dia: $${totalGanancias}</p>
    <p style="font-family: Arial; font-weight: bold; font-size: 17px;">Boletos vendidos: ${totalBoletos}</p>
  </div>
 `;
 
    printJS({
      printable: data2,
      properties: [
        { field: "nombre_ruta", displayName: "RUTA" },
        { field: "total_boletos", displayName: "BOLETOS" },
      ],
      type: "json",
      header: ticketContent,
    });
  };

  const fetchData = async () => {
    try {
      const response = await fetch(Global.url + `ventas/vendedor/${vendedor}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();

      setData(data);
      setFilteredData(data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchData2 = async () => {
    try {
      const response2 = await fetch(Global.url + `ventas/corte/${vendedor}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data2 = await response2.json();
      setData2(data2);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (searchTerm) => {
    const filteredResults = data.filter((item) => {
      const num_boletos = item.num_boletos ? item.num_boletos.toString() : "";
      const nombre_ruta = item.nombre_ruta ? item.nombre_ruta.toString() : "";
      const cambio = item.cambio ? item.cambio.toString() : "";
      const descuento = item.descuento ? item.descuento.toString() : "";
      const total = item.total ? item.total.toString() : "";
      const created_at = item.created_at ? item.created_at.toString() : "";
      return (
        num_boletos.toLowerCase().includes(searchTerm.toLowerCase()) ||
        nombre_ruta.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cambio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        descuento.toLowerCase().includes(searchTerm.toLowerCase()) ||
        total.toLowerCase().includes(searchTerm.toLowerCase()) ||
        created_at.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredData(filteredResults);
  };
  const filterDataByDate = () => {
    const currentDate = new Date().toISOString().slice(0, 10); // obtener la fecha actual en formato ISO
    const filteredResults = data.filter((item) =>
      item.created_at.startsWith(currentDate)
    ); // filtrar por fecha actual
    setFilteredData(filteredResults);
    // calcular el monto total de ganancias
    const totalGanancias = filteredResults.reduce(
      (total, item) => total + item.totalventa,
      0
    );
    const totalBoletos = filteredResults.reduce(
      (num_boletos, item) => num_boletos + parseInt(item.num_boletos),
      0
    ); // sumar la cantidad de boletos
    setTotalBoletos(totalBoletos); // guardar el total en un estado

    setTotalGanancias(totalGanancias);
  };
  const handleClick = () => {
    // Print all tickets
    printJS({
      printable: "print",
      type: "html",
      documentTitle: "Tickets",
    });
  };
  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);

  useEffect(() => {
    filterDataByDate();
  }, [data]); // ejecutar la función de filtrado cuando se actualiza el estado de data

  return (
    <div className="card bg-light mb-">
      <div className="card-header">
        <h1>Lista de Ventas</h1>
        <h2> Monto total del ganacias del dia: ${totalGanancias}</h2>
        <h2> Monto total de boletos vendidos del dia: {totalBoletos}</h2>
        <button onClick={handlePrint}>Imprimir tabla</button>
      </div>
      <div id="card" className="card-body" ref={tableRef}>
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          persistTableHead
          paginationPerPage={5000}
          paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30, 50, 100]}
        />
      </div>
      <strong>
        *El precio del descuento es aplicado individualmente por cada boleto
      </strong>
    </div>
  );
}
