import React, { useState } from "react";
import styles from "./TaskLayout.module.scss";
import classNames from "classnames/bind";
import Button from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Input from "../../components/Input/index";

const cx = classNames.bind(styles);

const TaskLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  // const handleIconMenu(){

  // }
  return (
    <div>
      <Header />
      <section className={cx("task-setting", "animation")}>
        <div className={cx("container")}>
          <div className={cx("task-setting-container")}>
            <div className={cx("task-info")}>
              <div className={cx("search-input")}>
                <Input
                  type="text"
                  placeholder="Search your tasks"
                  primary={true}
                  large={true}
                />
                <div className={cx("div-icon")}>
                  <FontAwesomeIcon icon={faSearch} className={cx("icon")} />
                </div>
              </div>
              <div className={cx("status-filter")}>
                <p>Status</p>
                <select>
                  <option>All</option>
                  <option>Waiting for comfirm</option>
                  <option>Applying</option>
                  <option>Waiting for comfirm</option>
                </select>
              </div>
            </div>
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
              <Link className={cx("task-title")} to="/influencer/task/applying">
                <h3>Applying (0)</h3>
              </Link>
              <Link className={cx("task-title")} to="/influencer/task/doing">
                <h3>Doing (0)</h3>
              </Link>
              <Link className={cx("task-title")} to="/influencer/task/waiting">
                <h3>Waiting for approval (0)</h3>
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

export default TaskLayout;
