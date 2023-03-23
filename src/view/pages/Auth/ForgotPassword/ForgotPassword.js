import { Fragment, useState } from "react";
import classNames from "classnames/bind";
import styles from "../Auth.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button/Button";
// ---------------------------------
import { sendEmailChangePassword } from "../../../../api/feature";
import useFormData from "../../../../hooks/useFormData";
import { useNavigate } from "react-router-dom";
import useInputFocus from "../../../../hooks/useInputFocus";
import PreLoaderLogin from "../../../../components/preLoader/PreLoaderLogin";
import showToast from "../../../../components/toast/Toast";
const cx = classNames.bind(styles);

const ForgotPassword = () => {
  const { inputRef, isFocused } = useInputFocus();
  const [isLoading, setIsLoading] = useState(false);
  const { data, setData, handleChange, errors, setErrors, resetErrors } =
    useFormData({
      email: "",
      sendEmail: "",
    });

  const navigation = useNavigate();
  const handleSubmit = async (event) => {
    resetErrors();
    try {
      event.preventDefault();
      setIsLoading(true);
      const res = await sendEmailChangePassword(data);
      sessionStorage.setItem("email", data.email);
      navigation("/verification");
      showToast(false, "Successfully!");
    } catch (error) {
      setIsLoading(false);
      showToast(true, "Error! An error occurred. Please try again later!");
      if (error.status === 401) {
        setErrors(error.data.errors);
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
          className={cx(
            "input-div",
            `${isFocused || data.email ? "focus" : ""}`
          )}
        >
          <div className={cx("div")}>
            <h5>Email</h5>
            <input
              type="email"
              className={cx("input")}
              name="email"
              id="email"
              ref={inputRef}
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className={cx("div-icon")}>
            <FontAwesomeIcon icon={faEnvelope} className={cx("icon")} />
          </div>
        </div>
        {errors.email && (
          <div
            className={cx("text", "text-medium")}
            style={{ color: "red", display: "flex" }}
          >
            {errors.email}
          </div>
        )}
        <div className={cx("btn-submits")}>
          <div>
            <Button
              outline={true}
              large={true}
              className={cx("btn-submit")}
              to="/login"
            >
              Cancel
            </Button>
          </div>
          <div>
            <Button primary={true} large={true} className={cx("btn-submit")}>
              Send
            </Button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default ForgotPassword;
