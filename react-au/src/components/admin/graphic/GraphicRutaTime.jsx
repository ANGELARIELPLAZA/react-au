import { FaCalendarAlt, FaMoneyBillAlt, FaRoute } from "react-icons/fa";

export const GraphicRutaTime = () => {
  return (
    <div className="graphic-venta-time">
      <div className="stats-container row">
        <div className="stat col-12">
          <div className="stat-icon">
            <FaMoneyBillAlt />
          </div>
          <div className="stat-info">
            <div className="stat-value">345</div>
            <div className="stat-label">Boletos vendidos totales del mes</div>
          </div>
        </div>
        <div className="stat col-12">
          <div className="stat-icon">
            <FaMoneyBillAlt />
          </div>
          <div className="stat-info">
            <div className="stat-value">234</div>
            <div className="stat-label">Boletos vendidos totales del día</div>
          </div>
        </div>
        <div className="stat col-12">
          <div className="stat-icon">
            <FaRoute />
          </div>
          <div className="stat-info">
            <div className="stat-value">Ruta A</div>
            <div className="stat-label">Ruta con mayor boletos vendidos</div>
          </div>
        </div>
      </div>
    </div>
  );
};
