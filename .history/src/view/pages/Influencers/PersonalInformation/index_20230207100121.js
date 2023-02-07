import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./PersonalInformation.module.scss";
import { Logo, Saly1 } from "../../../../assets/images";
import Button from "../../../../components/Button/Button";
import Information from "./Information";
import VerifyAccount from "./VerifyAccount";
import Job from "./Job";

const cx = classNames.bind(styles);

export default function PersonalInformation() {
  const [jobShown, setJobShown] = useState(false);
  const [informationShown, setInformationShown] = useState(true);
  const [verifyShown, setVerifyShown] = useState(false);

  const handleShowJob = () => {
    setJobShown(!jobShown);
    setInformationShown(false);
    setVerifyShown(false);
  };
  return (
    <>
      
    </>
  );
}
