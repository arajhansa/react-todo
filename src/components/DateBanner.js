import React from "react";
import DatePicker from 'react-date-picker';

import {useDateContext} from "../context/DateContext";

export default function DateBanner() {
  const [date, setDate] = useDateContext();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  return (
      <div className="flex justify-around mt-4 sm:mt-8 items-center text-gray-600">
        <div className="flex justify-self-center">
          <h1 className="font-medium text-4xl sm:text-5xl mr-2">{date.getDate()}</h1>
          <div className="flex flex-col justify-end">
            <h2 className="font-semibold uppercase text-sm sm:text-base">{months[date.getMonth()]}</h2>
            <h3 className="text-xs sm:text-sm">{date.getFullYear()}</h3>
          </div>
        </div>
        <div>
          <h2 className="font-semibold uppercase text-xs sm:text-sm tracking-wide">{days[date.getDay()]}</h2>
        </div>
        <DatePicker value={date} onChange={setDate}/>
      </div>
  );
}
