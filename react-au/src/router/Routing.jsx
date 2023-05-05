import React from "react";
import { Routes, Route, BrowserRouter, Navigate, Link } from "react-router-dom";
import { PublicLayout } from "../components/layout/public/PublicLayout.jsx";
import { PrivateLayout } from "../components/layout/private/PrivateLayout.jsx";
import { UserLayout } from "../components/layout/user/UserLayout.jsx";
import { Login } from "../components/Login.jsx";
import { RegisterUsuario } from "../components/admin/R-user/RegisterUsuario.jsx";
import { RegisterRuta } from "../components/admin/R-ruta/RegisterRuta.jsx";
import { Venta } from "../components/vendedor/Venta.jsx";
import { AuthProvider } from "../context/AuthProvider.jsx";
import { Logout } from "../components/Logout.jsx";
import { RegisterBoleto } from "../components/admin/R-boleto/RegisterBoleto.jsx";
import { Error404 } from "../components/Error404.jsx";
import { Report } from "../components/admin/Report.jsx";
import { ViewUser } from "../components/admin/R-user/ViewUser.jsx";
import { ViewBoleto } from "../components/admin/R-boleto/ViewBoleto.jsx";
import ViewRuta from "../components/admin/R-ruta/ViewRuta.jsx";
import CorteCaja from "../components/vendedor/CorteCaja.jsx";
import { HomeUsuarios } from "../components/admin/HomeUsuarios.jsx";
export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/admin/*" element={<PrivateLayout />}>
            <Route index element={<HomeUsuarios />} />
            <Route path="home-usuarios" element={<HomeUsuarios />} />
            <Route path="registrar-usuario" element={<RegisterUsuario />} />
            <Route path="view-usuario" element={<ViewUser />} />
            <Route path="registrar-ruta" element={<RegisterRuta />} />
            <Route path="view-ruta" element={<ViewRuta />} />
            <Route path="registrar-boleto" element={<RegisterBoleto />} />
            <Route path="view-boleto" element={<ViewBoleto />} />
            <Route path="logout" element={<Logout />} />
            <Route path="reporte" element={<Report />} />
            <Route path="venta" element={<Venta />} />
            <Route path="venta-corte" element={<CorteCaja />} />
          </Route>
          <Route path="/vendedor/*" element={<UserLayout />}>
            <Route index element={<Venta />} />
            <Route path="venta" element={<Venta />} />
            <Route path="logout" element={<Logout />} />
            <Route path="venta-corte" element={<CorteCaja />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
