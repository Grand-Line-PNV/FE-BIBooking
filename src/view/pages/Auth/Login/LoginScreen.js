import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "../Auth.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button/Button";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLoginApi } from "../../../../api/feature";
import {
  setRole,
  roleSelector,
} from "../../../../features/feature/roleUserSlide";
import useFormData from "../../../../hooks/useFormData";
import useInputFocusLogin from "../../../../hooks/useInputFocusLogin";
import PreLoaderLogin from "../../../../components/preLoader/PreLoaderLogin";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const cx = classNames.bind(styles);

const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { inputRefEmail, inputRefPassword, isFocusedEmail, isFocusedPassword } =
    useInputFocusLogin();
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

  const [lock, setLock] = useState("none");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    resetErrors();
    try {
      event.preventDefault();
      setIsLoading(true);
      const response = await userLoginApi(data);
      localStorage.setItem("token", response.data.data.access_token);
      localStorage.setItem("role", response.data.data.account.role_id);
      localStorage.setItem("username", response.data.data.account.username);
      localStorage.setItem("account_id", response.data.data.account.id);
      setIsLoading(false);
      navigation("/");
      Swal.fire("Login Successfully!", "You clicked the button!", "success");
    } catch (error) {
      setIsLoading(false);
      if (error.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Username or password incorrect !',
        })
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
    setData({
      email: "",
      password: "",
      login: "",
    });
    setErrors("");
    dispatch(setRole(1));
  };

  const clickInfluencerHandler = () => {
    setData({
      email: "",
      password: "",
      login: "",
    });
    setErrors("");
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
      {isLoading ? <PreLoaderLogin /> : <></>}
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
          <div className={cx("remember-me")}>
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
