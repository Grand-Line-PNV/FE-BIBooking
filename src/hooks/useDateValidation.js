import { useState } from "react";

const useDateValidation = () => {
  const [startDate, setStartDate] = useState("");
  const [errorsDate, setErrorsDate] = useState({ ended_date: "" });

  const isEndDateValid = (startDate, endDate) => {
    return new Date(endDate) >= new Date(startDate);
  };

  const handleChangeDate = (setData) => (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({ ...prevState, [name]: value }));

    // Check if the end date is greater than the start date
    if (name === "ended_date") {
      if (!isEndDateValid(startDate, value)) {
        setErrorsDate((prevState) => ({
          ...prevState,
          ended_date: "End date must be after start date",
        }));
      } else {
        setErrorsDate((prevState) => ({ ...prevState, ended_date: "" }));
      }
    }
  };

  const handleStartDateChange = (setData) => (event) => {
    const { value } = event.target;
    setStartDate(value);
    setData((prevState) => ({ ...prevState, started_date: value }));
  };

  return {
    startDate,
    errors: errorsDate,
    handleChangeDate,
    handleStartDateChange,
  };
};

export default useDateValidation;
