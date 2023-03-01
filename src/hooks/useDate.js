import React, { useState } from "react";

export default function useDateSelector(initialDate) {
  const [date, setDate] = useState(initialDate);

  // create options for day
  const dayOptions = [];
  for (let i = 1; i < 32; i++) {
    const dayNumber = i;
    dayOptions.push(
      <option key={i} value={("0" + dayNumber).slice(-2)}>
        {i}
      </option>
    );
  }

  // create options for month
  const monthOptions = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ].map((option, i) => (
    <option key={i} value={("0" + (i + 1)).slice(-2)}>
      {option}
    </option>
  ));

  // create options for year
  const yearOptions = [];
  const currentYear = new Date().getFullYear();
  for (let i = 0; i < 99; i++) {
    const yearNumber = currentYear - i;
    yearOptions.push(
      <option key={i} value={yearNumber}>
        {yearNumber}
      </option>
    );
  }

  function handleDayChange(e) {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(e.target.value);
      return newDate;
    });
  }

  function handleMonthChange(e) {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(e.target.value - 1);
      return newDate;
    });
  }

  function handleYearChange(e) {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setFullYear(e.target.value);
      return newDate;
    });
  }

  return {
    date,
    setDate,
    dayOptions,
    monthOptions,
    yearOptions,
    handleDayChange,
    handleMonthChange,
    handleYearChange,
  };
}
