import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./PersonalInformation.module.scss";
import { Logo, Saly1 } from "../../../../assets/images";
import Button from "../../../../components/Button/Button";
import Information from "./Information";
import VerifyAccount from "./VerifyAccount";
import Job from "./Job";

const cx = classNames.bind(styles);

export default function PersonalInformation() {
  const [jobShown, setJobShown] = useState(false);
  const [informationShown, setInformationShown] = useState(true);
  const [verifyShown, setVerifyShown] = useState(false);

  const handleShowJob = () => {
    setJobShown(!jobShown);
    setInformationShown(false);
    setVerifyShown(false);
  };
  return (
    <>
      <div>
        <div className={cx("personalInfor")}>
          <img
            style={{ objectFit: "cover", padding: "30px 20px" }}
            src={Logo}
            alt="LogoB&IBooking"
          />
          <div className={cx("container")}>
            <div className={cx("personalInfor-container")}>
              <div className={cx("block-left")}>
                <p className={cx("personalInfor-title")}>
                  Tell me more about you
                </p>
                <img className={cx("saly1-img")} src={Saly1} alt="Saly1" />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("block-container")}>
                  <div className={cx("dots")}>
                    <span className={cx("dot", "active")}></span>
                    <span className={cx("dot")}></span>
                    <span className={cx("dot")}></span>
                  </div>
                  {/* Call files here */}

                  {informationShown ? <Information /> : <Job />}

                  <div className={cx("submit")}>
                    <Button
                      primary={true}
                      radius={true}
                      text={true}
                      onClick={handleShowJob}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


<div>
      <div className={cx("wrapper")}>
        <div className={cx("title")}>
          <h1>B&I Booking</h1>
        </div>
        <div className={cx("background-login")}>
          <img
            src="https://iili.io/H1b1u2f.png"
            className={cx("background-image")}
            alt=""
          />
          <div className={cx("rectangle1")}>
            <h3 className={cx("sologan")}>
              Join with us and grow the platform
            </h3>
          </div>
          <div className={cx("rectangle2")}>
            <div className={cx("rectangle2-form")}>
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
              <h2>Create Account</h2>
              <div className={cx("button")}>
                <Button
                  className={cx("button-login")}
                  outline={true}
                  leftIcon={
                    <img src="https://iili.io/H1LYZ5g.png" width="25px" />
                  }
                >
                  {" "}
                  Sign up Google
                </Button>
                <Button
                  outline={true}
                  leftIcon={
                    <img src='https://iili.io/H1LYtea.png"' width="25px" />
                  }
                >
                  {" "}
                  Sign up Facebook
                </Button>
              </div>
              <div
                className={cx("brand-login")}
                style={{
                  display: showBrandLogin ? "none" : "block",
                  transition: "0.5s",
                }}
              >
                <h4
                  style={{
                    color: "gray",
                    textAlign: "center",
                    marginTop: "5px",
                  }}
                >
                  ___ OR ___
                </h4>
                <div className={cx("form-login")}>
                  <div className={cx("form")}>
                    <label>User name</label>
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <input type="email" placeholder="Enter user name" />
                  <hr />
                  <div className={cx("form")}>
                    <label>Email</label>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <input type="email" placeholder="Enter email" />
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
                  />
                  <hr />
                </div>
                <div style={{ textAlign: "center" }}>
                  <Button
                    primary={true}
                    style={{ width: "250px" }}
                  >
                    Create Account
                  </Button>
                </div>
              </div>
              <div className={cx("status-account")}>
                <p>Already have an account?</p>
                <h4>Log in</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
