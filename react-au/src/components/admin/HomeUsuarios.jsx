import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useState, useEffect } from "react";
import { GraphicVenta } from "./graphic/GraphicVenta";
import { GraphicVentaSeries } from "./graphic/GraphicVentaSeries";
import { GraphicVentaTime } from "./graphic/GraphicVentaTime";
import { GraphicRuta } from "./graphic/GraphicRuta";
import { GraphicRutaSeries } from "./graphic/GraphicRutaSeries";
import { GraphicRutaTime } from "./graphic/GraphicRutaTime";

export const HomeUsuarios = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const formattedDateTime = `${day}/${month}/${year}`;
      setDateTime(formattedDateTime);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <Tabs
      defaultActiveKey="homeventas"
      id="uncontrolled-tab-example"
      className="mb-3 tab"
    >
      <Tab eventKey="homeventas" title="Home">
        <div>
          <section className="layout__content">
            <header className="content__header">
              <h1 className="content__title">Dashboard Ventas {dateTime}</h1>
            </header>
            <div className="row">
              <div className="col-sm-12 col-md-10">
                <div className="card h-100">
                  <div className="card-header">
                    <h1>Ingresos Por rutas</h1>
                  </div>
                  <div className="card-body">
                    <GraphicVentaSeries />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-2">
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
            <div className="col-sm-12 col-md-12">
                <div className="card h-100">
                  <div className="card-header">
                  <h1>Ingresos por ruta</h1>
                  </div>
                  <div className="card-body">
                  <GraphicVenta />
                  </div>
                </div>
              </div>
          </section>
        </div>
      </Tab>
      <Tab eventKey="homerutas" title="Rutas" disabled>
        <div>
          <section className="layout__content">
            <header className="content__header">
              <h1 className="content__title">Dashboard Rutas</h1>
            </header>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="card h-100">
                  <div className="card-header">VENTAS 1</div>
                  <div className="card-body"></div>
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
      </Tab>
    </Tabs>
  );
};
