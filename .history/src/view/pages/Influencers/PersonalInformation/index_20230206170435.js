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
  const handleShowJob = () => {
    setJobShown(!jobShown);
  };
  return (
    <>
      <div>
        <div className={cx("personalInfor")}>
          <img
            style={{ objectFit: "cover", padding: "30px 20px" }}
            src={Logo}
            alt="LogoB&IBooking"
          />
          <div className={cx("container")}>
            <div className={cx("personalInfor-container")}>
              <div className={cx("block-left")}>
                <p className={cx("personalInfor-title")}>
                  Tell me more about you
                </p>
                <img className={cx("saly1-img")} src={Saly1} alt="Saly1" />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("block-container")}>
                  <div className={cx("dots")}>
                    <span className={cx("dot", "active")}></span>
                    <span className={cx("dot")}></span>
                    <span className={cx("dot")}></span>
                  </div>
                  {/* Call files here */}
                  <Information />
                  {/* <Job />
                  <VerifyAccount /> */}
                  <div className={cx("submit")}>
                    <Button primary={true} radius={true} text={true}>
                      Continue
                    </Button>
                  </div> on
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
