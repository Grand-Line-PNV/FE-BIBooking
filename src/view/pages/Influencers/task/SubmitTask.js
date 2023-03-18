import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SubmitTaskStyles.module.scss";
import { submitTask } from "../../../../api/influencer";
import useFormData from "../../../../hooks/useFormData";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const cx = classNames.bind(styles);
const SubmitTask = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("bookingId");
  const booking_id = parseInt(id);
  console.log(booking_id);
  const [isLoading, setIsLoading] = useState(false);
  const { data, setData, handleChange, errors, setErrors, resetErrors } =
    useFormData({
    booking_id,
      link: "",
      description: "",
    });

  const navigation = useNavigate();

  const handleSubmit = async (event) => {
    resetErrors();
    try {
      event.preventDefault();
      const response = await submitTask(data);
      console.log(response);
      navigation("/influencer/task");
    } catch (error) {
      if (error.status === 401) {
      } else if (error.status === 422) {
        setErrors(error.data.errors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ paddingTop: "100px" }}>
      <label>
        Link:
        <input name="link" type="text" value={data.link} onChange={handleChange} />
      </label>
      {errors.link && (
          <div
            className={cx("text", "text-medium")}
            style={{ color: "red", display: "flex" }}
          >
            {errors.link}
          </div>
        )}
      <br />
      <label>
        Description:
        <input name="description" type="text" value={data.description} onChange={handleChange} />
      </label>
      {errors.description && (
          <div
            className={cx("text", "text-medium")}
            style={{ color: "red", display: "flex" }}
          >
            {errors.description}
          </div>
        )}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmitTask;
