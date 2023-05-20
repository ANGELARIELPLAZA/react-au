import React, { useState } from "react";
import printJS from "print-js";
import { Global } from "../../helpers/Global";
import { operacionesFunc } from "../../utils/operaciones";
import QRCode2 from "qrcode-generator";
import CryptoJS from "crypto-js";
import { NavLink } from "react-router-dom";
import ViewRuta from "./ViewRuta";
const token = localStorage.getItem("token");
const caja = localStorage.getItem("caja");
const user = localStorage.getItem("user");
const parsedUser = JSON.parse(user);
let newBoletosArray = [];

// Clave secreta para la encriptación
const secretKey = "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";

// Función para encriptar una cadena de texto con una clave secreta
const encrypt = (text, secretKey) => {
  return CryptoJS.AES.encrypt(text, secretKey).toString();
};

// Función para generar el código QR utilizando la librería qrcode-generator
const generateQRCode = (data) => {
  const qr = QRCode2(0, "L");
  qr.addData(data);
  qr.make();
  return qr.createDataURL();
};

export const Venta = () => {
  const [formData, setFormData] = useState({
    code: "",
    num_boleto: "",
    opcion: "",
  });
  const [enviadoform, setEnviadoform] = useState(false);
  const [saved, setSaved] = useState("not send");
  const numVenta = Math.round(Math.random() * 9999999999999) + 9999999999999;
  const numVentaString = numVenta.toString();

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
    // Create a variable to store all tickets
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    formData.fecha = `${day}/${month}/${year}`;
    formData.hora = `${hours}:${minutes}:${seconds}`;
    formData.code = parseInt(formData.code);
    formData.num_boleto = parseInt(formData.num_boleto);
    formData.vendedor = parsedUser.name;
    formData.caja = parseInt(caja);
    let value = formData.num_boleto;

    for (let i = 0; i < value; i++) {
      let token2 = encrypt(numVentaString, secretKey);
      formData.token = token2;
      const newBoleto = operacionesFunc(formData);
      newBoletosArray.push(newBoleto);
    }
    handlePrintClick(newBoletosArray); // Pasa newBoletosArray a handlePrintClick
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      code: "",
      num_boleto: "",
      opcion: "",
    });
  };

  const handleClick = (newBoletosArray) => {
    // Create a variable to store all tickets
    let tickets = "";
    let value = formData.num_boleto;
    if (value <= 0) {
      alert("INGRESE CORRECTAMENTE LA CANTIDAD DE BOELTOS");
      setTimeout(() => {
        window.location.reload();
      });
    }
    // Create a page for each ticket
    for (let i = 0; i < value; i++) {
      // Create the content of the ticket
      const ticketContent = `
      <div style="font-family: Arial; font-size: 1.1rem; font-weight: bold; width: 50mm;">
      <h3 style="margin: 0; font-size: 3rem; line-height: 1.5;">BOLETO</h3>
      <table style="border-collapse: collapse;collapse; width: 50mm;">
        <tr style="border: 2px solid black;">
          <td style="border: 2px solid black;">Destino</td>
          <td style="border: 2px solid black;">Descuento</td>
        </tr>
        <tr style="border: 2px solid black;">
          <td style="border: 2px solid black;">${newBoletosArray[0].destino}</td>
          <td style="border: 2px solid black;">${newBoletosArray[0].opcion}</td>
        </tr>
      </table>
    </div>
    <div style="font-family: Arial; font-size: 2rem; line-height: 1.5;">
      <h4 style="line-height: 0.1;"><span>Total:</span><span>$${newBoletosArray[0].totalventa}</span></h4>
      <h4 style="line-height: 0.1;"><span>Vendedor:</span><span>${newBoletosArray[0].vendedor}</span></h4>
      <h4 style="line-height: 0.1;"><span>Caja:</span><span>${newBoletosArray[0].caja}</span></h4>
      <h4 style="line-height: 0.1;"><span></span><span>${newBoletosArray[0].fecha}${newBoletosArray[0].hora}</span></h4>
    </div>
      `;

      // Append the ticket content to the tickets variable
      tickets += ticketContent;
      const qrCode = `
      <div>
      <img src="${generateQRCode(
        newBoletosArray[i].token
      )}" width="200" height="200" />
    </div>
    <div style="page-break-after: always;"></div>
    `;

      tickets += qrCode;
    }

    // Define a function to print the tickets before each page break
    const printBeforePageBreak = (pageNumber) => {
      if (pageNumber > 1) {
        for (let i = 0; i < value; i++) {
          window.print();
          // Wait for 1 second before continuing to print the next ticket
          setTimeout(() => {}, 10);
        }
      }
    };

    // Print all tickets
    printJS({
      printable: "print",
      type: "html",
      documentTitle: "Tickets",
      header: tickets,
      onPrintDialogClose: printBeforePageBreak,
    });
  };

  const handlePrintClick = async (newBoletosArray) => {
    let value = formData.num_boleto;
    let valuecode = newBoletosArray[0].destino;
    if (
      value <= 0 ||
      typeof value === "undefined" ||
      typeof valuecode === "undefined"
    ) {
      newBoletosArray = [];
      confirm(
        "ERROR VENTA NO DADA DE ALTA, VERIFICA EL CODIGO DE RUTA O LA CANTIDAD DE BOLETOS"
      );
      return window.location.reload();
    } else {
      let cambio = confirm(
        "Esta es la ruta: " +
          newBoletosArray[0].destino +
          " Boletos:" +
          newBoletosArray[0].num_boleto +
          "Total: " +
          newBoletosArray[0].totalventa
      );
      if (cambio == true) {
        handleClick(newBoletosArray);
        for (let i = 0; i < value; i++) {
          // Remove unwanted fields from the object
          delete newBoletosArray[i].totalventamodel;
          delete newBoletosArray[i].num_boletos_model;
        }
        try {
          const request = await fetch(Global.url + "ventas/creat", {
            method: "POST",
            body: JSON.stringify(newBoletosArray),
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          });
          const data = await request.json();
          setTimeout(() => {
            window.location.reload();
          });
        } catch (error) {
          console.error(error);
        }
      } else {
        window.location.reload();
      }
    }
  };

  return (
    <div className="venta">
      <div className="row">
        <div className="col-md-6">
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="row d-flex form-group">
              <div className="form-group  text-white text-center py-3">
                <label>
                  1. Codigo de destino:
                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div className="form-group  text-white text-center py-3">
                <label>
                  2. Número de Boletos:
                  <input
                    type="text"
                    name="num_boleto"
                    value={formData.num_boleto}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
            </div>
            <div className=" text-white text-center py-3">
              <label htmlFor="descuento">3. Tipo de descuento</label>
              <div className="text-white">
                <div className="text-left  text-center">
                  <label>
                    <input
                      type="radio"
                      name="opcion"
                      value="Entero"
                      checked={formData.opcion === "Entero"}
                      onChange={handleInputChange}
                      required
                    />
                    Entero
                    <input
                      type="radio"
                      name="opcion"
                      value="Insen"
                      checked={formData.opcion === "Insen"}
                      onChange={handleInputChange}
                      required
                      style={{ marginLeft: "40px" }} // Agrega un margen a la izquierda del radio button
                    />
                    Insen
                    <input
                      type="radio"
                      name="opcion"
                      value="Estudiante"
                      checked={formData.opcion === "Estudiante"}
                      onChange={handleInputChange}
                      style={{ marginLeft: "40px" }} // Agrega un margen a la izquierda del radio button
                      required
                    />
                    Estudiante
                    <input
                      type="radio"
                      name="opcion"
                      value="Maestro"
                      checked={formData.opcion === "Maestro"}
                      onChange={handleInputChange}
                      style={{ marginLeft: "40px" }} // Agrega un margen a la izquierda del radio button
                      required
                    />
                    Maestro
                  </label>
                </div>
                <br />
              </div>
              <div className="row form-group">
                <div
                  className=" text-white text-center py-3"
                  style={{ width: "95%" }}
                >
                  <input
                    type="submit"
                    value="Hacer venta"
                    className="btn btn-success"
                    onClick={() => handlePrintClick()}
                    style={{ fontSize: "3.6rem" }}
                  />
                  <button
                    className="btn btn-warning"
                    style={{ fontSize: "3.6rem" }}
                    onClick={() => window.location.reload()}
                  >
                    Limpiar Venta
                  </button>
                  <NavLink to="/vendedor/venta-corte">
                    <button
                      className="btn btn-info"
                      style={{ fontSize: "3.6rem" }}
                    >
                      Corte de caja
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </form>
          <div id="print"></div>
        </div>
        <div className="col-md-6">
          <ViewRuta />
        </div>
      </div>
    </div>
  );
};
