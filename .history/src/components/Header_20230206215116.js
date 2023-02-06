import React from "react";
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
            <li className="menu-item" {cx("menu-item")}>
              <a href="#" className="menu-link" {cx("menu-link")}>
                Testimonials
              </a>
            </li>
            <li className="menu-item" {cx("menu-link")}>
              <a href="#" className="menu-link" {cx("menu-link")}>
                Help
              </a>
            </li>
          </ul>
          <div className="header-auth" {cx("menu-link")}>
            <a href="#" className="header-signin" {cx("menu-link")}>
              Sign In
            </a>
            <a href="#" className="button button--outline" {cx("menu-link")}>
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  </>;
}
