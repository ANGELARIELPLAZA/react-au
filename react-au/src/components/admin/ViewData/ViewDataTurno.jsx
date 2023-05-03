import React from "react";
import { ViewDataTurno1 } from "./ViewDataTurno1";
import { ViewDataTurno2 } from "./ViewDataTurno2";

const ViewDataTurno = () => {
  return (
    <>
      <header className="content__header">
        <h1 className="content__title">Ventas por turno</h1>
      </header>
      <h2 className="text-white">TURNO 1</h2>
      <ViewDataTurno1 />
      <h2 className="text-white">TURNO 2</h2>
      <ViewDataTurno2 />
    </>
  );
};

export default ViewDataTurno;
