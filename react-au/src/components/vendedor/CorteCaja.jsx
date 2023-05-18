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
      cell: (row) => {
        if (row.descuento === 1) {
          return `%0`;
        } else {
          return `%${row.descuento}`;
        }
      },
    },
    {
      name: <h3>Fecha</h3>,
      selector: (row) => row.fecha,
      sortable: true,
      cell: (row) => `${row.fecha}`,
    },
    {
      name: <h3>Hora</h3>,
      selector: (row) => row.hora,
      sortable: true,
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

    const opcionesFecha = {
      weekday: "long", // Día de la semana completo (por ejemplo: "jueves")
      year: "numeric", // Año con cuatro dígitos (por ejemplo: "2023")
      month: "long", // Nombre completo del mes (por ejemplo: "mayo")
      day: "numeric", // Día del mes (por ejemplo: "4")
      timeZoneName: "short", // Nombre corto de la zona horaria (por ejemplo: "CST")
    };

    const opcionesHora = {
      hour: "numeric", // Hora en formato de 24 horas (por ejemplo: "9")
      minute: "numeric", // Minutos (por ejemplo: "30")
    };

    const fechaEnEspañol = now.toLocaleString("es-ES", {
      ...opcionesFecha,
      ...opcionesHora,
      hour12: false, // Utilizar formato de 24 horas
    });

    const ticketContent = `
      <div style="font-family: Arial; font-weight: bold; text-align: center;">
      <h2 style="color: red; font-size: 24px;">Corte de caja</h2>
      <p style="font-family: Arial; font-weight: bold; font-size: 17px;">${fechaEnEspañol}</p>
    </div>
    <div style="display: flex;">
      <p style="font-family: Arial; font-weight: bold; font-size: 17px;">Cajera: ${vendedor}</p>
      <p style="font-family: Arial; font-weight: bold; font-size: 17px;">Turno: ${turno}</p>
      <p style="font-family: Arial; font-weight: bold; font-size: 17px;">Caja: ${caja}</p>
    </div>
    <div style="flex: 1;">
      <p style="font-family: Arial; font-weight: bold; font-size: 17px;">Monto total: $${totalGanancias}</p>
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
      console.log(data)
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

  const filterDataByDate = () => {
    // calcular el monto total de ganancias
    const totalGanancias = data.reduce(
      (total, item) => total + item.totalventa,
      0
    );
    const totalBoletos = data.reduce(
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
        <h1>
          Corte de caja del {now2} de {vendedor}
        </h1>
        <h2>
          Monto total:
          <span className="badge text-bg-warning">${totalGanancias}</span>
        </h2>
        <h2>
          Total de boletos:
          <span className="badge text-bg-warning">{totalBoletos}</span>
        </h2>
        <button onClick={handlePrint}>Imprimir tabla</button>
      </div>
      <div id="card" className="card-body" ref={tableRef}>
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          persistTableHead
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30, 50, 100]}
        />
      </div>
      <strong>
        *El precio del descuento es aplicado individualmente por cada boleto
      </strong>
    </div>
  );
}
