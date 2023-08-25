import React from 'react'
import { useState } from "react";
import { CalenderContext } from '../context/CalenderContext';
import { useContext } from 'react';

const TimeZone = () => {

const { utcTime, setUtcTime } = useContext(CalenderContext);
    
    const [selectedTimezone, setSelectedTimezone] = useState("UTC-0");
    const handleTimezoneChange = (e) => {
        setSelectedTimezone(e.target.value);
        if(e.target.value === "UTC-0"){
          setUtcTime(0)
        }else{
          setUtcTime(5)
        }
      };
  return (
    <div className="bg-white rounded-xl shadow-md border m-5 ">
        <label for="options" className="m-2">
          Time Zone:{" "}
        </label>{" "}
        <br />
        <select
          value={selectedTimezone}
          onChange={handleTimezoneChange}
          id="options"
          className="relative w-full border p-2  "
        >
          <option className='rounded-2xl' value="UTC-0">[UTC-0] Eastern Greenland Summer Time</option>
          <option className='rounded-2xl' value="UTC-5">[UTC-5] Eastern standard time</option>
        </select>
      </div>
  )
}

export default TimeZone