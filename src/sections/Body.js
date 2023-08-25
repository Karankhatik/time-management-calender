import React from 'react'
import DateCheckBox from '../components/DateCheckBox';
import WeekCard from '../components/WeekCard';
import { CalenderContext } from '../context/CalenderContext';
import { useContext } from 'react';

const Body = () => {
    const { currentDate } = useContext(CalenderContext);
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    return (
        <div className="m-5 shadow-2xl p-5 rounded-lg">
        {daysOfWeek.map((day, index) => (
          <div key={day} className="flex gap-4">
            <WeekCard  day={day} currDate={new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + index)} />
            <DateCheckBox />
          </div>
        ))}
      </div>

   
  )
}

export default Body