import { Fragment, useRef, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "../Auth.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLockOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
// ----------------------------------------------------------------
import { useDispatch, useSelector } from "react-redux";
import { addNewUser } from "../../../../api/feature";
import { registerAction } from "../../../../features/feature/register";
import useAuth from "../../../../hooks/useAuth";
import {
  setRole,
  roleSelector,
} from "../../../../features/feature/roleUserSlide";
import useFormData from "../../../../hooks/useFormData";
import useInputFocusRegister from "../../../../hooks/useInputFocusRegister";

// ------------------------------------------------------------------
const cx = classNames.bind(styles);
const RegisterScreen = () => {
  const {
    width,
    right,
    lock,
    lock2,
    setWidth,
    showPassword,
    setRight,
    showConfirmPassword,
    handleLockClose,
    handleLockOpen,
    handleLock,
    handleUnLock,
  } = useAuth();
  const dispatch = useDispatch();
  const {
    inputRefUserName,
    inputRefEmail,
    inputRefPassword,
    inputRefPasswordConfirmation,
    isFocusedUserName,
    isFocusedEmail,
    isFocusedPassword,
    isFocusedPasswordConfirmation,
  } = useInputFocusRegister();
  const { data, setData, handleChange, errors, setErrors, resetErrors } =
    useFormData({
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      role_id: "1",
    });

  const navigation = useNavigate();
  const handleToggleRight = (e) => {
    setData({ ...data, role_id: e.target.value });
  };
  const handleToggleLeft = (e) => {
    setData({ ...data, role_id: e.target.value });
  };
  const handleSubmit = async (event) => {
    resetErrors();
    sessionStorage.setItem("path", "register");
    console.log(data);
    try {
      event.preventDefault();
      const response = await addNewUser(data);
      dispatch(registerAction.addOne(data));
      sessionStorage.setItem("email", data.email);
      navigation("/verification");
    } catch (error) {
      if (error.status === 401) {
      } else if (error.status === 422) {
        setErrors(error.data.errors);
      }
    }
  };

  const path = "register";
  return (
    <Fragment>
      <form className={cx("choose-role")}>
        <input
          type="radio"
          id="brand"
          name="role"
          value="1"
          defaultValue="brand"
          className={cx("choose-role-input")}
          onClick={handleToggleLeft}
          defaultChecked
        />
        <label htmlFor="brand" className={cx("choose-role-label")}>
          Brand
        </label>
        <br />
        <input
          type="radio"
          id="influencer"
          name="role"
          value="2"
          defaultValue="influencer"
          className={cx("choose-role-input")}
          onClick={handleToggleRight}
        />
        <label htmlFor="influencer" className={cx("choose-role-label")}>
          Influencer
        </label>
      </form>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <h2 className={cx("title")}>Create account!</h2>
        <div
          className={cx(
            "input-div",
            `${isFocusedUserName || data.username ? "focus" : ""}`
          )}
        >
          <div className={cx("div")}>
            <h5>Username</h5>
            <input
              type="text"
              className={cx("input")}
              name="username"
              id="username"
              ref={inputRefUserName}
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div className={cx("div-icon")}>
            <FontAwesomeIcon icon={faUser} className={cx("icon")} />
          </div>
        </div>
        {errors.username && (
          <div className="error" style={{ color: "red", display: "flex" }}>
            {errors.username}
          </div>
        )}
        <div
          className={cx(
            "input-div",
            `${isFocusedEmail || data.email ? "focus" : ""}`
          )}
        >
          <div className={cx("div")}>
            <h5>Email</h5>
            <input
              type="email"
              className={cx("input")}
              name="email"
              id="email"
              ref={inputRefEmail}
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className={cx("div-icon")}>
            <FontAwesomeIcon icon={faEnvelope} className={cx("icon")} />
          </div>
        </div>
        {errors.email && (
          <div className="error" style={{ color: "red", display: "flex" }}>
            {errors.email}
          </div>
        )}
        <div
          className={cx(
            "input-div",
            `${isFocusedPassword || data.password ? "focus" : ""}`
          )}
        >
          <div className={cx("div")}>
            <h5>Password</h5>
            <input
              type={showPassword ? "text" : "password"}
              className={cx("input")}
              name="password"
              id="password"
              ref={inputRefPassword}
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
          <div className="error" style={{ color: "red", display: "flex" }}>
            {errors.password}
          </div>
        )}
        <div
          className={cx(
            "input-div",
            `${
              isFocusedPasswordConfirmation || data.password_confirmation
                ? "focus"
                : ""
            }`
          )}
        >
          <div className={cx("div")}>
            <h5>Confirm Password</h5>
            <input
              type={showConfirmPassword ? "text" : "password"}
              className={cx("input")}
              name="password_confirmation"
              id="password_confirmation"
              ref={inputRefPasswordConfirmation}
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
          <div className="error" style={{ color: "red", display: "flex" }}>
            {errors.password_confirmation}
          </div>
        )}
        <Button primary={true} className={cx("btn")}>
          Register
        </Button>
      </form>
      <div className={cx("status-account")}>
        <p>Already have an account?</p>
        <Link to="/login">
          <h4 style={{ cursor: "pointer" }}>Log in here!</h4>
        </Link>
      </div>
    </Fragment>
  );
};

export default RegisterScreen;
