import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "../Auth.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button/Button";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLoginApi } from "../../../../api/feature";
import { authorAction } from "../../../../features/feature/author";
import {
  setRole,
  roleSelector,
} from "../../../../features/feature/roleUserSlide";
import useInputFocus from "../../../../hooks/useInputFocus";
import useFormData from "../../../../hooks/useFormData";
const cx = classNames.bind(styles);

const LoginScreen = () => {
  const { inputRef, isFocused } = useInputFocus();
  const { data, setData, handleChange, errors, setErrors, resetErrors } =
    useFormData({
      email: "",
      password: "",
      login: "",
    });

  sessionStorage.getItem("path");
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const role = useSelector(roleSelector);
  console.log(role);

  const [lock, setLock] = useState("none");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    resetErrors();
    try {
      event.preventDefault();
      const response = await userLoginApi(data);
      dispatch(authorAction.addOne(data));
      navigation("/influencer/profile");
    } catch (error) {
      if (error.status === 401) {
        setErrors({ login: "Email or password wrong!" });
      } else if (error.status === 422) {
        setErrors(error.data.errors);
      }
    }
  };
  const onForgotPasswordPage = () => {
    sessionStorage.setItem("path", "login");
    navigation("/forgot-password");
  };

  const clickBrandHandler = () => {
    dispatch(setRole(1));
  };

  const clickInfluencerHandler = () => {
    dispatch(setRole(2));
  };
  const handleLockClose = () => {
    setLock("none");
    setShowPassword(!showPassword);
  };
  const handleLockOpen = () => {
    setLock("block");
    setShowPassword(!showPassword);
  };
  return (
    <Fragment>
      <form className={cx("choose-role")}>
        <input
          type="radio"
          id="brand"
          name="role"
          defaultValue="brand"
          className={cx("choose-role-input")}
          onClick={clickBrandHandler}
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
          defaultValue="influencer"
          className={cx("choose-role-input")}
          onClick={clickInfluencerHandler}
        />
        <label htmlFor="influencer" className={cx("choose-role-label")}>
          Influencer
        </label>
      </form>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <h2 className={cx("title")}>Welcome back!</h2>
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
            <FontAwesomeIcon icon={faUser} className={cx("icon")} />
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
        <div
          className={cx(
            "input-div",
            `${isFocused || data.password ? "focus" : ""}`
          )}
        >
          <div className={cx("div")}>
            <h5>Password</h5>
            <input
              type={showPassword ? "text" : "password"}
              className={cx("input")}
              name="password"
              id="password"
              ref={inputRef}
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
        {errors.login && (
          <div
            className={cx("text", "text-medium")}
            style={{ color: "red", display: "flex" }}
          >
            {errors.login}
          </div>
        )}
        <div className={cx("remember-container")}>
          <div>
            <input type="checkbox" id="checkbox" name="" value="" />
            <span style={{ marginLeft: "5px" }}>Remember me</span>
          </div>
          <div>
            <span>
              <strong>
                <p
                  onClick={onForgotPasswordPage}
                  className={cx("forgot-password")}
                >
                  Forgot Password?
                </p>
              </strong>
            </span>
          </div>
        </div>
        <Button primary={true} className={cx("btn")}>
          Login
        </Button>
      </form>
      <div className={cx("status-account")}>
        <p>Dont have an account?</p>
        <Link to="/register">
          <h4 style={{ cursor: "pointer" }}>Sign up here!</h4>
        </Link>
      </div>
    </Fragment>
  );
};

export default LoginScreen;
