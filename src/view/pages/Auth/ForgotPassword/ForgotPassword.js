import { Fragment, useState } from "react";
import classNames from "classnames/bind";
import styles from "../Auth.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button/Button";
// ---------------------------------
import { sendEmailChangePassword } from "../../../../api/feature";
const cx = classNames.bind(styles);

const ForgotPassword = () => {
  const[data,setData] = useState({
    email:"",
  });  const handleSendEmail = async (data) => {
    console.log(data);
    try {
      const res = await sendEmailChangePassword(data);
      sessionStorage.setItem("email", data.email);
    } catch (error) {
      console.log("Send Email error", error);
    }
    alert("success");
  };

  const onSendEmail = () => {
    if (!data) {
      console.log("error");
      alert("No User!", "You need to enter data");
    } else {
      handleSendEmail(data);
      console.log("sucess");
    }
  };
  return (
    <Fragment>
      <h2 style={{ marginTop: "40px" }}>Forgot Password!</h2>
      <div>
        <div className={cx("form")}>
          <label>Email</label>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={data.email}
          onChange={(e) => setData({...data, email: e.target.value})}
        />
        <hr />
      </div>
      <div className={cx("btn-submits")}>
        <div>
          <Button
            primary={true}
            className={cx("btn-submit")}
            to="/verification"
            onClick={onSendEmail}
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
