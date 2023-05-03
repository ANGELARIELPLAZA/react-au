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
      name: <h3>Fecha y hora</h3>,
      selector: (row) => row.created_at,
      sortable: true,
      cell: (row) => {
        const [fecha, hora] = row.created_at.split("/"); // dividir la cadena en fecha y hora
        return <div>{fecha} {hora}</div>; // mostrar solo la fecha
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
  const caja = localStorage.getItem("caja");
  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);
  let vendedor = parsedUser.name;

  const handlePrint = () => {
    const now = new Date();
    const hour = now.getHours();
    let turno = "";
    if (hour >= 5 && hour < 14) {
      turno = "1";
    } else if (hour >= 14 && hour <= 23) {
      turno = "2";
    }

    const ticketContent = `
      <div style="font-family: Arial; font-weight: bold; text-align: center;">
      <h2 style="color: red; font-size: 24px;">Corte de caja</h2>
      <p style="font-family: Arial; font-weight: bold; font-size: 17px;">${now}</p>
    </div>
    <div style="display: flex;">
      <p style="font-family: Arial; font-weight: bold; font-size: 17px;">Cajera: ${vendedor}</p>
      <p style="font-family: Arial; font-weight: bold; font-size: 17px;">Turno:${turno}</p>
      <p style="font-family: Arial; font-weight: bold; font-size: 17px;"><span>Caja: </span><span>${caja}</span></p>
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
  const now2 = new Date().toLocaleString("es-ES", { hour12: false });
  return (
    <div className="card bg-light mb-">
      <div className="card-header">
        <h1>Corte de caja del  {now2}  de {vendedor} </h1>
        <h2>
          Monto total del ganacias del dia:
          <h2 class="badge text-bg-warning">${totalGanancias}</h2>
        </h2>
        <h2> Monto total de boletos vendidos del dia: <h2 class="badge text-bg-warning">{totalBoletos}</h2></h2>
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
