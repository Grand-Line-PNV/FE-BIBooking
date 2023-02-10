import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./PersonalInformation.module.scss";
import Button from "../../../../components/Button/Button";
import Information from "./Information";
import {Logo, Saly1} from "../../../../assets/images/index";
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
      </div>
    </>
  );
}