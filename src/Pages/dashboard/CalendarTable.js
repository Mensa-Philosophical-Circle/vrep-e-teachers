import React from "react";
import "../../styles/CalendarTable.css";
import Calendar from "react-calendar";

import { useState } from "react";

function CalendarTable() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <h3>School Calendar</h3>
      <Calendar onChange={setDate} value={date} />
    </div>
  );
}

export default CalendarTable;
