import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "../Auth.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button/Button";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLoginApi } from "../../../../api/feature";
import { authorAction } from "../../../../features/feature/author";
import {
  setRole,
  roleSelector,
} from "../../../../features/feature/roleUserSlide";
const cx = classNames.bind(styles);

const LoginScreen = () => {
  sessionStorage.getItem("path");

  const role = useSelector(roleSelector);

  const [width, setWidth] = useState("80px");
  const [right, setRight] = useState("30");
  const [lock, setLock] = useState("none");
  const [showPassword, setShowPassword] = useState(false);
  const [item, setItem] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [textError, setextTError] = useState("");
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async (item) => {
    try {
      const res = await userLoginApi(item);
      if (res.data.account.role_id === role){
        dispatch(authorAction.addOne(item));
        alert("successfully");
        navigation("/influencer/profile");
      }else{
        alert("Choose wrong role!")
      }
      
    } catch (err) {
      setError(true);
      setextTError("Account or password wrong!");
    }
  };
  const addItem = () => {
    if (item.email === "" && item.password === "") {
      setError(true);
      setextTError("Please fill all the blank!");
      // alert(item.role_id)
    } else {
      handleLogin(item);
    }
  };
  const onForgotPasswordPage = () =>{
    sessionStorage.setItem("path", 'login');
    navigation("/forgot-password");
  }

  const clickBrandHandler = () => {
    setWidth("81px");
    setRight("103px");
    dispatch(setRole(1));
  };

  const clickInfluencerHandler = () => {
    setWidth("105px");
    setRight("0px");
    dispatch(setRole(2));
  };
  console.log(role);
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
          onClick={clickBrandHandler}
        >
          Brand
        </button>
        <button
          type="button"
          className={cx("toggle-btn")}
          onClick={clickInfluencerHandler}
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
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={item.email}
          onChange={(e) => setItem({ ...item, email: e.target.value })}
        />
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
          value={item.password}
          onChange={(p) => setItem({ ...item, password: p.target.value })}
        />
        <hr />
        {error && (
          <div style={{ color: "red", marginTop: 10 }}>{textError}</div>
        )}
        <div className={cx("remember-container")}>
          <div>
            <input type="checkbox" id="checkbox" name="" value="" />
            <span style={{ marginLeft: "5px" }}>Remember me</span>
          </div>
          <div>
            <span>
              <Button onClick={onForgotPasswordPage}>
                <strong style={{ cursor: "pointer" }}>Forgot Password!</strong>
              </Button>
            </span>
          </div>
        </div>
      </div>
      <div>
        <Button primary={true} className={cx("btn-submit")} onClick={addItem}>
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
