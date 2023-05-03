import React, { useState, useEffect } from "react";
import { Global } from "../../../helpers/Global";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

export const UpdateRuta = (props) => {
  const { selectedRow } = props;
  const [boletoData, setboletoData] = useState(selectedRow);
  const [form, setForm] = useState({});
  const token = localStorage.getItem("token");

  const eliminarBoleto = async (data) => {
    const user = boletoData._id;
    try {
      const response = await fetch(Global.url + `rutas/${user}`, {
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
      const response = await fetch(Global.url + `rutas/${newBoleto._id}`, {
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
          <h3 htmlFor="destino">Nombre del Boleto</h3>
          <input
            type="text"
            className="form-control"
            id="destino"
            value={boletoData?.destino || ""}
            onChange={(e) =>
              setboletoData({ ...boletoData, destino: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <h3 htmlFor="precio">Precio</h3>
          <input
            type="text"
            className="form-control"
            id="precio"
            value={boletoData?.precio || ""}
            onChange={(e) =>
              setboletoData({ ...boletoData, precio: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <h3 htmlFor="habilitado">Habilitado</h3>
          <Form.Select
            aria-label="Default select example"
            className="form-control"
            id="habilitado"
            value={boletoData?.habilitado || ""}
            onChange={(e) =>
              setboletoData({ ...boletoData, habilitado: e.target.value })
            }
          >
            <option value="1">si</option>
            <option value="0">no</option>
          </Form.Select>
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
