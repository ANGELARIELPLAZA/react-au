import React, { useState, useEffect } from "react";
import { Global } from "../../../helpers/Global";
import DataTable from "react-data-table-component";
import { ReportExcel } from "../ReportExcel";
import { Badge } from "react-bootstrap";
export const ViewDataCajera = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState("");
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
      name: <h3>Fecha </h3>,
      selector: (row) => row.created_at,
      sortable: true,
      cell: (row) => {
        const [fecha, hora] = row.created_at.split("/"); // dividir la cadena en fecha y hora
        return <div>{fecha}</div>; // mostrar solo la fecha
      },
    },
    {
      name: <h3>hora</h3>,
      selector: (row) => row.created_at,
      sortable: true,
      cell: (row) => {
        const [fecha, hora] = row.created_at.split("/"); // dividir la cadena en fecha y hora
        return <div>{hora}</div>; // mostrar solo la fecha
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

  const fetchSales = async () => {
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

  const fetchSellers = async () => {
    try {
      const response = await fetch(Global.url + "usuarios/list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const sellers = await response.json();
      setSellers(sellers);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    const today = new Date().toISOString().slice(0, 10); // Obtiene la fecha actual en formato ISO (por ejemplo: '2023-05-04')
    const filteredResults = data.filter((item) => {
      const fechaSinHora = item.created_at.split("/")[0]; // Obtiene la fecha sin la hora del elemento
      return (
        item.vendedor.toLowerCase().includes(selectedSeller.toLowerCase()) &&
        fechaSinHora === today
      );
    });
    setFilteredData(filteredResults);
  };

  useEffect(() => {
    fetchSales();
    fetchSellers();
  }, []);
  
  return (
    <>
      <header className="content__header">
        <h1 className="content__title">Ventas por vendedora</h1>
        <ReportExcel filteredData={filteredData} />
      </header>
      <div className="card bg-light mb-">
        <div className="card-body">
          <select
            value={selectedSeller}
            onChange={(e) => setSelectedSeller(e.target.value)}
          >
            <option value="">Selecciona un vendedor</option>
            {sellers.map((seller) => (
              <option key={seller._id} value={seller.nombre}>
                {seller.nombre}
              </option>
            ))}
          </select>
          <button onClick={handleSearch}>Buscar</button>
          <div className="card-header">
        <h2>
          Monto total de ganacias del dia:
          <h2 class="badge text-bg-warning">$0</h2>
        </h2>
        <h2>
          {" "}
          Monto total de boletos vendidos del dia:
          <h2 class="badge text-bg-warning">0</h2>
        </h2>
      </div>
          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            persistTableHead
            paginationPerPage={200}
            paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30, 50, 100]}
            defaultSortField="valor"
            defaultSortAsc={true}
          />
        </div>
        <strong>
          *El precio del descuento es aplicado individualmente por cada boleto
        </strong>
      </div>
    </>
  );
};
