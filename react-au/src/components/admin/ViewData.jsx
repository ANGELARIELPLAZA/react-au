import React, { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import DataTable from "react-data-table-component";
import { ReportExcel } from "./ReportExcel";
import { Badge } from "react-bootstrap";

export default function ViewData() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const token = localStorage.getItem("token");
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
      cell: (row) => `$${row.descuento}`,
    },
    {
      name: <h3>Total sin descuento</h3>,
      selector: (row) => row.total,
      sortable: true,
      cell: (row) => `$${row.total}`,
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
      name: <h3>Caja</h3>,
      selector: (row) => row.caja,
      sortable: true,
      cell: (row) => `${row.caja}`,
    },
    {
      name: <h3>Vendedor</h3>,
      selector: (row) => row.vendedor,
      sortable: true,
      cell: (row) => `${row.vendedor}`,
    },
    {
      name: <h3>ESTADO</h3>,
      selector: (row) => row.token,
      cell: (row) => (
        <div>
          {row.token ? (
            <Badge bg="success">boleto activo</Badge>
          ) : (
            <Badge bg="warning">boleto cancelado</Badge>
          )}
        </div>
      ),
    },
  ];

  const fetchData = async () => {
    try {
      const response = await fetch(Global.url + "ventas/list", {
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
  const handleSearch = (searchTerm) => {
    const filteredResults = data.filter((item) => {
      const num_boletos = item.num_boletos ? item.num_boletos.toString() : "";
      const nombre_ruta = item.nombre_ruta ? item.nombre_ruta.toString() : "";
      const cambio = item.cambio ? item.cambio.toString() : "";
      const descuento = item.descuento ? item.descuento.toString() : "";
      const total = item.total ? item.total.toString() : "";
      const vendedor = item.vendedor ? item.vendedor.toString() : "";
      const created_at = item.created_at ? item.created_at.toString() : "";
      return (
        num_boletos.toLowerCase().includes(searchTerm.toLowerCase()) ||
        nombre_ruta.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cambio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        descuento.toLowerCase().includes(searchTerm.toLowerCase()) ||
        total.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendedor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        created_at.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredData(filteredResults);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <header className="content__header">
        <h1 className="content__title">Lista de Ventas</h1>
        <ReportExcel filteredData={filteredData} />
      </header>
      <div className="card bg-light mb-">
        <div className="card-body">
          <input
            type="text"
            placeholder="Buscar"
            onChange={(e) => handleSearch(e.target.value)}
          />
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
    </>
  );
}
