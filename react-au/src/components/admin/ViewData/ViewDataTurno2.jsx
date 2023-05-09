import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Badge } from "react-bootstrap";

export const ViewDataTurno2 = ({ datos }) => {
  const horaInicioTurno = new Date();
  horaInicioTurno.setHours(14, 1, 0, 0); // 2:01 PM
  const horaFinTurno = new Date();
  horaFinTurno.setHours(23, 59, 0, 0); // 11:59 PM

  const datosFiltrados = datos.filter((dato) => {
    const fechaDato = new Date(dato.created_at);
    return fechaDato >= horaInicioTurno || fechaDato < horaFinTurno;
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
