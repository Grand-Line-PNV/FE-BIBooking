import React from "react";
import styles from "./Brand.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function InfluencerMenu() {
  return (
    <ul className={cx("menu")}>
      <li className={cx("container")}>
        <a href="#" className={cx("menu-link", "text")}>
          Home
        </a>
      </li>
      <li className={cx("menu-item")}>
        <a href="#" className={cx("menu-link", "text")}>
          Campaign
        </a>
      </li>
      <li className={cx("menu-item")}>
        <a href="#" className={cx("menu-link", "text")}>
          Task
        </a>
      </li>
      <li className={cx("menu-item")}>
        <a href="#" className={cx("menu-link", "text")}>
          Revenue
        </a>
      </li>
    </ul>
  );
}
