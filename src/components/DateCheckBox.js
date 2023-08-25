import React, { useContext } from 'react';
import { CalenderContext } from '../context/CalenderContext';

const DateCheckBox = () => {
  const { utcTime } = useContext(CalenderContext);

  // Determine the starting hour based on utcTime
  const startingHour = utcTime === 0 ? 8 : 13; // 8 AM or 1 PM

  return (
    <div className="flex flex-wrap border p-2 rounded-lg">
      {Array.from({ length: 31.5 }, (_, i) => startingHour + i / 2).map((hour) => {
        let isAM = hour < 12;
        let formattedHour = isAM ? Math.floor(hour) : Math.floor(hour) - 12;

        // Special case: Transition from 11:30 PM to 12:00 AM
        if (formattedHour === 0 && !isAM && hour % 1 === 0.5) {
          formattedHour = 12;
          isAM = true;
        }

        const formattedTime = `${formattedHour}:${hour % 1 === 0.5 ? '30' : '00'} ${isAM ? 'AM' : 'PM'}`;
        return (
          <div key={formattedTime} className="flex items-center mb-2 mr-4">
            <input
              type="checkbox"
              id={formattedTime}
              className="mr-2 border rounded-xl w-4 h-4 leading-tight border-blue-500 focus:outline-none focus:border-blue-800"
            />
            <label htmlFor={formattedTime} className="text-sm">
              {formattedTime}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default DateCheckBox;
