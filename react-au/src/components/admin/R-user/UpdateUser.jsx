import React, { useState, useEffect } from "react";
import { Global } from "../../../helpers/Global";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

export const UpdateUser = (props) => {
  const { selectedRow } = props;
  const [userData, setUserData] = useState(selectedRow);
  const [form, setForm] = useState({});
  const token = localStorage.getItem("token");

  const eliminarUsuario = async (data) => {
    const user = data._id;
    try {
      const response = await fetch(Global.url + `usuarios/${user}`, {
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

  const updateUsuario = async (e) => {
    e.preventDefault();
    let newUser = userData;

    try {
      const response = await fetch(Global.url + `usuarios/${newUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(newUser),
      });
      const updatedData = await response.json();
      setUserData(updatedData);
      setForm({});
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setUserData(selectedRow);
  }, [selectedRow]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="register-form " onSubmit={updateUsuario}>
        <br />
        <div className="form-group">
          <h3 htmlFor="nombre">Nombre</h3>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={userData?.nombre || ""}
            onChange={(e) =>
              setUserData({ ...userData, nombre: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <h3 htmlFor="email">Correo</h3>
          <input
            type="text"
            className="form-control"
            id="email"
            value={userData?.email || ""}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <h3 htmlFor="caja">Caja</h3>
          <Form.Select
            aria-label="Default select example"
            className="form-control"
            id="caja"
            value={userData?.caja || ""}
            onChange={(e) =>
              setUserData({ ...userData, caja: e.target.value })
            }
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </Form.Select>
        </div>
        <div className="form-group">
          <h3 htmlFor="caja">Contraseña</h3>
          <input
            type="password"
            className="form-control"
            id="password"
            value={userData?.contrasena || ""}
            onChange={(e) =>
              setUserData({ ...userData, contrasena: e.target.value })
            }
          />
          <strong style={{ color: "red" }}>
            Tiene que volver a poner la contraseña
          </strong>
        </div>
        <br />
        <div className="form-group">
          <h3 htmlFor="rol">Rol</h3>
          <Form.Select
            aria-label="Default select example"
            className="form-control"
            id="rol"
            value={userData?.rol || ""}
            onChange={(e) => setUserData({ ...userData, rol: e.target.value })}
          >
            <option value="usuario">Usuario</option>
            <option value="admin">Administrador</option>
          </Form.Select>
        </div>
        <br />
        <div className="form-group">
          <h3 htmlFor="habilitado">Habilitado</h3>
          <Form.Select
            aria-label="Default select example"
            className="form-control"
            id="habilitado"
            value={userData?.habilitado || ""}
            onChange={(e) =>
              setUserData({ ...userData, habilitado: e.target.value })
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
          onClick={() => eliminarUsuario(selectedRow)}
          className=" btn-danger btn-lg m-2"
        >
          Eliminar
        </Button>
      </form>
    </div>
  );
};
