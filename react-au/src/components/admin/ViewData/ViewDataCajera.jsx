import React, { useState, useEffect } from "react";
import { Global } from "../../../helpers/Global";
import DataTable from "react-data-table-component";
import { ReportExcel } from "../ReportExcel";

export const ViewDataCajera = ({ datos }) => {
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
      name: <h3>Fecha </h3>,
      selector: (row) => row.fecha,
      sortable: true,
      cell: (row) => `${row.fecha}`,
    },
    {
      name: <h3>Hora</h3>,
      selector: (row) => row.hora,
      sortable: true,
      cell: (row) => `${row.hora}`,
    },
    {
      name: <h3>Vendedor</h3>,
      selector: (row) => row.vendedor,
      sortable: true,
      cell: (row) => `${row.vendedor}`,
    },
  ];
  const fetchSales = async () => {
    setData(datos);
    setFilteredData(datos);
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

  const calculateTotalSalesBySeller = (sellerName) => {
    const filteredSales = datos.filter(
      (venta) => venta.vendedor === sellerName
    );
    const totalBoletos = filteredSales.reduce(
      (total, venta) => total + parseInt(venta.num_boletos),
      0
    );
    const totalVenta = filteredSales.reduce(
      (total, venta) => total + venta.totalventa,
      0
    );
    return {
      totalBoletos,
      totalVenta,
    };
  };

  const handleSellerChange = (e) => {
    const selectedSeller = e.target.value;
    setSelectedSeller(selectedSeller);
    if (selectedSeller) {
      const filteredSales = datos.filter(
        (venta) => venta.vendedor === selectedSeller
      );
      setFilteredData(filteredSales);
    } else {
      setFilteredData(datos);
    }
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
            className="mb"
            value={selectedSeller}
            onChange={handleSellerChange}
          >
            <option value="">Elegir vendedor</option>
            {sellers.map((seller) => (
              <option key={seller._id} value={seller.nombre}>
                {seller.nombre}
              </option>
            ))}
          </select>
          <div className="card-header">
            {/* Monto total por vendedor */}
            {selectedSeller ? (
              <h2>
                <span>
                  Monto total para {selectedSeller}:
                  <span className="badge text-bg-warning">
                    ${calculateTotalSalesBySeller(selectedSeller).totalVenta}
                  </span>
                </span>
              </h2>
            ) : null}

            {/* Número total de boletos por vendedor */}
            {selectedSeller ? (
              <h2>
                Total de boletos para {selectedSeller}:
                <span className="badge text-bg-warning">
                  {calculateTotalSalesBySeller(selectedSeller).totalBoletos}
                </span>
              </h2>
            ) : null}
          </div>
          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            persistTableHead
            paginationPerPage={5}
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
