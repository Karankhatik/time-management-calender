import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import TimeZone from "../components/TimeZone";
import  CalenderContext  from "../context/CalenderContext";
import { useContext } from "react";

const Header = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
   const temp = useContext(CalenderContext);
   console.log(temp);
   const moveWeek = (weeks) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + weeks * 7);
    setCurrentDate(newDate);
  };

  

  return (
    <>
      <div className="flex justify-between px-6 md:px-8 py-2 shadow-xl rounded-t-2xl bg-[#320b73] text-white">
        <div>
          <button
            onClick={() => moveWeek(-1)}
            className="text-xs font-medium shadow-md px-2 py-2 mr-2 outline-none rounded bg-[#4c730b] hover:bg-[#375907] transition-all duration-200 ease-in-out text-white"
          >
            Previous Week
          </button>
        </div>
        <div>
          <p className="text-[15px] font-medium  shadow-3xl bg-[#4c730b] p-1 rounded-lg">
            {currentDate.toLocaleString("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })}
          </p>
        </div>
        <div>
          <button
            onClick={() => moveWeek(1)}
            className="text-xs font-medium shadow-md px-2 py-2 outline-none rounded bg-[#4c730b] hover:bg-[#375907] transition-all duration-200 ease-in-out text-white"
          >
            Next Week
          </button>
        </div>
      </div>

      <TimeZone/>

      
    </>
  );
};

export default Header;