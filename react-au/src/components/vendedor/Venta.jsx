import React, { useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import Modal from "react-bootstrap/Modal";
import ViewRuta from "./ViewRuta";
import printJS from "print-js";
import { Global } from "../../helpers/Global";
import { operacionesFunc } from "../../utils/operaciones";
import QRCode from "qrcode.react";
import CryptoJS from "crypto-js";
let boletosArray = []; // declarar el array vacío
import { NavLink } from "react-router-dom";

export const Venta = () => {
  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("not send");
  const [showModal, setShowModal] = useState(false);
  const [contrasenaCorrecta, setContrasenaCorrecta] = useState(false);
  const [password, setPassword] = useState("");
  const [opciones, setOpciones] = useState([]);
  const [ticket, setTicket] = useState(null);
  const [dateTime, setDateTime] = useState("");
  const [contador, setContador] = useState(1);
  const [enviado, setEnviado] = useState(false);

  function suma() {
    setContador(contador + 1);
    document.getElementById("num_boletos").value = contador;
    form.num_boletos = contador;
  }

  function resta() {
    if (contador > 0) {
      setContador(contador - 1);
      document.getElementById("num_boletos").value = contador;
      form.num_boletos = contador;
    }
  }

  function handleChanged() {
    setContador(parseInt(document.getElementById("num_boletos").value));
  }

  const token = localStorage.getItem("token");
  const caja = localStorage.getItem("caja");
  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);
  let newBoleto = form;
  let rutas = [];
  let folio = [];
  const numVenta = Math.round(Math.random() * 9999999999999) + 9999999999999;
  const numVentaJson = JSON.stringify(numVenta);
  let ventaEncriptada;
  // Clave secreta para la encriptación
  const secretKey = "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";
  // Función para encriptar una cadena de texto con una clave secreta
  const encrypt = (text, secretKey) => {
    return CryptoJS.AES.encrypt(text, secretKey).toString();
  };

  const saveBoleto = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(Global.url + "rutas/list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      const data = await response.json();

      newBoleto = form;
      if (
        typeof newBoleto.descuento === "string" &&
        newBoleto.descuento.includes(",")
      ) {
        let [descuento, nombre_boleto] = newBoleto.descuento.split(",");
        newBoleto.descuento = parseInt(descuento);
        form.nombre_boleto = nombre_boleto;
      }

      // Encripta la venta generada
      newBoleto.vendedor = parsedUser.name;
      let newBoleto2 = [];
      let value = parseInt(newBoleto.num_boletos);
      for (let i = 0; i < value; i++) {
        let token2 = encrypt(numVentaJson, secretKey);
        newBoleto2.destino_code = newBoleto.destino_code;
        newBoleto2.num_boletos = newBoleto.num_boletos;
        newBoleto2.descuento = newBoleto.descuento;
        newBoleto2.token = token2;
        newBoleto2.vendedor = newBoleto.vendedor;
        // operaciones.js
        newBoleto = operacionesFunc(newBoleto2, data);
        boletosArray.push(newBoleto); // agregar el objeto actual al array
      }
      form.nombre_ruta = newBoleto.nombre_ruta;
      form.totalventamodel = newBoleto.totalventamodel;
      form.total = newBoleto.totalventa;

      // Validación de los campos
      if (newBoleto.destino_code > 0 && newBoleto.num_boletos > 0) {
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error al obtener los descuentos:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Global.url + "descuentos/list", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        const data = await response.json();
        rutas = data;
        setOpciones(data);
      } catch (error) {
        console.error("Error al obtener los descuentos:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
      setDateTime(formattedDateTime);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleClick = () => {
    // Create a variable to store all tickets
    let tickets = "";

    // Create a page for each ticket
    for (let i = 0; i < form.num_boletos; i++) {
      // Create the content of the ticket
      const ticketContent = `
      <div style="font-family: Arial; font-weight: bold; width: 50mm;">
      <h3 style="margin: 0; font-size: 3rem; line-height: 1.5;">VENTA</h3>
      <table style="border-collapse: collapse;collapse; width: 50mm;">
        <tr style="border: 2px solid black;">
          <td style="border: 2px solid black;">Destino</td>
          <td style="border: 2px solid black;">Descuento</td>
        </tr>
        <tr style="border: 2px solid black;">
          <td style="border: 2px solid black;">${newBoleto.nombre_ruta}</td>
          <td style="border: 2px solid black;">${form.nombre_boleto}</td>
        </tr>
      </table>
    </div>
    <div style="font-family: Arial; font-size: 1.2rem; line-height: 1.5;">
      <h4 style="line-height: 0.1;"><span>Total:</span><span>$${form.total}</span></h4>
      <h4 style="line-height: 0.1;"><span>Vendedor:</span><span>${form.vendedor}</span></h4>
      <h4 style="line-height: 0.1;"><span>Caja:</span><span>${caja}</span></h4>
      <h4 style="line-height: 1;"><span>${dateTime}</span></h4>
    </div>
    
      `;

      // Append the ticket content to the tickets variable
      tickets += ticketContent;

      // Add the QR code to the ticket content
      const qrCode = `
        <div>
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${boletosArray[i].token}" />
        </div>        <div style="page-break-after: always;"></div>  

      `;

      tickets += qrCode;
    }

    // Define a function to print the tickets before each page break
    const printBeforePageBreak = (pageNumber) => {

      if (pageNumber > 1) {
        for (let i = 0; i < form.num_boletos; i++) {
          window.print();
          // Wait for 1 second before continuing to print the next ticket
          setTimeout(() => {}, 10);
        }
      }
      setTimeout(() => {
        window.location.reload();
      }, 1000);
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
  const handlePrintClick = async () => {
    setEnviado(true);
    handleClick();

    let value = boletosArray.length;

    for (let i = 0; i < value; i++) {
      // Remove unwanted fields from the object
      delete boletosArray[i].totalventamodel;
      delete boletosArray[i].num_boletos_model;
      boletosArray[i].caja = caja;

      // Realizar petición de creación de venta
      try {
        const request = await fetch(Global.url + "ventas/creat", {
          method: "POST",
          body: JSON.stringify(boletosArray[i]),
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        const data = await request.json();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="venta">
      <div className="row">
        <div className="col-md-6">
          <ViewRuta />
        </div>
        <div className="col-md-6">
          <form className="register-form" onSubmit={saveBoleto}>
            <div className="row d-flex form-group">
              <div className="form-group  text-white text-center py-3">
                <label htmlFor="destino_code">1. Destino</label>
                <input
                  type="number"
                  className="form-control"
                  name="destino_code" // add the name attribute
                  placeholder="Ingrese el destino"
                  style={{ fontSize: "2rem" }}
                  onChange={changed}
                  required
                />
              </div>
              <div className="form-group  text-white text-center py-3">
                <label htmlFor="num_boletos">2. Numero de boletos</label>
                <input
                  type="number"
                  className="form-control"
                  name="num_boletos"
                  id="num_boletos"
                  placeholder="Ingrese el número de boletos"
                  style={{ fontSize: "2rem" }}
                  onChange={changed}
                  required
                />
                <div className="col-md-12">
                  <button
                    onClick={suma}
                    style={{ marginRight: "0px", width: "49%" }}
                  >
                    +
                  </button>
                  <button
                    onClick={resta}
                    style={{ marginLeft: "14px", width: "48%" }}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
            <div className=" text-white text-center py-3">
              <label htmlFor="descuento">3. Tipo de descuento</label>

              <div className="text-white">
                <div className="text-left">
                  {opciones.map((opcion) => (
                    <div key={opcion.code}>
                      <h1>
                        <input
                          type="radio"
                          name="descuento"
                          value={`${opcion.descuento},${opcion.nombre_boleto}`}
                          onChange={changed}
                          required
                        />
                        {opcion.nombre_boleto}
                        {opcion.descuento !== 1
                          ? ` - %${opcion.descuento}`
                          : ""}
                      </h1>
                    </div>
                  ))}
                </div>
                <br />
              </div>
            </div>
            <div className="row form-group">
              <div className=" text-white text-center py-3">
                <input
                  type="submit"
                  value="Hacer venta"
                  className="btn btn-success"
                  style={{ fontSize: "3.6rem" }}
                />
              </div>
              <div className=" text-white text-center py-3">
                <button
                  className="btn btn-warning"
                  style={{ fontSize: "3.6rem" }}
                  onClick={() => window.location.reload()}
                >
                  Limpiar Venta
                </button>
              </div>
            </div>
          </form>
          <div className="col-sm-12 text-white text-center py-3">
            <NavLink to="/vendedor/venta-corte">
              <button className="btn btn-info" style={{ fontSize: "3.6rem" }}>
                Corte de caja
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <Modal show={showModal} className="modal-lg display-6">
        <Modal.Header closeButton>
          <Modal.Title>Detalles de la venta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {saved && (
            <div
              style={{
                display: "grid",
                gridTemplateRows: "repeat(3, 50px)",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <p>
                Destino:{" "}
                <span className="badge text-bg-secondary display-6">
                  <strong></strong>
                  {newBoleto.nombre_ruta}
                </span>
              </p>
              <p>
                Número de boletos:{" "}
                <span className="badge text-bg-secondary">
                  {form.num_boletos}
                </span>
              </p>
              <p>
                Fecha: <span className="badge text-black ">{dateTime}</span>
              </p>
              <p>
                Total:{" "}
                <span className="badge text-bg-danger">
                  ${newBoleto.totalventamodel}
                </span>
              </p>
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gridColumn: "1/3",
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {boletosArray.map((boleto, index) => {
                    return (
                      <div key={index}>
                        <QRCode
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            margin: "8px",
                          }}
                          value={boleto.token}
                        />
                      </div>
                    );
                  })}
                </div>
                <div id="print"></div>
              </div>

              <p style={{ gridColumn: "1/3" }}>
                *Descuento al boleto de manera individual: %{form.descuento}
              </p>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <button variant="secondary" onClick={() => window.location.reload()}>
            Limpiar Venta
          </button>
          <button
            id="imprimirBtn"
            variant="secondary"
            disabled={enviado}
            onClick={() => handlePrintClick(password)}
          >
            Imprimir
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
