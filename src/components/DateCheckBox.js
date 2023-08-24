import React from 'react';

const DateCheckBox = () => {
  return (
    <div className="flex flex-wrap   border p-2 rounded-lg">
      {Array.from({ length: 28 }, (_, i) => 8 + i / 2).map((hour) => {
        const isAM = hour < 12;
        const formattedHour = isAM ? Math.floor(hour) : Math.floor(hour) - 12;
        const formattedTime = `${formattedHour === 0 ? 12 : formattedHour}:${hour % 1 === 0.5 ? '30' : '00'} ${isAM ? 'AM' : 'PM'}`;
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
