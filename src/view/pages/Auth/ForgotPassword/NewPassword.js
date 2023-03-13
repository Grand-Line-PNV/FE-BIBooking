import { Fragment, useState } from "react";
import classNames from "classnames/bind";
import styles from "../Auth.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button/Button";
import useAuth from "../../../../hooks/useAuth";
import { changePassword } from "../../../../api/feature";
import { useDispatch, useSelector } from "react-redux";
import {
  authorAction,
  authorSelectors,
} from "../../../../features/feature/author";
import useFormData from "../../../../hooks/useFormData";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert';
import useInputFocusLogin from "../../../../hooks/useInputFocusLogin";
import PreLoaderLogin from "../../../../components/preLoader/PreLoaderLogin";
const cx = classNames.bind(styles);

const NewPassword = () => {
  const {
    lock,
    lock2,
    showPassword,
    showConfirmPassword,
    handleLockClose,
    handleLockOpen,
    handleLock,
    handleUnLock,
  } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const email = sessionStorage.getItem("email");
  // const email='linh.nguyenthikhanh02@gmail.com'
  const { inputRefEmail, inputRefPassword, isFocusedEmail, isFocusedPassword } =
    useInputFocusLogin();
  const { data, setData, handleChange, errors, setErrors, resetErrors } =
    useFormData({
      email: email,
      password: "",
      password_confirmation: "",
      verify: "",
    });
  const navigation = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    resetErrors();
    try {
      event.preventDefault();
      setIsLoading(true)
      const res = await changePassword(data);
      dispatch(authorAction.updateOne(res.data));
      navigation("/login");
    } catch (error) {
      setIsLoading(false)
      if (error.status === 401) {
        setErrors({ verify: "Wrong!" });
      } else if (error.status === 422) {
        setErrors(error.data.errors);
      }
    }
  };

  return (
    <Fragment>
      {isLoading ? <PreLoaderLogin /> : <></>}
      <h2 style={{ marginTop: "40px" }}>Change password!</h2>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <div
          className={cx(
            "input-div",
            `${isFocusedEmail || data.password ? "focus" : ""}`
          )}
        >
          <div className={cx("div")}>
            <h5>New Password</h5>
            <input
              type={showPassword ? "text" : "password"}
              className={cx("input")}
              name="password"
              id="password"
              ref={inputRefEmail}
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div className={cx("div-icon")}>
            <FontAwesomeIcon
              icon={faLock}
              onClick={handleLockOpen}
              style={{ display: lock === "none" ? "block" : "none" }}
              className={cx("icon")}
            />
            <FontAwesomeIcon
              icon={faLockOpen}
              style={{ display: lock }}
              onClick={handleLockClose}
              className={cx("icon")}
            />
          </div>
        </div>
        {errors.password && (
          <div
            className={cx("text", "text-medium")}
            style={{ color: "red", display: "flex" }}
          >
            {errors.password}
          </div>
        )}
        {/*  */}
        <div
          className={cx(
            "input-div",
            `${isFocusedPassword || data.password_confirmation ? "focus" : ""}`
          )}
        >
          <div className={cx("div")}>
            <h5>Confirm Password</h5>
            <input
              type={showConfirmPassword ? "text" : "password"}
              className={cx("input")}
              name="password_confirmation"
              id="password_confirmation"
              ref={inputRefPassword}
              value={data.password_confirmation}
              onChange={handleChange}
            />
          </div>
          <div className={cx("div-icon")}>
            <FontAwesomeIcon
              icon={faLock}
              onClick={handleLock}
              style={{ display: lock2 === "none" ? "block" : "none" }}
              className={cx("icon")}
            />
            <FontAwesomeIcon
              icon={faLockOpen}
              style={{ display: lock2 }}
              onClick={handleUnLock}
              className={cx("icon")}
            />
          </div>
        </div>
        {errors.password_confirmation && (
          <div
            className={cx("text", "text-medium")}
            style={{ color: "red", display: "flex" }}
          >
            {errors.password_confirmation}
          </div>
        )}
        <div className={cx("btn-submits")}>
          <div style={{ textAlign: "center" }}>
            <Button outline={true} className={cx("btn-submit")} to="/login">
              Cancel
            </Button>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button primary={true} className={cx("btn-submit")}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default NewPassword;
