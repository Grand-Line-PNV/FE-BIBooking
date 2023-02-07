import React from "react";
import Button from "../../../../components/Button/Button";
import classNames from "classnames/bind";
import styles from "./Information.module.scss";

const cx = classNames.bind(styles);

export default function Information() {
  return (
    <>
      <div className={cx("information")}>
        <p className={cx("information-title")}>Personal Information</p>
        <form className={cx("form")}>
          <div className={cx("form-control-left")}>
            <div className={cx("form-group")}>
              <label className={cx("form-label")}>Your full name <strong>*</strong></label>
              <input className={cx("form-input")} type="email" required />
            </div>
            <div className={cx("form-group")}>
              <label className={cx("form-label")}>Your address email <strong>*</strong></label>
              <input className={cx("form-input")} type="email" required />
            </div>
            <div className={cx("form-group")}>
              <label className={cx("form-label")}>Your phone number <strong>*</strong></label>
              <input className={cx("form-input")} type="email" required />
            </div>
            <div className={cx("form-group")}>
              <label className={cx("form-label")}>Province/City <strong>*</strong></label>
              <input className={cx("form-input")} type="email" required />
            </div>
          </div>
          <div className={cx("form-control-right")}>
            <div className={cx("form-group")}>
              <label className={cx("form-label")}>District <strong>*</strong></label>
              <input className={cx("form-input")} type="email" required />
            </div>
            <div className={cx("form-group")}>
              <label className={cx("form-label")}>Gender *</label>
              <div className={cx("input-radios")}>
                <div className={cx("radio-group")}>
                  <input type="radio" required className={cx("radio")} />
                  <label className={cx("label-radio")}>Male</label>
                </div>
                <div className={cx("radio-group")}>
                  <input type="radio" required className={cx("radio")} />
                  <label className={cx("label-radio")}>Female</label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
