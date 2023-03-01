import React from "react";
import classNames from "classnames/bind";
import styles from "./VerifyAccount.module.scss";

const cx = classNames.bind(styles);

export default function VerifyAccount() {
  return (
    <>
      <div className={cx("verifyAccount")}>
        <p className={cx("verifyAccount-title")}>Last Step</p>
        <div className={cx("termsOfService")}>
          <strong className={cx("text-1")}>
            Please review, mark agree and proceed to finish
          </strong>
          <p className={cx("text-2")}>
            Please read our <strong>Terms of Service</strong> carefully
          </p>
          <input type="checkbox" className={cx("input-checkbox")} />
          <span className={cx("text-input-checkbox")}>
            I agree with Terms of Service
          </span>
        </div>
      </div>
    </>
  );
}
