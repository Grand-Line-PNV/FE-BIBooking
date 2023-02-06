import React from "react";
import classNames from "classnames/bind"
import styles from './PersonalInformation.module.scss';

const cx = classNames.bind(styles)

export default function PersonalInformation() {
  return (
    <>
      <div>
        <div className="PersonalInfor__page">
          <img
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
            src="../../../../assets/img/LogoB&IBooking.png"
            alt="..."
          />
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
