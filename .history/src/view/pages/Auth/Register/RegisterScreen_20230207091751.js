import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { Logo, Saly1 } from "../../../../assets/images/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button/Button";
const cx = classNames.bind(styles);

const RegisterScreen = () => {
  const [width, setWidth] = useState("80px");
  const [right, setRight] = useState("30");
  const [lock, setLock] = useState("none");
  const [showPassword, setShowPassword] = useState(false);
  const [showBrandLogin, setShowBrandLogin] = useState(false);
  const handleToggleRight = () => {
    setWidth("105px");
    setRight("0px");
    setShowBrandLogin(!showBrandLogin);
  };
  const handleToggleLeft = () => {
    setShowBrandLogin(!showBrandLogin);
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
    <>
      
    </>
  );
};

export default RegisterScreen;