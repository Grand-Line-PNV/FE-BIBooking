import React from "react";
import classNames from "classnames/bind";
import styles from "./PersonalInformation.module.scss";
import { Logo, Saly1 } from "../../../../assets/images";
import Button from "../../../../components/Button/Button";
import Information from "./Information";

const cx = classNames.bind(styles);

export default function PersonalInformation() {
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
                  <div className={cx("job")}>
                    <p className={cx("job-title")}>Your job</p>
                    <ul className={cx("list-job")}>
                      <li className={cx("list-job-item")}>
                        <a href="#linh." className={cx("list-job-link")} >Freelancer</a>
                      </li>
                      <li>Freelancer</li>
                      <li>Freelancer</li>
                      <li>Freelancer</li>
                      <li>Freelancer</li>
                      <li>Freelancer</li>
                      <li>Freelancer</li>
                      <li>Freelancer</li> 
                      <li>Freelancer</li>
                    </ul>
                    <div className={cx("submit")}>
                      <Button primary={true} radius={true} text={true}>
                        Continue
                      </Button>
                    </div>
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
