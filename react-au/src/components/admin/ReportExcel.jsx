import React from "react";
import { CSVLink } from "react-csv";

export const ReportExcel = (props) => {
  const { filteredData } = props;

  return (
    <div>
      <CSVLink
        className="btn btn-primary mb-2 report-container"
        data={filteredData.map(
          ({
            num_boletos,
            nombre_ruta,
            totalventa,
            descuento,
            total,
            created_at,
          }) => ({
            num_boletos,
            nombre_ruta,
            totalventa,
            descuento,
            total,
            created_at,
          })
        )}
        filename={"ventas.csv"}
      >
        <h1>Descargar CSV (excel)</h1>
      </CSVLink>
    </div>
  );
};
