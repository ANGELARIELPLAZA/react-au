import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Badge } from "react-bootstrap";

export const ViewDataTurno1 = ({ datos }) => {

  const datosFiltrados = datos.filter((dato) => {
    const [hora, minutos] = dato.hora.split(":");
    return (
      (hora > 5 && hora < 14) ||
      (hora === "05" && minutos >= "30") ||
      (hora === "14" && minutos === "00")
    );
  });

  const columns = [
    {
      name: <h3>#Boletos</h3>,
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
      name: <h3>Fecha </h3>,
      selector: (row) => row.fecha,
      sortable: true,
      cell: (row) => `${row.fecha}`,
    },
    {
      name: <h3>Hora </h3>,
      selector: (row) => row.hora,
      sortable: true,
      cell: (row) => `${row.hora}`,
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
  ];

  return (
    <div>
      <div className="card bg-light mb-">
        <div className="card-body">
          <DataTable
            columns={columns}
            data={datosFiltrados}
            pagination
            persistTableHead
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30, 50, 100]}
          />
        </div>
        <strong>*El precio del descuento es aplicado...</strong>
      </div>
    </div>
  );
};
