import React, { useState } from "react";
import styles from "./UpdateProfileLayout.module.scss";
import classNames from "classnames/bind";
import Button from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCheck,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const UpdateProfileLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  // const handleIconMenu(){

  // }
  return (
    <div>
      <Header />
      <section className={cx("profile-setting", "animation")}>
        <div className={cx("container")}>
          <div className={cx("profile-setting-container")}>
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
              <Link
                className={cx("profile-title")}
                to="/influencer/setting/update-profile"
              >
                <h3>General</h3>
              </Link>
              <Link
                className={cx("profile-title")}
                to="/influencer/setting/update-profile/social-media"
              >
                <h3>Social media</h3>
              </Link>
              <Link
                className={cx("profile-title")}
                to="/influencer/setting/update-profile/audience-data"
              >
                <h3>Follower rate</h3>
              </Link>
              <Link
                className={cx("profile-title")}
                to="/influencer/setting/update-profile/services"
              >
                <h3>Services</h3>
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

export default UpdateProfileLayout;
