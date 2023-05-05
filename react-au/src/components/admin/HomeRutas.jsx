import React from "react";
import { GraphicRuta } from "./graphic/GraphicRuta";
import { GraphicRutaSeries } from "./graphic/GraphicRutaSeries";
import { GraphicRutaTime } from "./graphic/GraphicRutaTime";

export const HomeRutas = () => {
  return (
    <div>
      <section className="layout__content">
        <header className="content__header">
          <h1 className="content__title">Dashboard Rutas</h1>
        </header>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="card h-100">
              <div className="card-header">VENTAS 1</div>
              <div className="card-body">
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="card h-100">
              <div className="card-header">VENTAS 2</div>
              <div className="card-body">
                <GraphicRutaSeries />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-12 col-md-9">
            <div className="card h-75">
              <div className="card-header">VENTAS 2</div>
              <div className="card-body">
                <GraphicRuta />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="card h-75">
              <div className="card-header">VENTAS 3</div>
              <div className="card-body">
                <GraphicRutaTime />
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>
    </div>
  );
};
