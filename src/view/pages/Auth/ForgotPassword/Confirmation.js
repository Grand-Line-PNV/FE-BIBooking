import { Fragment, useState } from "react";
import classNames from "classnames/bind";
import styles from "../Auth.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------
import {  verifyUser } from "../../../../api/feature";
import { useDispatch } from "react-redux";
import useFormData from "../../../../hooks/useFormData";
import useInputFocus from "../../../../hooks/useInputFocus";
import PreLoaderLogin from "../../../../components/preLoader/PreLoaderLogin";

const cx = classNames.bind(styles);

const Confirmation = () => {
  const prePath = sessionStorage.getItem("path");
  const emailUser = sessionStorage.getItem("email");
  const [isLoading, setIsLoading] = useState(false);
  const { inputRef, isFocused } = useInputFocus();
  const { data, setData, handleChange, errors, setErrors, resetErrors } =
    useFormData({
      email: emailUser,
      otp: "",
      verify: 1,
      error: ""
    });
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    resetErrors();
    try {
      event.preventDefault();
      setIsLoading(true)
      const response = await verifyUser(data);
      navigation(prePath === "register" ? "/login" : "/new-password");
    } catch (error) {
      setIsLoading(false)
      if (error.status === 401) {
        setErrors({error: "Your OTP is wrong or has been expired!"});
      } else if (error.status === 422) {
        setErrors(error.data.errors);
      }
    }
  };

  return (
    <Fragment>
      {isLoading ? <PreLoaderLogin /> : <></>}
      <h2 style={{ marginTop: "40px" }}>Forgot Password!</h2>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <div
          className={cx("input-div", `${isFocused || data.otp ? "focus" : ""}`)}
        >
          <div className={cx("div")}>
            <h5>OTP</h5>
            <input
              type="text"
              className={cx("input")}
              name="otp"
              id="otp"
              ref={inputRef}
              value={data.otp}
              onChange={handleChange}
            />
          </div>
          <div className={cx("div-icon")}>
            <FontAwesomeIcon icon={faKey} className={cx("icon")} />
          </div>
        </div>
        {errors.otp && (
          <div
            className={cx("text", "text-medium")}
            style={{ color: "red", display: "flex" }}
          >
            {errors.otp}
          </div>
        )}
        {errors.error && (
          <div
            className={cx("text", "text-medium")}
            style={{ color: "red", display: "flex" }}
          >
            {errors.error}
          </div>
        )}
        <div className={cx("btn-submits")}>
          <div>
            <Button
              outline={true}
              className={cx("btn-submit")}
              to="/forgot-password"
            >
              Previous
            </Button>
          </div>
          <div>
            <Button primary={true} className={cx("btn-submit")}>
              Continue
            </Button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Confirmation;
