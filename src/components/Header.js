import React from "react";
import styles from "./Header.module.scss";
import { LogoHomePage } from "../assets/images/index";
import classNames from "classnames/bind";
import Button from "../components/Button/Button";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx("header")}>
      <div className={cx("container")}>
        <div className={cx("header-container")}>
          <img src={LogoHomePage} alt="" />
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
          <div className={cx("header-auth")}>
            <Button outline={true}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
