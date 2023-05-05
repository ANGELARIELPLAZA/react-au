import React, { useState, useEffect } from "react";
import { DataUsuarios } from "../ViewDataUsuario/DataUsuarios";
import { Global } from "../../../helpers/Global";

export const Ventas = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const response = await fetch(Global.url + "ventas/list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Llamar fetchData para obtener los datos después de que el componente se haya montado
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <DataUsuarios data={data} />
    </div>
  );
};
