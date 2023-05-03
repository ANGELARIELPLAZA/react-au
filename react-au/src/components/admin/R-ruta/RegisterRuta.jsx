import useAuth from "../../../hooks/useAuth";
import React from "react";
import Button from "react-bootstrap/Button";
import { useForm } from "../../../hooks/useForm";
import { Global } from "../../../helpers/Global";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const RegisterRuta = () => {
  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("not_send");
  const { auth } = useAuth();
  const token = localStorage.getItem("token");

  const saveRuta = async (e) => {
    e.preventDefault();
    let newRuta = form;
    newRuta.name = auth.name;
    const request = await fetch(Global.url + "rutas/creat", {
      method: "POST",
      body: JSON.stringify(newRuta),
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
        <h1 className="content__title">Registrar ruta</h1>
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
                  Ruta registrado correctamente!!
                </strong>
                <strong
                  className={
                    saved === "error" ? "alert alert-danger" : "d-none"
                  }
                >
                  Ruta no se ha registrado!!
                </strong>
                <strong
                  className={
                    saved === "ya_existe" ? "alert alert-danger" : "d-none"
                  }
                >
                  Ruta ya existe!!
                </strong>
                <br />
              </div>
              <form className="form-data" onSubmit={saveRuta}>
                <div className="form-group">
                  <h2 htmlFor="code">Codigo de ruta</h2>
                  <input type="text" name="code" onChange={changed} required />
                </div>

                <div className="form-group">
                  <h2 htmlFor="destino">Destino</h2>
                  <input
                    type="text"
                    name="destino"
                    onChange={changed}
                    required
                  />
                </div>

                <div className="form-group">
                  <h2 htmlFor="precio">Precio</h2>
                  <input
                    type="text"
                    name="precio"
                    onChange={changed}
                    required
                  />
                </div>

                <div className="mb-3">
                  <button className="btn btn-success w-100" type="submit">
                    <h3>Registrar ruta</h3>
                  </button>
                  <br />
                  <br />
                  <NavLink to="/admin/view-ruta">
                    <button className="btn btn-warning w-100">
                      <h3>Actualizar Rutas</h3>
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
