import { useState, useRef, useEffect } from "react";

function useInputFocusLogin() {
  const inputRefEmail = useRef(null);
  const inputRefPassword = useRef(null);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  useEffect(() => {
    const handleFocusEmail = () => setIsFocusedEmail(true);
    const handleBlurEmail = () => setIsFocusedEmail(false);
    const handleFocusPassword = () => setIsFocusedPassword(true);
    const handleBlurPassword = () => setIsFocusedPassword(false);

    const inputElementEmail = inputRefEmail.current;
    const inputElementPassword = inputRefPassword.current;

    inputElementEmail.addEventListener("focus", handleFocusEmail);
    inputElementEmail.addEventListener("blur", handleBlurEmail);

    inputElementPassword.addEventListener("focus", handleFocusPassword);
    inputElementPassword.addEventListener("blur", handleBlurPassword);

    return () => {
      inputElementEmail.removeEventListener("focus", handleFocusEmail);
      inputElementEmail.removeEventListener("blur", handleBlurEmail);

      inputElementPassword.addEventListener("focus", handleFocusPassword);
      inputElementPassword.addEventListener("blur", handleBlurPassword);
    };
  }, []);

  return { inputRefEmail, inputRefPassword, isFocusedEmail, isFocusedPassword };
}

export default useInputFocusLogin;
