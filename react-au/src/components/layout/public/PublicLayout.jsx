import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "./Header";
import useAuth from "../../../hooks/useAuth";

export const PublicLayout = () => {
  const { auth, loading } = useAuth();
  if (loading) {
    return <h1>LOADING...</h1>;
  } else {
    return (
      <>
        {/*LAYOUT */}
        <Header />
        {/*CONTENIDO PRINCIPAL*/}
        <section>
          <div>
            <div>
              {!auth._id ? <Outlet /> : <Navigate to="/admin" />}
            </div>
          </div>
        </section>
      </>
    );
  }
};
