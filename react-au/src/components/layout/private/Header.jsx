import React from "react";
import { Nav } from "./Nav";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="layout__navbar">
      <div className="navbar__header">
        <NavLink to="/admin/" className="navbar__title">
          <p className="navbar__title">itsmo</p>{" "}
        </NavLink>
      </div>
      <Nav></Nav>
    </header>
  );
};
