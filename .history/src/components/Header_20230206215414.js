import React from "react";
import styles from "./PersonalInformation.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Header() {
  <>
    <header className={cx("header")}>
      <div className={cx("container")}>
        <div className={cx("header-container")}>
          <img src="" alt="" />
          <ul className={cx("menu")}>
            <li className={cx("container")}>
              <a href="#" className={cx("menu-link")}>
                About
              </a>
            </li>
            <li className={cx("menu-item")}>
              <a href="#" className={cx("menu-link")}>
                Features
              </a>
            </li>
            <li className={cx("menu-item")}>
              <a href="#" className={cx("menu-link")}>
                Pricing
              </a>
            </li>
            <li className={cx("menu-item")}>
              <a href="#" className={cx("menu-link")}>
                Testimonials
              </a>
            </li>
            <li className={cx("menu-item")}>
              <a href="#" className={cx("menu-link")}>
                Help
              </a>
            </li>
          </ul>
          <div className={cx("header-auth")}>
            <a href="#" className={cx("header-signin")}>
              Sign In
            </a>
            <a href="#" className={cx("button", "button--outline")}>
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  </>;
}
