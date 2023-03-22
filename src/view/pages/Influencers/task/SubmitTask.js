import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SubmitTaskStyles.module.scss";
import { submitTask } from "../../../../api/influencer";
import useFormData from "../../../../hooks/useFormData";
import { useNavigate } from "react-router-dom";
import showToast from "../../../../components/toast/Toast";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input";
import PreLoader from "../../../../components/preLoader/PreLoader";

const cx = classNames.bind(styles);
const SubmitTask = (prop) => {
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const { data, setData, handleChange, errors, setErrors, resetErrors } =
    useFormData({
      booking_id: prop.bookingId,
      link: "",
      description: "",
    });

  const navigation = useNavigate();

  const handleShowModal = () => {
    setShow(true);
    setIsLoading(false);
    setErrors("");
    setData({
      booking_id: prop.bookingId,
      link: "",
      description: "",
    });
  };

  const handleSubmit = async (event) => {
    resetErrors();
    try {
      event.preventDefault();
      setIsLoading(true)
      const response = await submitTask(data);
      console.log(response);
      navigation("/influencer/task");
      showToast(false, "Login Successfully!");
    } catch (error) {
      setIsLoading(false)
      showToast(true, "Error! An error occurred. Please try again later!");
      if (error.status === 401) {
      } else if (error.status === 422) {
        setErrors(error.data.errors);
      }
    }
  };

  return (
    <>
      {" "}
      {show ? null : (
        <Button primary={true} onClick={handleShowModal}>
          Submit Task
        </Button>
      )}
      {show ? (
        <div className={cx("modal-content")}>
          {isLoading ? <PreLoader /> : <></>}
          <div className={cx("form-feedback")}>
            <div className={cx(show ? "active" : "disable")}>
              <h2>Submit Task</h2>
              <form>
                <br />
                <Input
                  title="Link"
                  cols={20}
                  medium={true}
                  name="link"
                  value={data.link}
                  onChange={handleChange}
                />
                {errors.link && (
                  <div
                    className={cx("text", "text-medium")}
                    style={{ color: "red", display: "flex" }}
                  >
                    {errors.link}
                  </div>
                )}
                <br />
                <Input
                  title="Description"
                  cols={20}
                  medium={true}
                  rows={10}
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                />
                {errors.description && (
                  <div
                    className={cx("text", "text-medium")}
                    style={{ color: "red", display: "flex" }}
                  >
                    {errors.description}
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Button outline={true} onClick={() => setShow(false)}>
                    Cancel
                  </Button>
                  <Button primary={true} onClick={handleSubmit}>
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SubmitTask;
