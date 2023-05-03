export const operacionesFunc = (newBoleto, data) => {
  // realizar algunas operaciones con la variable
  let variable = data;
  let code = parseInt(newBoleto.destino_code);
  let precioRuta = 0; // definimos precioRuta con un valor por defecto
  if (code) {
    for (let i = 0; i < variable.length; i++) {
      let variableCode = variable[i].code;
      let destinoCode = newBoleto.destino_code.trim();
      if (Number(variableCode) === Number(destinoCode)) {
        precioRuta = variable[i].precio; // si se cumple la condición, asignamos el valor correspondiente
        newBoleto.nombre_ruta = variable[i].destino;

        break; // y salimos del bucle for
      }
    }
  }
  let total = precioRuta;
  if (newBoleto.descuento === 1) {
    let total_de_venta = total;
    let total_de_venta_model = total;
    total_de_venta_model =
      Math.ceil(total_de_venta_model) * newBoleto.num_boletos;
    newBoleto.totalventa = Math.ceil(total_de_venta);
    newBoleto.totalventamodel = Math.ceil(total_de_venta_model);
    newBoleto.num_boletos_model = newBoleto.num_boletos;
    newBoleto.total = total;
  } else {
    let total_de_venta = total - total * (newBoleto.descuento / 100);
    let total_de_venta_model = total - total * (newBoleto.descuento / 100);
    total_de_venta_model =
      Math.ceil(total_de_venta_model) * newBoleto.num_boletos;
    newBoleto.totalventa = Math.ceil(total_de_venta);
    newBoleto.totalventamodel = Math.ceil(total_de_venta_model);
    newBoleto.num_boletos_model = newBoleto.num_boletos;
    newBoleto.total = total;
  }

  // devolver la variable modificada
  return { ...newBoleto, total }; // devolvemos un nuevo objeto con la propiedad "total" actualizada
};
