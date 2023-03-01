import { useState } from "react";
const useAuth = () =>{
    const [width, setWidth] = useState("80px");
  const [right, setRight] = useState("30");
  const [lock, setLock] = useState("none");
  const [lock2, setLock2] = useState("none");
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
  return{
    width,
    setWidth,
    setRight,
    right,
    lock,
    lock2,
    showPassword,
    showConfirmPassword,
    handleLockClose,
    handleLockOpen,
    handleLock,
    handleUnLock
  }
}
export default useAuth;