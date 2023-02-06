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
            style={{ width: "100px", height: "100px",  }}
            src="../../../../assets/img/LogoB&IBooking.png"
            alt="..."
          />
          <div className={cx("")}>
            <div className={cx("")}>
              <p>AAAAAAAAAAAAAAA</p>
            </div>
            <div className={cx("")}>
              <p>AAAAAAAAAAAAAAA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
