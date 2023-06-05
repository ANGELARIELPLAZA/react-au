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
  const [dataT1, setDataT1] = useState([]);
  const [dataT2, setDataT2] = useState([]);
  const [data2, setData2] = useState([]);
  const [turno1, setDataTurno1] = useState([]);
  const [turno2, setDataTurno2] = useState([]);

  const [filteredData, setFilteredData] = useState([]);
  const [totalGanancias, setTotalGanancias] = useState(0); // estado para guardar la suma total de las ganancias
  const [totalBoletos, setTotalBoletos] = useState(0);
  const [totalGananciasTurno1, setTotalGananciasTurno1] = useState(0); // estado para guardar la suma total de las ganancias
  const [totalBoletosTurno1, setTotalBoletosTurno1] = useState(0);
  const [totalGananciasTurno2, setTotalGananciasTurno2] = useState(0); // estado para guardar la suma total de las ganancias
  const [totalBoletosTurno2, setTotalBoletosTurno2] = useState(0);
  const token = localStorage.getItem("token");
  const caja = localStorage.getItem("caja");
  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);
  let vendedor = parsedUser.name;
  const handlePrint = () => {
    const now = new Date();
  

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
      <p style="font-family: Arial; font-weight: bold; font-size: 17px;">Turno: 1</p>
      <p style="font-family: Arial; font-weight: bold; font-size: 17px;">Caja: ${caja}</p>
    </div>
    <div style="flex: 1;">
      <p style="font-family: Arial; font-weight: bold; font-size: 17px;">Monto total: $${totalGananciasTurno1}</p>
      <p style="font-family: Arial; font-weight: bold; font-size: 17px;">Boletos vendidos: ${totalBoletosTurno1}</p>
    </div>
  `;

    printJS({
      printable: dataT1,
      properties: [
        { field: "nombre_ruta", displayName: "RUTA" },
        { field: "total_boletos", displayName: "BOLETOS" },
      ],
      type: "json",
      header: ticketContent,
    });
  };
  const handlePrintTurno2 = () => {
    const now = new Date();
    
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
      <p style="font-family: Arial; font-weight: bold; font-size: 17px;">Turno: 2</p>
      <p style="font-family: Arial; font-weight: bold; font-size: 17px;">Caja: ${caja}</p>
    </div>
    <div style="flex: 1;">
      <p style="font-family: Arial; font-weight: bold; font-size: 17px;">Monto total: $${totalGananciasTurno2}</p>
      <p style="font-family: Arial; font-weight: bold; font-size: 17px;">Boletos vendidos: ${totalBoletosTurno2}</p>
    </div>
  `;

    printJS({
      printable: dataT2,
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

      const turnoActual = new Date().getHours(); // Obtener la hora actual del sistema
      let newData, newData1, newData2;
      if (turnoActual >= 5 && turnoActual < 14) {
        newData = data.ventasPrimerTurno; // Usar array del primer turno
      } else if (turnoActual >= 14 && turnoActual <= 23) {
        newData = data.ventasSegundoTurno; // Usar array del segundo turno
      }
      newData1 = data.ventasPrimerTurno; // Usar array del primer turno
      newData2 = data.ventasSegundoTurno; // Usar array del primer turno

      setDataTurno1(newData1);
      setDataTurno2(newData2);
      setData(newData);
      setFilteredData(newData);

      // Calcular el total de ganancias y boletos por turno
      calculateTurnTotals(data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchData2 = async () => {
    try {
      const response = await fetch(Global.url + `ventas/corte/${vendedor}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();
      const turnoActual = new Date().getHours(); // Obtener la hora actual del sistema

      let newData1,newData2;
      
      newData1 = data.resultadoFinalTurno1; // Usar array del primer turno
      newData2 = data.resultadoFinalTurno2; // Usar array del primer turno

      setDataT1(newData1);
      setDataT2(newData2);
    } catch (error) {
      console.error(error);
    }
  };
  const calculateTurnTotals = (data) => {
    const totalGananciasTurno1 = data.ventasPrimerTurno.reduce(
      (total, item) => total + item.totalventa,
      0
    );
    const totalBoletosTurno1 = data.ventasPrimerTurno.reduce(
      (num_boletos, item) => num_boletos + parseInt(item.num_boletos),
      0
    );

    const totalGananciasTurno2 = data.ventasSegundoTurno.reduce(
      (total, item) => total + item.totalventa,
      0
    );

    const totalBoletosTurno2 = data.ventasSegundoTurno.reduce(
      (num_boletos, item) => num_boletos + parseInt(item.num_boletos),
      0
    );

    setTotalBoletosTurno1(totalBoletosTurno1);
    setTotalGananciasTurno1(totalGananciasTurno1);
    setTotalBoletosTurno2(totalBoletosTurno2);
    setTotalGananciasTurno2(totalGananciasTurno2);
  };
  const filterDataByDate = () => {
    // calcular el monto total de ganancias
    const totalGanancias = data.reduce(
      (total, item) => total + item.totalventa,
      0
    );
    const totalBoletos = filteredData.reduce(
      (num_boletos, item) => num_boletos + parseInt(item.num_boletos),
      0
    );
    setTotalBoletos(totalBoletos);
    setTotalGanancias(totalGanancias);
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
          Monto total del turno actual:
          <span className="badge text-bg-warning">${totalGanancias}</span>
        </h2>
        <h2>
          Total de boletos del turno actual:
          <span className="badge text-bg-warning">{totalBoletos}</span>
        </h2>
        <button onClick={handlePrint}>Imprimir corte de Turno 1</button>
        <button onClick={handlePrintTurno2}>Imprimir corte de Turno 2</button>
      </div>
      <div id="card" className="card-body">
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
