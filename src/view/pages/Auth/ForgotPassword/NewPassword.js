import { Fragment, useState } from "react";
import classNames from "classnames/bind";
import styles from "../Auth.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button/Button";
import useAuth from "../../../../hooks/useAuth";
import { changePassword } from "../../../../api/feature";
import {useDispatch, useSelector} from 'react-redux';
import {authorAction, authorSelectors} from '../../../../features/feature/author';
const cx = classNames.bind(styles);

const NewPassword = () => {  const {
    
    lock,
    lock2,
    showPassword,
    showConfirmPassword,
    handleLockClose,
    handleLockOpen,
    handleLock,
    handleUnLock
  } = useAuth();
  const email = sessionStorage.getItem("email");
  // const email='linh.nguyenthikhanh02@gmail.com'
  const dispatch = useDispatch();
  const[passwords,setPasswords] = useState({
    email:email,
    password:'',
    password_confirmation:''
  });  const handleChangePassword = async (password) => {
    try {
      const res = await changePassword(password);
      dispatch(authorAction.updateOne(res.data));
    } catch (error) {
      console.log("Send Email error", error);
    }
    alert("success");
  };

  const onChangePassword = () => {
    if (!passwords) {
      console.log("error");
      alert("No Password!", "You need to enter data");
    } else {
      handleChangePassword(passwords);
      console.log("sucess");
    }
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
          value={passwords.password}
          onChange={(e)=>setPasswords({...passwords,password: e.target.value})}
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
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Enter Password"
          name="password"
          value={passwords.password_confirmation}
          onChange={(e)=>setPasswords({...passwords, password_confirmation: e.target.value})}
        />
        <hr />
      </div>
      <div className={cx("btn-submits")}>
        <div style={{ textAlign: "center" }}>
          <Button primary={true} className={cx("btn-submit")} onClick={onChangePassword} to="/login">
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
