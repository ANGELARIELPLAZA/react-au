import React, { useState, useEffect } from "react";
import { Global } from "../../../helpers/Global";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

export const UpdateBoleto = (props) => {
  const { selectedRow } = props;
  const [boletoData, setboletoData] = useState(selectedRow);
  const [form, setForm] = useState({});
  const token = localStorage.getItem("token");

  const eliminarBoleto = async (data) => {
    const user = boletoData._id;
    try {
      const response = await fetch(Global.url + `descuentos/${user}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      // Update your data and filteredData state variables here if needed
    } catch (error) {
      console.error(error);
    }
  };

  const updateBoleto = async (e) => {
    e.preventDefault();
    let newBoleto = boletoData;
    try {
      const response = await fetch(Global.url + `descuentos/${newBoleto._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(newBoleto),
      });
      const updatedData = await response.json();
      setboletoData(updatedData);
      setForm({});
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setboletoData(selectedRow);
  }, [selectedRow]);

  const handleChange = (e) => {
    setboletoData({ ...boletoData, [e.target.name]: e.target.value });
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="register-form " onSubmit={updateBoleto}>
        <br />
        <div className="form-group">
          <h3 htmlFor="code">Code de Boleto</h3>
          <input
            type="text"
            className="form-control"
            id="code"
            value={boletoData?.code || ""}
            onChange={(e) =>
              setboletoData({ ...boletoData, code: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <h3 htmlFor="nombre_boleto">Nombre del Boleto</h3>
          <input
            type="text"
            className="form-control"
            id="nombre_boleto"
            value={boletoData?.nombre_boleto || ""}
            onChange={(e) =>
              setboletoData({ ...boletoData, nombre: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <h3 htmlFor="descuento">Descuento</h3>
          <input
            type="text"
            className="form-control"
            id="descuento"
            value={boletoData?.descuento || ""}
            onChange={(e) =>
              setboletoData({ ...boletoData, descuento: e.target.value })
            }
          />
        </div>
        <br />

        <Button type="submit" className=" btn-success btn-lg m-2">
          Actualizar
        </Button>
        <Button
          onClick={() => eliminarBoleto(selectedRow)}
          className=" btn-danger btn-lg m-2"
        >
          Eliminar
        </Button>
      </form>
    </div>
  );
};
