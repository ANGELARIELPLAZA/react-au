import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { GraphicVentaTime } from "./graphic/GraphicVentaTime";

export const HomeUsuarios = () => {
  return (
    <Tabs
      defaultActiveKey="homeventas"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="homeventas" title="Home">
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
      </Tab>
      <Tab eventKey="homerutas" title="Rutas"></Tab>
      <Tab eventKey="homeusuarios" title="Usuarios"></Tab>
    </Tabs>
  );
};
