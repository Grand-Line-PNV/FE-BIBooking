import React from "react";
import classNames from "classnames/bind";
import styles from "./PersonalInformation.module.scss";

const cx = classNames.bind(styles);

export default function PersonalInformation() {
  return (
    <>
      <div>
        <div className={cx("personalInfor__page")}>
          <img
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
            src="../../../../assets/images/LogoB&IBooking.png"
            alt="..."
          />
          <div className={cx("personalInfor__block")}>
            <div className={cx("block_left")}>
              <p>AAAAAAAAAAAAAAA</p>
            </div>
            <div className={cx("block_right")}>
              <p>AAAAAAAAAAAAAAA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
