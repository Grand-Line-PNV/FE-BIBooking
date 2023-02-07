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

<div>
<div className={cx("wrapper")}>
  <div className={cx("title")}>
    <h1>B&I Booking</h1>
  </div>
  <div className={cx("background-login")}>
    <img
      src="https://iili.io/H1b1u2f.png"
      className={cx("background-image")}
      alt=""
    />
    <div className={cx("rectangle1")}>
      <h3 className={cx("sologan")}>
        Join with us and grow the platform
      </h3>
    </div>
    <div className={cx("rectangle2")}>
    <div className={cx("rectangle2-form")}>
    <div className={cx("dots")}>
                    <span className={cx("dot", "active")}></span>
                    <span className={cx("dot")}></span>
                    <span className={cx("dot")}></span>
                  </div>
                  {/* Call files here */}

                  {informationShown ? <Information /> : <Job />}
      <div className={cx("submit")}>
                    <Button
                      primary={true}
                      radius={true}
                      text={true}
                      onClick={handleShowJob}
                    >
                      Continue
                    </Button>
                  </div>
    </div>
    
    </div>
  </div>
</div>
</div>
  );
}
