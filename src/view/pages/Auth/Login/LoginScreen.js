import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./LoginStyle.module.scss";
import Button from "../../../../components/Button/Button";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

const LoginScreen = () => {
  const [width, setWidth] = useState("80px");
  const [right, setRight] = useState("30");
  const handleToggleRight = () => {
    setWidth("105px");
    setRight("0px");
  };
  const handleToggleLeft = () => {
    setWidth("81px");
    setRight("103px");
  };
  return (
    <div>
      <div className={cx("wrapper")}>
        <div className={cx("title")}>
          <h1>B&I Booking</h1>
        </div>
        <div className={cx("background-login")}>
          <img
            src="https://iili.io/H1UrtLX.md.png"
            className={cx("background-image")}
            alt=""
          />
          <div className={cx("rectangle1")}>
          <h3 className={cx("sologan")}>Join with us and grow the platform</h3>
          </div>
          <div className={cx("rectangle2")}>
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
            <h3 className={cx("title")}>Create Account</h3>
            <div className={cx("button")}>
              <Button
                className={cx("button-login")}
                primary={true}
                leftIcon={
                  <img src="https://iili.io/H1LYZ5g.png" width="25px" />
                }
              >
                {" "}
                Sign in Google
              </Button>
              <Button
                primary={true}
                leftIcon={
                  <img src='https://iili.io/H1LYtea.png"' width="25px" />
                }
              >
                {" "}
                Sign in Facebook
              </Button>
            </div>
            <div className={cx("status-account")}>
              <p>Already have an account?</p>
              <h4>Log in</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginScreen;
