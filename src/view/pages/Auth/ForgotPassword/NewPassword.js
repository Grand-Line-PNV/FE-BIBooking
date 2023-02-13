import { Fragment, useState } from "react";
import classNames from "classnames/bind";
import styles from "../Auth.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button/Button";
const cx = classNames.bind(styles);

const NewPassword = () => {
  const [lock, setLock] = useState("none");
  const [showPassword, setShowPassword] = useState(false);
  const [lock2, setLock2] = useState("none");
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const handleLockClose = () => {
    setLock("none");
    setShowPassword(!showPassword);
  };
  const handleLockOpen = () => {
    setLock("block");
    setShowPassword(!showPassword);
  };
  const handleLock = () => {
    setLock2("block");
    setConfirmShowPassword(!showConfirmPassword);
  };
  const handleUnLock = () => {
    setLock2("none");
    setConfirmShowPassword(!showConfirmPassword);
  };
  return (
    <Fragment>
      <h2 style={{ marginTop: "40px" }}>Change password!</h2>
      <div>
        <div className={cx("form")}>
          <label>New Password</label>
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
        <div className={cx("form")}>
          <label>Confirm Password</label>
          <FontAwesomeIcon
            icon={faLock}
            onClick={handleLock}
            style={{ display: lock2 === "none" ? "block" : "none" }}
          />
          <FontAwesomeIcon
            icon={faLockOpen}
            style={{ display: lock2 }}
            onClick={handleUnLock}
          />
        </div>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          name="password"
        />
        <hr />
      </div>
      <div className={cx("btn-submits")}>
        <div style={{ textAlign: "center" }}>
          <Button primary={true} className={cx("btn-submit")}>
            Submit
          </Button>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button outline={true} className={cx("btn-submit")} to="/login">
            Cancel
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default NewPassword;
