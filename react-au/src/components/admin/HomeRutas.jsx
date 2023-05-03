import React, { useRef } from "react";
import ReactDOMServer from "react-dom/server";
import html2pdf from "html2pdf.js";
import { GraphicRuta } from "./graphic/GraphicRuta";
import { GraphicRutaPie } from "./graphic/GraphicRutaPie";
import { GraphicRutaSeries } from "./graphic/GraphicRutaSeries";
import { GraphicRutaTime } from "./graphic/GraphicRutaTime";

export const HomeRutas = () => {
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
          <h1 className="content__title">Dashboard Rutas</h1>
        </header>
        <div className="content__container-btn">
          <button
            onClick={handleGeneratePdf}
            className="content__btn-more-post"
          >
            Generar Pdf
          </button>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="card h-100">
              <div className="card-header">VENTAS 1</div>
              <div className="card-body">
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="card h-100">
              <div className="card-header">VENTAS 2</div>
              <div className="card-body">
                <GraphicRutaSeries />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
         
          <div className="col-sm-12 col-md-9">
            <div className="card h-75">
              <div className="card-header">VENTAS 2</div>
              <div className="card-body">
                <GraphicRuta />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="card h-75">
              <div className="card-header">VENTAS 3</div>
              <div className="card-body">
                <GraphicRutaTime />
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>
    </div>
  );
};
