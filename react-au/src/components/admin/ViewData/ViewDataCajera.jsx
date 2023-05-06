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
  const today = new Date();
  const options = {
    timeZone: "America/Mexico_City",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("es-MX", options);
  const fechaActual = formatter.format(today);
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
      cell: (row) => `${row.created_at}`,
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
      const response = await fetch(Global.url + "ventas/corte/general", {
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
      handleSearch
    } catch (error) {
      console.error(error);
    }
  };
  const handleSearch = () => {
    const filteredResults = data.filter((item) => {
      const fechaVenta = item.created_at.slice(0, 8);
      return (
        item.vendedor.toLowerCase().includes(selectedSeller.toLowerCase()) &&
        fechaVenta === fechaActual
      );
    });
    setFilteredData(filteredResults);
  };
  const getMontoTotal = () => {
    const filteredVentas = data.filter((venta) => {
      const fechaVenta = venta.created_at.slice(0, 8);
      return (
        venta.vendedor.toLowerCase().includes(selectedSeller.toLowerCase()) &&
        fechaVenta === fechaActual
      );
    });
    const montoTotal = filteredVentas.reduce((totalventa, venta) => {
      return totalventa + venta.totalventa;
    }, 0);
    return montoTotal;
  };
  const getNumBoletosVendidos = () => {
    const filteredVentas = data.filter((venta) => {
      const fechaVenta = venta.created_at.slice(0, 8);

      return (
        venta.vendedor.toLowerCase().includes(selectedSeller.toLowerCase()) &&
        fechaVenta === fechaActual
      );
    });
    const numBoletosVendidos = filteredVentas.reduce((totalboleto, venta) => {
      return totalboleto + parseInt(venta.num_boletos);
    }, 0);
    return numBoletosVendidos;
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
            <span>
              Monto total:
              <h2 className="badge text-bg-warning"> ${getMontoTotal()}</h2>
            </span>
            <h2>
              Total de boletos :
              <span className="badge text-bg-warning">
                {getNumBoletosVendidos()}
              </span>
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
