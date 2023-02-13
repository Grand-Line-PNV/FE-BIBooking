import { Fragment } from "react";
import classNames from "classnames/bind";
import styles from "../Auth.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button/Button";
const cx = classNames.bind(styles);

const ForgotPassword = () => {
  return (
    <Fragment>
      <h2 style={{ marginTop: "40px" }}>Forgot Password!</h2>
      <div>
        <div className={cx("form")}>
          <label>Email</label>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <input type="email" placeholder="Enter email" name="email" />
        <hr />
      </div>
      <div className={cx("btn-submits")}>
        <div>
          <Button
            primary={true}
            className={cx("btn-submit")}
            to="/email-confirmation"
          >
            Send
          </Button>
        </div>
        <div>
          <Button outline={true} className={cx("btn-submit")} to="/login">
            Cancel
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPassword;
