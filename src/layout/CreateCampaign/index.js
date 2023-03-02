import React, { useState } from "react";
import styles from "./CreateCampaignLayout.module.scss";
import classNames from "classnames/bind";
import Button from "../../components/Button/Button";
// import { Avatar } from "../../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCheck, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const CreateCampaignLayout = ({children}) => {
  const[open,setOpen] = useState(false)
// const handleIconMenu(){

// }
  return (
    <div>
    <Header/>
    <section className={cx("profile-setting", "animation")}>
      <div className={cx("container")}>
        <div className={cx("profile-setting-container")}>
          <div className={cx("profile-info")}>
            <div className={cx("profile-avatar")}>
              <img
                src="https://iili.io/HEHPLox.md.jpg"
                alt=""
                width={90}
                height={90}
                style={{ borderRadius: "50px" }}
              />
            </div>
            <div className={cx("profile-content")}>
              <h3 className={cx("profile-name")}>
                LazyyNguyen{" "}
                <FontAwesomeIcon
                  className={cx("profile-icon")}
                  icon={faCheck}
                />
              </h3>
              <span className={cx("profile-address", "text", "text-medium")}>
                0 channel{" "}
                <a href="#linh">
                  <FontAwesomeIcon
                    className={cx("profile-icon")}
                    icon={faPlus}
                  />
                </a>
              </span>
            </div>
          </div>
          {open ?
            <div className={cx('icon-menu')}><FontAwesomeIcon icon={faBars} size='xl'/></div>
            :''}
            {open ? ''
              :
              <div className={cx('icon-menu')}><FontAwesomeIcon icon={faXmark} size='xl'/></div>
            }
          <div
            className={cx('nav-editProfile')}
          >
            <Link className={cx("profile-title")} to='/brand/campaign/information'><h3>Infomation</h3></Link>
            <Link className={cx("profile-title")} to='/brand/campaign/description'><h3>Description</h3></Link>
            <Link className={cx("profile-title")} to='/brand/campaign/responsibility'><h3>Responsibility</h3></Link>
            <Link className={cx("profile-title")} to='/brand/campaign/price'><h3>Price</h3></Link>
          </div>

          {children}
          <div className={cx("submit")}>
            <Button primary={true} large={true} className={cx("heading-small")}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default CreateCampaignLayout;
