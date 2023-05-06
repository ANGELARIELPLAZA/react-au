import React, { useState } from "react";
import { ListGroup, Tab } from "react-bootstrap";
import ViewData from "./ViewData/ViewData";
import ViewDataTurno from "./ViewData/ViewDataTurno";
import { ViewDataCajera } from "./ViewData/ViewDataCajera";

export const Report = () => {
  const [key, setKey] = useState("first");

  return (
    <>
      <Tab.Container activeKey={key} onSelect={setKey}>
        <div className="row">
          <div className="col-md-1">
            <ListGroup>
              <ListGroup.Item eventKey="first">Ventas general</ListGroup.Item>
              <ListGroup.Item eventKey="second">
                Ventas por turno
              </ListGroup.Item>
              <ListGroup.Item eventKey="third">
                Ventas por vendedora
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col-md-11">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <ViewData />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <ViewDataTurno />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <ViewDataCajera />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </>
  );
};
