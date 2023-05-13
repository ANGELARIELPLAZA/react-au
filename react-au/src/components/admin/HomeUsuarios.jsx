import React, { useState, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import { Global } from "../../helpers/Global";
import { GraphicVenta } from "./graphic/GraphicVenta";
import { GraphicVentaSeries } from "./graphic/GraphicVentaSeries";
import { GraphicVentaTime } from "./graphic/GraphicVentaTime";
import { GraphicRuta } from "./graphic/GraphicRuta";
import { GraphicRutaSeries } from "./graphic/GraphicRutaSeries";
import { GraphicRutaTime } from "./graphic/GraphicRutaTime";
import { ListGroup, Tab } from "react-bootstrap";
import ViewDataTurno from "./ViewData/ViewDataTurno";
import { ViewDataCajera } from "./ViewData/ViewDataCajera"; 
import { TableData } from "./ViewData/TableData";
export const HomeUsuarios = () => {
  const [dateTime, setDateTime] = useState("");
  const [key, setKey] = useState("first");
  const [datos, setDatos] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const obtenerDatos = async () => {
      const respuesta = await fetch(Global.url + "ventas/corte/general", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const datosJson = await respuesta.json();
      const datosOrdenados = datosJson.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setDatos(datosOrdenados);
    };

    obtenerDatos();

    const intervalo = setInterval(() => {
      obtenerDatos();
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);
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
              <div className="col-sm-12 col-md-3">
                <div className="card h-100">
                  <div className="card-header">
                    <h1>Ingresos Por rutas</h1>
                  </div>
                  <div className="card-body">
                    <GraphicVentaSeries datos={datos} />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="card h-100">
                  <div className="card-header">
                    <h1>Ingresos</h1>
                  </div>
                  <div className="card-body">
                    <GraphicVentaTime datos={datos} />
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
                  <GraphicVenta datos={datos} />
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
                    <GraphicRutaSeries datos={datos} />
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
                    <GraphicRuta datos={datos} />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-3">
                <div className="card h-75">
                  <div className="card-header">VENTAS 3</div>
                  <div className="card-body">
                    <GraphicRutaTime datos={datos} />
                  </div>
                </div>
              </div>
            </div>
            <br />
          </section>
        </div>
      </Tab>
      <Tab eventKey="homereport" title="Report">
        <div>
          <section className="layout__content">
            <Tab.Container activeKey={key} onSelect={setKey}>
              <div className="row">
                <div className="col-md-1">
                  <ListGroup>
                    <ListGroup.Item eventKey="first">
                      Ventas tiempo real
                    </ListGroup.Item>
                    <ListGroup.Item eventKey="second">
                      Ventas por turno
                    </ListGroup.Item>
                    <ListGroup.Item eventKey="third">
                      Ventas por vende..
                    </ListGroup.Item>
                  </ListGroup>
                </div>
                <div className="col-md-11">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <TableData datos={datos} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <ViewDataTurno datos={datos} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <ViewDataCajera datos={datos} />
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </div>
            </Tab.Container>
          </section>
        </div>
      </Tab>
    </Tabs>
  );
};
