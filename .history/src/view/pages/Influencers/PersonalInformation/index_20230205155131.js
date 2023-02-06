import React from "react";
import classNames from "classnames/bind";
import styles from "./PersonalInformation.module.scss";

const cx = classNames.bind(styles);

export default function PersonalInformation() {
  return (
    <>
      <div>
        <div className={cx("PersonalInfor__page")}>
          <img
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
            src="../../../../assets/img/LogoB&IBooking.png"
            alt="..."
          />
        </div>
        <div className={cx("")}>
          <div className={cx("")}>AAAAA</div>
          <div className={cx("")}>2</div>
        </div>
      </div>
    </>
  );
}
