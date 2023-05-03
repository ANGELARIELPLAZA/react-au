import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import { GraphicVenta } from "./graphic/GraphicVenta";
import { GraphicVentaSeries } from "./graphic/GraphicVentaSeries";
import { GraphicVentaTime } from "./graphic/GraphicVentaTime";

export const Home = () => {
  const sectionRef = useRef(null);
  const handleGeneratePdf = () => {
    const section = sectionRef.current;
    const options = {
      margin: 0.1,
      filename: "mi-pdf.pdf",
      image: { type: "png", quality: 1 },
      html2canvas: { dpi: 192, letterRendering: true },
      jsPDF: { unit: "cm", format: "letter", orientation: "landscape" },
    };
    const pdf = html2pdf().from(section).set(options);

    // Get all the cards with their contents
    const cards = document.querySelectorAll(".card");

    // Add a new page for each card
    cards.forEach((card) => {
      const cardBody = card.querySelector(".card-body");
      const images = cardBody.querySelectorAll("img");
      images.forEach((image) => {
        pdf.from(image);
        pdf.addPage();
      });
    });

    // Save the PDF
    pdf.save();
  };

  return (
    <div ref={sectionRef}>
      <section className="layout__content">
        <header className="content__header">
          <h1 className="content__title">Dashboard Ventas</h1>
          <div>
            <button
              onClick={handleGeneratePdf}
              className="content__btn-more-post"
            >
              Generar Pdf
            </button>
          </div>
        </header>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="card h-100">
              <div className="card-header">
                <h1>Ingresos Por rutas</h1>
              </div>
              <div className="card-body">
                <GraphicVentaSeries />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="card h-100">
              <div className="card-header">
                <h1>Ingresos</h1>
              </div>
              <div className="card-body">
                <GraphicVentaTime />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="card">
          <div className="card-header">
            <h1>Ingresos por ruta</h1>
          </div>
          <div className="card-body">
            <GraphicVenta />
          </div>
        </div>
      </section>
    </div>
  );
};
