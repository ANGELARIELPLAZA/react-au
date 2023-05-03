"use strict";

const validarVenta = (venta) => {
  const {
    destino_code,
    num_boletos,
    descuento,
    token,
    vendedor,
    nombre_ruta,
    total,
  } = venta;

  if (!destino_code || typeof destino_code !== "string") {
    throw new Error(
      "El código de venta es obligatorio y debe ser una cadena de caracteres"
    );
  }
  if (!num_boletos || typeof num_boletos !== "string") {
    throw new Error(
      "El nombre del boleto es obligatorio y debe ser una cadena de caracteres"
    );
  }
  if (!descuento || typeof descuento !== "number") {
    throw new Error(
      "El nombre del boleto es obligatorio y debe ser una cadena de caracteres"
    );
  }
  if (!token || typeof token !== "string") {
    throw new Error("El descuento es obligatorio y debe ser un número");
  }
  if (!vendedor || typeof vendedor !== "string") {
    throw new Error("El descuento es obligatorio y debe ser un número");
  }
   if (!nombre_ruta || typeof nombre_ruta !== "string") {
    throw new Error("El descuento es obligatorio y debe ser un número");
  }
  if (!total || typeof total !== "number") {
    throw new Error("El descuento es obligatorio y debe ser un número");
  }

};

module.exports = {
  validarVenta,
};
