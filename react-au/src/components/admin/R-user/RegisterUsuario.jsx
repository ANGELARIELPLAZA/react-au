import React from "react";
import { useForm } from "../../../hooks/useForm";
import { Global } from "../../../helpers/Global";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import CryptoJS from "crypto-js";
import Form from "react-bootstrap/Form";

export const RegisterUsuario = () => {
  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("not send");
  const token = localStorage.getItem("token");

  const saveUser = async (e) => {
    e.preventDefault();
    let newUser = form;
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(newUser),
      "secret-key"
    ).toString();

    const request = await fetch(Global.url + "usuarios/creat", {
      method: "POST",
      body: JSON.stringify({ data: encryptedData }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await request.json();
    if (data.status == "success") {
      setSaved("saved");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else if (data.status == "error") {
      setSaved("error");
    } else {
      setSaved("ya_existe");
    }
  };

  return (
    <>
      <header className="content__header">
        <h1 className="content__title">Registrar usuario</h1>
      </header>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card px-5 py-5">
              <div>
                <strong
                  className={
                    saved === "saved" ? "alert alert-success" : "d-none"
                  }
                >
                  Usuario registrado correctamente!!
                </strong>
                <strong
                  className={
                    saved === "error" ? "alert alert-danger" : "d-none"
                  }
                >
                  Usuario no se ha registrado, verificar los datos!!
                </strong>
                <strong
                  className={
                    saved === "ya_existe" ? "alert alert-warning" : "d-none"
                  }
                >
                  Usuario ya existe!!
                </strong>
                <br />
              </div>
              <form className="form-data" onSubmit={saveUser}>
                <div className="form-group">
                  <h2 htmlFor="name">Nombre</h2>
                  <input type="text" name="name" onChange={changed} required />
                </div>
                <div className="form-group">
                  <h2 htmlFor="email">Correo electronico</h2>
                  <input
                    type="email"
                    name="email"
                    onChange={changed}
                    required
                  />
                </div>
                <div className="form-group">
                  <h3 htmlFor="caja">Caja</h3>
                  <Form.Select
                    aria-label="Default select example"
                    className="form-control"
                    id="caja"
                    name="caja"
                    onChange={changed}
                    required
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </Form.Select>
                </div>
                <div className="form-group">
                  <h2 htmlFor="password">Contrasena</h2>
                  <input
                    type="password"
                    name="password"
                    onChange={changed}
                    required
                  />
                </div>
                <div className="mb-3">
                  <button className="btn btn-success w-100" type="submit">
                    <h3>Registrar</h3>
                  </button>
                  <br />
                  <br />
                  <NavLink to="/admin/view-usuario">
                    <button className="btn btn-warning w-100">
                      <h3>Actualizar usuario</h3>
                    </button>
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
