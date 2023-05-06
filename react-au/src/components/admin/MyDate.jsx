import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { addDays } from "date-fns";
import "react-day-picker/dist/style.css";

export const MyDate = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDayClick = (day) => {
    const newDate = addDays(day, 7); // Suma 7 días a la fecha seleccionada
    setSelectedDate(newDate);
  };
      // <h2>Fecha seleccionada: {selectedDate.toLocaleDateString()}</h2>

  return (
    <div>
      <DayPicker
        mode="single"
        defaultMonth={new Date(2023, 0)}
        fromYear={2023}
        toYear={2030}
        onDayClick={handleDayClick}
        className="day-picker-container" // Agrega la clase personalizada
      />
    </div>
  );
};