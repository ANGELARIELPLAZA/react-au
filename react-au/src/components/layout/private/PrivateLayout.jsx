import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "./Header";
import useAuth from "../../../hooks/useAuth";

export const PrivateLayout = () => {
  const { auth, loading } = useAuth();
  
  if (loading) {
    return <h1>LOADING...</h1>;
  } else {
    return (
      <div className="layout">
        {/*LAYOUT */}
        <Header />
        {/*CONTENIDO PRINCIPAL*/}
        <section className="layout__content">
          {auth.rol === 'usuario' ? <Navigate to="/vendedor" /> : auth.rol === 'admin'? <Outlet /> : <Navigate to="/home" />}
        </section>
      </div>
    );
  }
};
