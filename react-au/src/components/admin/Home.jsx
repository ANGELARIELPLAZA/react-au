import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import { GraphicVenta } from "./graphic/GraphicVenta";
import { GraphicVentaSeries } from "./graphic/GraphicVentaSeries";
import { GraphicVentaTime } from "./graphic/GraphicVentaTime";

export const Home = () => {

  return (
    <div>
      <section className="layout__content">
        <header className="content__header">
          <h1 className="content__title">Dashboard Ventas</h1>
        </header>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="card h-100">
              <div className="card-header">
                <h1>Ingresos Por rutas</h1>
              </div>
              <div className="card-body">
                <GraphicVentaSeries />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="card h-100">
              <div className="card-header">
                <h1>Ingresos</h1>
              </div>
              <div className="card-body">
                <GraphicVentaTime />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="card">
          <div className="card-header">
            <h1>Ingresos por ruta</h1>
          </div>
          <div className="card-body">
            <GraphicVenta />
          </div>
        </div>
      </section>
    </div>
  );
};
