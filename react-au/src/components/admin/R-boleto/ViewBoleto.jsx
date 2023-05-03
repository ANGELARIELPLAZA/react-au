import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Global } from "../../../helpers/Global";
import { UpdateBoleto } from "./UpdateBoleto";

export const ViewBoleto = () => {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  const [filteredData, setFilteredData] = useState([]);
  const token = localStorage.getItem("token");

  const columns = [
    {
      name: <h3>Code</h3>,
      selector: (row) => row.code,
      sortable: true,
    },
    {
      name: <h3>Tipo de boleto</h3>,
      selector: (row) => row.nombre_boleto,
      sortable: true,
    },
    {
      name: <h3>(descuento)</h3>,
      selector: (row) => row.descuento,
      sortable: true,
      cell: (row) => `$${row.descuento}`,
    },
    {
      name: <h3>Habilitado</h3>,
      selector: (row) => row.habilitado,
      sortable: true,
      cell: (row) => {
        if (row.habilitado === 1) {
          return <h2 className="badge text-bg-success">Habilitado</h2>;
        } else if (row.habilitado === 0) {
          return <h2 className="badge text-bg-danger">Desabilitado</h2>;
        } else {
          return "Valor no válido";
        }
      },
    },
    {
      name: <h3>Editar</h3>,
      button: true,
      cell: (row) => (
        <button onClick={() => handleEdit(row._id)}>Editar</button>
      ),
    },
  ];

  const fetchData = async () => {
    try {
      const response = await fetch(Global.url + "descuentos/list", {
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
  const handleEdit = (id) => {
    const row = data.find((item) => item._id === id);
    setSelectedRow(row);
  };
  const handleSearch = (searchTerm) => {
    const filteredResults = data.filter((item) => {
      const code = item.code ? item.code.toString() : "";
      const nombre_boleto = item.nombre_boleto
        ? item.nombre_boleto.toString()
        : "";
      const descuento = item.descuento ? item.descuento.toString() : "";
      return (
        code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        nombre_boleto.toLowerCase().includes(searchTerm.toLowerCase()) ||
        descuento.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredData(filteredResults);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <div className="card h-100">
          <div className="card-header">
            <h2>Lista de boletos</h2>
          </div>
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
        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="card h-100">
          <div className="card-header">
            <h2>Actualizar Boleto</h2>
          </div>
          <div className="content__posts_form">
            <UpdateBoleto selectedRow={selectedRow} />
          </div>
        </div>
      </div>
    </div>
  );
};
