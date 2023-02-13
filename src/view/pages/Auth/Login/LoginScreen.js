import { useState } from "react";
import classNames from "classnames/bind";
import styles from "../Auth.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button/Button";
import { Fragment } from "react";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const LoginScreen = () => {
  const [width, setWidth] = useState("80px");
  const [right, setRight] = useState("30");
  const [lock, setLock] = useState("none");
  const [showPassword, setShowPassword] = useState(false);
  const handleToggleRight = () => {
    setWidth("105px");
    setRight("0px");
  };
  const handleToggleLeft = () => {
    setWidth("81px");
    setRight("103px");
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
      <div className={cx("choose-role")}>
        <div style={{ width: width, right: right }} className={cx("btn")}></div>
        <button
          type="button"
          className={cx("toggle-btn")}
          onClick={handleToggleLeft}
        >
          Brand
        </button>
        <button
          type="button"
          className={cx("toggle-btn")}
          onClick={handleToggleRight}
        >
          Influencer
        </button>
      </div>

      <h2>Welcome back!</h2>
      <div>
        <div className={cx("form")}>
          <label>Email</label>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <input type="email" placeholder="Enter email" name="email" />
        <hr />
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
        />
        <hr />
        <div className={cx("remember-container")}>
          <div>
            <input type="checkbox" id="checkbox" name="" value="" />
            <span style={{ marginLeft: "5px" }}>Remember me</span>
          </div>
          <div>
            <span>
              <Link to="/forgot-password">
                <strong style={{cursor:'pointer'}}>Forgot Password!</strong>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div>
        <Button primary={true} className={cx("btn-submit")}>
          Login
        </Button>
      </div>
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
