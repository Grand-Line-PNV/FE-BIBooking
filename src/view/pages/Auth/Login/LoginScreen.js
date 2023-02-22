import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "../Auth.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLockOpen } from "@fortawesome/free-solid-svg-icons";
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
const cx = classNames.bind(styles);

const LoginScreen = () => {
  sessionStorage.getItem("path");
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const role = useSelector(roleSelector);

  const [width, setWidth] = useState("80px");
  const [right, setRight] = useState("30");
  const [lock, setLock] = useState("none");
  const [showPassword, setShowPassword] = useState(false);

  const defaultErrors = Object.freeze({
    email: "",
    password: "",
    login: "",
  });
  const [errors, setErrors] = useState(defaultErrors);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const resetErrors = () => {
    setErrors(defaultErrors);
  };
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
  console.log("errors: ", errors);
  const onForgotPasswordPage = () => {
    sessionStorage.setItem("path", "login");
    navigation("/forgot-password");
  };

  const clickBrandHandler = () => {
    setWidth("81px");
    setRight("103px");
    dispatch(setRole(1));
  };

  const clickInfluencerHandler = () => {
    setWidth("105px");
    setRight("0px");
    dispatch(setRole(2));
  };
  // console.log(role);
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
      <div className={cx("choose-role")}>
        <div style={{ width: width, right: right }} className={cx("btn")}></div>
        <button
          type="button"
          className={cx("toggle-btn")}
          onClick={clickBrandHandler}
        >
          Brand
        </button>
        <button
          type="button"
          className={cx("toggle-btn")}
          onClick={clickInfluencerHandler}
        >
          Influencer
        </button>
      </div>

      <h2>Welcome back!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div className={cx("form")}>
            <label>Email</label>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            id="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <hr />
          {errors.email && (
            <div className="error" style={{ color: "red", marginTop: 10 }}>
              {errors.email}
            </div>
          )}
          <div className={cx("form")}>
            <label>Password</label>
            <FontAwesomeIcon
              icon={faLock}
              onClick={handleLockOpen}
              style={{ display: lock === "none" ? "block" : "none" }}
            />
            <FontAwesomeIcon
              icon={faLockOpen}
              style={{ display: lock }}
              onClick={handleLockClose}
            />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            name="password"
            id="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <hr />
          {errors.password && (
            <div className="error" style={{ color: "red", marginTop: 10 }}>
              {errors.password}
            </div>
          )}
          {errors.login && (
            <div className="error" style={{ color: "red", marginTop: 10 }}>
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
                <Button onClick={onForgotPasswordPage}>
                  <strong style={{ cursor: "pointer" }}>
                    Forgot Password!
                  </strong>
                </Button>
              </span>
            </div>
          </div>
        </div>
        <div>
          <Button primary={true} className={cx("btn-submit")}>
            Login
          </Button>
        </div>
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
