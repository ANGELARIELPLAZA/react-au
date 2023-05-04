import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Global } from "../../helpers/Global";

const columns = [
  {
    name: <h2>Code</h2>,
    selector: (row) => row.code,
    sortable: true,
  },
  {
    name: <h2>Tipo de boleto</h2>,
    selector: (row) => row.destino,
    sortable: true,
  },
  {
    name: <h2>Precio</h2>,
    selector: (row) => row.precio,
    sortable: true,
    cell: (row) => `$${row.precio}`,
  },
];

export default function ViewRuta() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const response = await fetch(Global.url + "rutas/list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();
      const sortedData = data.sort((a, b) => a.code - b.code); // ordenar por la columna code de forma ascendente
      setData(sortedData);
      setFilteredData(sortedData);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSearch = (searchTerm) => {
    const filteredResults = data.filter((item) => {
      const code = item.code ? item.code.toString() : "";
      const destino = item.destino ? item.destino.toString() : "";
      const precio = item.precio ? item.precio.toString() : "";
      return (
        code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        destino.toLowerCase().includes(searchTerm.toLowerCase()) ||
        precio.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredData(filteredResults);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="col-sm-12">
      <div className="row mb-3">
        <div className="col-sm-12 text-white text-center py-3">
          <h2>VENTA DE BOLETOS</h2>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-12  text-white text-center py-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="table-responsive">
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
                      paginationPerPage={300}
                      paginationRowsPerPageOptions={[
                        5, 10, 15, 20, 25, 30, 50, 100,
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
