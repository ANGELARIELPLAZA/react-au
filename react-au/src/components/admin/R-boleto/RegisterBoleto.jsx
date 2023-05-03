import React from "react";
import Button from "react-bootstrap/Button";
import { useForm } from "../../../hooks/useForm";
import { Global } from "../../../helpers/Global";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const RegisterBoleto = () => {
  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("not send");
  const token = localStorage.getItem("token");

  const saveBoleto = async (e) => {
    e.preventDefault();
    let newBoleto = form;
    const request = await fetch(Global.url + "descuentos/creat", {
      method: "POST",
      body: JSON.stringify(newBoleto),
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
        <h1 className="content__title">Registrar boleto</h1>
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
                  boleto registrado correctamente!!
                </strong>
                <strong
                  className={
                    saved === "error" ? "alert alert-danger" : "d-none"
                  }
                >
                  boleto no se ha registrado!!
                </strong>
                <strong
                  className={
                    saved === "ya_existe" ? "alert alert-warning" : "d-none"
                  }
                >
                  boleto ya existe!!
                </strong>

                <br />
              </div>
              <form className="form-data" onSubmit={saveBoleto}>
                <div className="form-group">
                  <h2 htmlFor="code">Codigo de boleto</h2>
                  <input type="text" name="code" onChange={changed} required />
                </div>

                <div className="form-group">
                  <h2 htmlFor="nombre_boleto">Nombre de boleto</h2>
                  <input
                    type="text"
                    name="nombre_boleto"
                    onChange={changed}
                    required
                  />
                </div>

                <div className="form-group">
                  <h2 htmlFor="descuento">Descuento</h2>
                  <input
                    type="text"
                    name="descuento"
                    onChange={changed}
                    required
                  />
                </div>

                <div className="mb-3">
                  <button className="btn btn-success w-100" type="submit">
                    <h3>Registrar Boleto</h3>
                  </button>
                  <br />
                  <br />
                  <NavLink to="/admin/view-boleto">
                    <button className="btn btn-warning w-100">
                      <h3>Actualizar Boletos</h3>
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
