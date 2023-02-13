import { Fragment,} from "react";
import classNames from "classnames/bind";
import styles from "../Auth.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button/Button";
const cx = classNames.bind(styles);

const Confirmation = () => {
  return (
    <Fragment>
      <h2 style={{ marginTop: "40px" }}>Forgot Password!</h2>
      <div>
        <div className={cx("form")}>
          <label>OTP</label>
          <FontAwesomeIcon icon={faKey} />
        </div>
        <input type="text" placeholder="Enter OTP" name="otp" />
        <hr />
      </div>
      <div className={cx("btn-submits")}>
        <div>
          <Button
            primary={true}
            className={cx("btn-submit")}
            to="/new-password"
          >
            Continue
          </Button>
        </div>
        <div>
          <Button outline={true} className={cx("btn-submit")} to="/email-Confirmation">
            Previous
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Confirmation;
