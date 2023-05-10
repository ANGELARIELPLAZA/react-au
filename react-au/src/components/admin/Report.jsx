import React, { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";

import { ListGroup, Tab } from "react-bootstrap";
import ViewDataTurno from "./ViewData/ViewDataTurno";
import { ViewDataCajera } from "./ViewData/ViewDataCajera";
import { TableData } from "./ViewData/TableData";
export const Report = () => {
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

  return (
    <>
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
                <ViewDataCajera datos={datos}/>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </>
  );
};
