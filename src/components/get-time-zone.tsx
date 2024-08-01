'use client'
import React, { useState, useEffect } from 'react';
import { FaRegClock } from "react-icons/fa6";

export function GetTimeZone() {
  const [formattedDateTime, setFormattedDateTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const dateTime = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour12: true,
        // timeZoneName: 'short',
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit',
        timeZone: 'America/Manaus'
      };
    
      const formattedDateTimeString = new Intl.DateTimeFormat('pt-BR', options).format(dateTime);
      setFormattedDateTime(formattedDateTimeString);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  return (
      <span className='flex px-3 py-1 rounded-full bg-zinc-900 items-center gap-2 font-normal text-zinc-300 dark:text-zinc-500 text-[12px] max-sm:text-[11px]'>
      <FaRegClock size={16} className='text-zinc-500' />
        {formattedDateTime}
      </span>
  );
}