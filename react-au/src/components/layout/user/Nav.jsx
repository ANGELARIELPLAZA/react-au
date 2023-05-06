import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const { auth } = useAuth();
  const [time, setTime] = useState(new Date());
  const [showRoutes, setShowRoutes] = useState(false);
  const parsedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <nav className="navbar__container-lists">
      <ul className="container-lists__menu-list">
        <li className="menu-list__item">
          <NavLink to="venta" className="menu-list__link list-end__link">
            <i className="fa-solid fa-house"></i>
            <span className="menu-list__title">Vender</span>
          </NavLink>
        </li>

        <li className="menu-list__item">
          <NavLink to="venta-corte" className=" menu-list__link list-end__link">
            <i className="fa-solid fa-list"></i>
            <span className="menu-list__title">Corte de caja</span>
          </NavLink>
        </li>
        
        <li className="menu-list__item time_user">
          <i>
            <h1>{time.toLocaleTimeString()}</h1>
          </i>
        </li>
      </ul>

      <ul className="container-lists__list-end">
        <li className="list-end__item">
          <h1>Vendedor: {parsedUser.name}</h1>
        </li>
        <li className="list-end__item">
          <NavLink to="logout" className="menu-list__link list-end__link">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span className="list-end__name">Cerrar session</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
