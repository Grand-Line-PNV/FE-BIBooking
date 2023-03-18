import { useState } from 'react';

const useFormData = (initialData = {}) => {
  const defaultErrors = Object.freeze({});
  const [errors, setErrors] = useState(defaultErrors);
  const [data, setData] = useState(initialData);

  const resetErrors = () => {
    setErrors(defaultErrors);
  };

  const handleChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    data,
    setData,
    handleChange,
    errors,
    setErrors,
    resetErrors,
  };
};

export default useFormData;