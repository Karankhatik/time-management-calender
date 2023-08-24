import React from 'react';

const WeekCard = ({ day, currDate }) => {
  const formattedDate = new Date(currDate);

  return (
    <div className='mt-1 bg-[#320b73] text-white border w-[150px] p-5 text-center rounded-lg shadow-2xl'>
      {day} <br />
      {`${formattedDate.toLocaleString('default', { month: 'short' })} ${formattedDate.getDate()}`}
    </div>
  );
};

export default WeekCard;