import { useState, useRef, useEffect } from "react";

function useInputFocusRegister() {
  const inputRefUserName = useRef(null);
  const inputRefEmail = useRef(null);
  const inputRefPassword = useRef(null);
  const inputRefPasswordConfirmation = useRef(null);
  const [isFocusedUserName, setIsFocusedUserName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedPasswordConfirmation, setIsFocusedPasswordConfirmation] =
    useState(false);

  useEffect(() => {
    const handleFocusUserName = () => setIsFocusedUserName(true);
    const handleBlurUserName = () => setIsFocusedUserName(false);
    const handleFocusEmail = () => setIsFocusedEmail(true);
    const handleBlurEmail = () => setIsFocusedEmail(false);
    const handleFocusPassword = () => setIsFocusedPassword(true);
    const handleBlurPassword = () => setIsFocusedPassword(false);
    const handleFocusPasswordConfirmation = () =>
      setIsFocusedPasswordConfirmation(true);
    const handleBlurPasswordConfirmation = () =>
      setIsFocusedPasswordConfirmation(false);

    const inputElementUserName = inputRefUserName.current;
    const inputElementEmail = inputRefEmail.current;
    const inputElementPassword = inputRefPassword.current;
    const inputElementPasswordConfirmation =
      inputRefPasswordConfirmation.current;

    inputElementUserName.addEventListener("focus", handleFocusUserName);
    inputElementUserName.addEventListener("blur", handleBlurUserName);

    inputElementEmail.addEventListener("focus", handleFocusEmail);
    inputElementEmail.addEventListener("blur", handleBlurEmail);

    inputElementPassword.addEventListener("focus", handleFocusPassword);
    inputElementPassword.addEventListener("blur", handleBlurPassword);

    inputElementPasswordConfirmation.addEventListener(
      "focus",
      handleFocusPasswordConfirmation
    );
    inputElementPasswordConfirmation.addEventListener(
      "blur",
      handleBlurPasswordConfirmation
    );

    return () => {
      inputElementUserName.removeEventListener("focus", handleFocusUserName);
      inputElementUserName.removeEventListener("blur", handleBlurUserName);

      inputElementEmail.removeEventListener("focus", handleFocusEmail);
      inputElementEmail.removeEventListener("blur", handleBlurEmail);

      inputElementPassword.addEventListener("focus", handleFocusPassword);
      inputElementPassword.addEventListener("blur", handleBlurPassword);

      inputElementPasswordConfirmation.addEventListener(
        "focus",
        handleFocusPasswordConfirmation
      );
      inputElementPasswordConfirmation.addEventListener(
        "blur",
        handleBlurPasswordConfirmation
      );
    };
  }, []);

  return {
    inputRefUserName,
    inputRefEmail,
    inputRefPassword,
    inputRefPasswordConfirmation,
    isFocusedUserName,
    isFocusedEmail,
    isFocusedPassword,
    isFocusedPasswordConfirmation,
  };
}

export default useInputFocusRegister;
