import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { LogoHomePage } from "../assets/images/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cx("footer")}>
      <div className={cx("container")}>
        <div className={cx("footer-container")}>
          <div className={cx("footer-column")}>
            <a href="index.html" className={cx("footer-logo")}>
              <img src={LogoHomePage} alt="" />
            </a>
            <p className={cx("footer-desc", "text")}>
              There are many variations of passages of lorem lpsum available,
              but the majority have suffered alteraction
            </p>
            <div className={cx("social")}>
              <a href className={cx("social-item")}>
                <FontAwesomeIcon icon={faLinkedinIn} color="white" />
              </a>
              <a href className={cx("social-item")}>
                <FontAwesomeIcon icon={faFacebookF} color="white" />
              </a>
              <a href className={cx("social-item")}>
                <FontAwesomeIcon icon={faTwitter} color="white" />
              </a>
            </div>
          </div>
          <div className={cx("footer-column")}>
            <h3 className={cx("footer-heading", "heading-small")}>Product</h3>
            <ul className={cx("footer-links")}>
              <li className={cx("footer-item")}>
                <a href="#" className={cx("footer-link")}>
                  Employee database
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="#" className={cx("footer-link")}>
                  Payroll
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="#" className={cx("footer-link")}>
                  Absences
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="#" className={cx("footer-link")}>
                  Time tracking
                </a>
              </li>
            </ul>
          </div>
          <div className={cx("footer-column")}>
            <h3 className={cx("footer-heading")}>Information</h3>
            <ul className={cx("footer-links")}>
              <li className={cx("footer-item")}>
                <a href="#" className={cx("footer-link")}>
                  FAQs
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="#" className={cx("footer-link")}>
                  Blog
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="#" className={cx("footer-link")}>
                  Support
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="#" className={cx("footer-link")}>
                  Payroll
                </a>
              </li>
            </ul>
          </div>
          <div className={cx("footer-column")}>
            <h3 className={cx("footer-heading")}>Company</h3>
            <ul className={cx("footer-links")}>
              <li className={cx("footer-item")}>
                <a href="#" className={cx("footer-link")}>
                  About us
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="#" className={cx("footer-link")}>
                  Careers
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="#" className={cx("footer-link")}>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className={cx("copyright")}>
        © 2021 Real State - All Rights Reserved.
      </p>
    </footer>
  );
}
