import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const UserLayout = () => {
  return (
    <>
      {/*LAYOUT */}
      <Header />
      {/*CONTENIDO PRINCIPAL*/}
      <section className="layout__content ">
        <Outlet />
      </section>
    </>
  );
};
