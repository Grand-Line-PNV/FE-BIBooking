import React from "react";
import classNames from "classnames/bind";
import styles from "./PersonalInformation.module.scss";
import Logo from "../../../theme/Logo";

const cx = classNames.bind(styles);

export default function PersonalInformation() {
  return (
    <>
      <div>
        <div className={cx("personalInfor")}>
          <img
            src={Logo}
          />
          <div className={cx("container")}>
            <div className={cx("personalInfor__container")}>
              <div className={cx("block_left")}>
                <p>AAAAAAAAAAAAAAA</p>
              </div>
              <div className={cx("block_right")}>
                <p>AAAAAAAAAAAAAAA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}