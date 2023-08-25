import React, { createContext, useState } from "react";

export const CalenderContext = createContext();

const CalenderProvider = ({ children }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [utcTime, setUtcTime] = useState(0);

  const moveWeek = (weeks) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + weeks * 7);
    setCurrentDate(newDate);
  };

  return (
    <CalenderContext.Provider
      value={{ moveWeek, currentDate, setCurrentDate, utcTime, setUtcTime }}
    >
      {children}
    </CalenderContext.Provider>
  );
};

export default CalenderProvider;
