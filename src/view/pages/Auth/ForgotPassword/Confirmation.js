import { Fragment, useState,} from "react";
import classNames from "classnames/bind";
import styles from "../Auth.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------
import { verifyUser } from "../../../../api/feature";

const cx = classNames.bind(styles);

const Confirmation = () => {
  const navigation = useNavigate();

  const prePath = sessionStorage.getItem("path");
  const emailUser = sessionStorage.getItem("email");

  const[data,setData] = useState({
    email:emailUser,
    otp:""
  });
  const Verification = async (data) => {
    console.log(emailUser)
    try {
      const res = await verifyUser(data);
      navigation(prePath === 'register' ? '/login' : '/new-password')
    } catch (error) {
      console.log('onAddNewUser   error', error);
    }
  };
  const onVerifyUser = () => {
    if (!data) {
      console.log('error')
      alert('No User!', 'You need to enter data');
    } else {
      Verification(data)
      console.log('sucess')

    }
  };

  return (
    <Fragment>
      <h2 style={{ marginTop: "40px" }}>Forgot Password!</h2>
      <div>
        <div className={cx("form")}>
          <label>OTP</label>
          <FontAwesomeIcon icon={faKey} />
        </div>
        <input type="text" placeholder="Enter OTP" name="otp"  value={data.otp} onChange={(e) =>setData({...data,"otp": e.target.value})}/>
        <hr />
      </div>
      <div className={cx("btn-submits")}>
        <div>
          <Button
            primary={true}
            className={cx("btn-submit")}
            onClick={onVerifyUser}
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
