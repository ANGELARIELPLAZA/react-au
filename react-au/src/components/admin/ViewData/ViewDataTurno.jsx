import React from "react";
import { ViewDataTurno1 } from "./ViewDataTurno1";
import { ViewDataTurno2 } from "./ViewDataTurno2";

const ViewDataTurno = ({datos}) => {
  return (
    <>
      
      <h2 className="text-white">TURNO 1</h2>
      <ViewDataTurno1  datos={datos} />
      <h2 className="text-white">TURNO 2</h2>
      <ViewDataTurno2  datos={datos}  />
    </>
  );
};

export default ViewDataTurno;
