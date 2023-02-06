import React from "react";
import classNames from "classnames/bind";
import styles from "./PersonalInformation.module.scss";
import { Logo, Saly1 } from "../../../../assets/images";
import Button from "../../../../components/Button/Button";

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
            <div className={cx("personalInfor__container")}>
              <div className={cx("block_left")}>
                <p className={cx("personalInfor_title")}>
                  Tell me more about you
                </p>
                <img className={cx("saly1_img")} src={Saly1} alt="Saly1" />
              </div>
              <div className={cx("block_right")}>
                <div className={cx("block__container")}>
                  <div className={cx("dots")}>
                    <span className={cx("dot", "active")}></span>
                    <span className={cx("dot")}></span>
                    <span className={cx("dot")}></span>
                  </div>
                  <div className={cx("information")}>
                    <p className={cx("information__title")}>Personal Information</p>
                    <form>
                    <div class="form-control"><
                    </form>
                    <Button>Continue</Button>
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
