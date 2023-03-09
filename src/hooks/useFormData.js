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
  const handleChangeIndex = (index, event) => {
    const { name, value } = event.target;
    const list = [...data];
    list[index][name] = value;
    setData(list);
    // setData((prevData) => ({
    //   ...prevData,
    //   [event.target.name]: event.target.value,
    // }));
  };
  return {
    data,
    setData,
    handleChange,
    handleChangeIndex,
    errors,
    setErrors,
    resetErrors,
  };
};
export default useFormData;