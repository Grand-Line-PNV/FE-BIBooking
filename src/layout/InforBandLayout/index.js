import React, { useState } from "react";
import styles from "./InforBandLayout.module.scss";
import classNames from "classnames/bind";
import Button from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Input from "../../components/Input/index";

const cx = classNames.bind(styles);

const InforBandLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  // const handleIconMenu(){

  // }
  return (
    <div>
      <Header />
      <section className={cx("task-setting", "animation")}>
        <div className={cx("container")}>
          <div className={cx("task-setting-container")}>
            <div className={cx("task-info")}></div>
            {open ? (
              <div className={cx("icon-menu")}>
                <FontAwesomeIcon icon={faBars} size="xl" />
              </div>
            ) : (
              ""
            )}
            {open ? (
              ""
            ) : (
              <div className={cx("icon-menu")}>
                <FontAwesomeIcon icon={faXmark} size="xl" />
              </div>
            )}
            <div className={cx("nav-editProfile")}>
              <Link className={cx("task-title")} to="/brand/seting/profile">
                <h3>Profile</h3>
              </Link>
              <Link className={cx("task-title")} to="/brand/profile">
                <h3>Brands</h3>
              </Link>
            </div>

            {children}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default InforBandLayout;
