import { useState } from "react";
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
const cx = classNames.bind(styles);

const RegisterScreen = () => {
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
    <section className={cx("background")}>
        <h1 className={cx("logo")}>B&I Booking</h1>
        <div className={cx("container")}>
          <div className={cx("content")}>
            <img
              src="https://iili.io/H1b1u2f.png"
              alt="loginImage"
              className={cx("image")}
            />
            <div className={cx("sologan")}>
              <h2 className={cx("welcome")}>
                Join with us and grow the platform
              </h2>
            </div>
            <div className={cx("forms")}>
              <div className={cx("choose-role")}>
                <div
                  style={{ width: width, right: right }}
                  className={cx("btn")}
                ></div>
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
              <div >
                <div className={cx("form")}>
                  <label>User name</label>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <input type="text" placeholder="Enter user" name="user" />
                <hr />
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

              </div>
              <div style={{textAlign: "center"}}>
                <Button primary={true} className={cx("btn-submit")}>
                  Register
                </Button>
              </div>
              <div className={cx("status-account")}>
                <p>Already have an account?</p>
                <h4>Log in here!</h4>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default RegisterScreen;
