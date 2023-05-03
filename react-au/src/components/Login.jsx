import React from "react";
import { useForm } from "../hooks/useForm";
import { Global } from "../helpers/Global";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

export const Login = () => {
  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("not_sended");
  const { setAuth } = useAuth();
  let loginUser = async (e) => {
    e.preventDefault();
    let userToLogin = form;
    const request = await fetch(Global.url + "usuarios/login", {
      method: "POST",
      body: JSON.stringify(userToLogin),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    if (data.status == "success") {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("caja", data.user.caja);
      setSaved("login");
      setAuth(data.user);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      localStorage.clear();
      setSaved("error");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card px-5 py-5">
              <div>
                <strong
                  className={
                    saved === "login" ? "alert alert-success" : "d-none"
                  }
                >
                  Inicio correctamente!!
                </strong>
                <strong
                  className={
                    saved === "error" ? "alert alert-danger" : "d-none"
                  }
                >
                  Error al iniciar sesion!!
                </strong>
                <br />
              </div>
              <form className="form-data" onSubmit={loginUser}>
                <div className="forms-inputs mb-4">
                  <h3>Email or username</h3>
                  <input type="text" name="email" onChange={changed} required />
                  <div className="invalid-feedback">
                    A valid email is required!
                  </div>
                </div>

                <div className="forms-inputs mb-4">
                  <h3>Password</h3>
                  <input
                    type="password"
                    name="password"
                    onChange={changed}
                    required
                  />
                </div>
                <div className="mb-3">
                  <button className="btn btn-success w-100">
                    <h3>Login</h3>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
