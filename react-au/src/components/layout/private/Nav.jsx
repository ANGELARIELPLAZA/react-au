import React, { useState, useEffect } from "react";
import avatar from "../../../assets/img/user.png";
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
  const handleShowRoutes = () => {
    setShowRoutes(!showRoutes);
  };
  return (
    <nav className="navbar__container-lists">
      <ul className="container-lists__menu-list">
          <li
          className={`menu-list__item dropdown ${showRoutes ? "active" : ""}`}
        >
          <a href="#" className="menu-list__link" onClick={handleShowRoutes}>
            <i className="fa-solid fa-house" />
            <span className="menu-list__title">Home</span>
            <i className="fa-solid fa-chevron-down"></i>
          </a>

          {showRoutes && (
            <ul className="container-lists__routes-list">
              <li>
                <NavLink to="/admin/">
                  <h3>Ventas dashboard</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/home-ruta">
                  <h3>Rutas dashboard</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/">
                  <h3>Boletos dashboard</h3>
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li
          className={`menu-list__item dropdown ${showRoutes ? "active" : ""}`}
        >
          <a href="#" className="menu-list__link" onClick={handleShowRoutes}>
            <i className="fa-solid fa-list"></i>
            <span className="menu-list__title">Registrar</span>
            <i className="fa-solid fa-chevron-down"></i>
          </a>

          {showRoutes && (
            <ul className="container-lists__routes-list">
              <li>
                <NavLink to="/admin/registrar-usuario">
                  <h3>Usuarios</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/registrar-ruta">
                  <h3>Rutas</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/registrar-boleto">
                  <h3>Boletos</h3>
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li className="menu-list__item">
          <NavLink to="/admin/reporte" className="list-end__link">
              <i className="fa-solid fa-gear"></i>
              <span className="list-end__name">Reporte</span>
          </NavLink>
        </li>
        <li className="menu-list__item">
          <NavLink to="/vendedor/" className="list-end__link">
              <i className="fa-solid fa-gear"></i>
              <span className="list-end__name">CAJA</span>
          </NavLink>
        </li>
        <li className="menu-list__item time">
          <i>
            <h1>{time.toLocaleTimeString()}</h1>
          </i>
        </li>
      </ul>
      <div></div>
      <ul className="container-lists__list-end">
      <li className="list-end__item">
          <h1>Vendedor: {parsedUser.name}</h1>
        </li>

        <li className="list-end__item">
          <NavLink to="logout" className="list-end__link">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span className="list-end__name">Cerrar session</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
