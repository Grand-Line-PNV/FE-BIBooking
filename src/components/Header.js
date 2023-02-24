import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./Header.module.scss";
import { LogoHomePage } from "../assets/images/index";
import classNames from "classnames/bind";
import Button from "../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faRing, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { faBellSlash } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

const STICKY_DEFAULTS = {
  isSticky: false,
  offset: 0,
  background: "none",
  paddingTop: 50,
  paddingBottom: 50,
};

export default function Header() {
  const [sticky, setSticky] = useState(STICKY_DEFAULTS);
  const headerRef = useRef(null);
  const handleScroll = useCallback(() => {
    const header = headerRef?.current?.getBoundingClientRect?.();
    if (header && window.pageYOffset > 20) {
      setSticky({
        ...STICKY_DEFAULTS,
        isSticky: true,
        background: "white",
        paddingTop: 30,
        paddingBottom: 30,
      });
    } else {
      setSticky(STICKY_DEFAULTS);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const [userRole, setUserRole] = useState("");
  const [username, setUserName] = useState("");

  const navigation = useNavigate();
  useEffect(() => {
    const role = localStorage.getItem("role");
    const user = localStorage.getItem("username");
    setUserRole(role);
    setUserName(user);
  });

  const handleLogout = () => {
    localStorage.clear();
    setUserRole("");
    setUserName("");
    navigation("/home");
  };

  return (
    <header
      className={cx("header")}
      ref={headerRef}
      style={{
        marginTop: sticky.offset,
        background: sticky.background,
        paddingTop: sticky.paddingTop,
        paddingBottom: sticky.paddingBottom,
      }}
    >
      <div className={cx("container")}>
        <div className={cx("header-container")}>
          <img src={LogoHomePage} alt="" />
          {userRole === "1" ? (
            <ul className={cx("menu")}>
              <li className={cx("container")}>
                <a href="#" className={cx("menu-link", "text")}>
                  Home
                </a>
              </li>
              <li className={cx("menu-item")}>
                <a href="#" className={cx("menu-link", "text")}>
                  Booking
                </a>
              </li>
              <li className={cx("menu-item")}>
                <a href="#" className={cx("menu-link", "text")}>
                  Campaign
                </a>
              </li>
              <li className={cx("menu-item")}>
                <a href="#" className={cx("menu-link", "text")}>
                  About us
                </a>
              </li>
            </ul>
          ) : userRole === "2" ? (
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
          ) : (
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
          )}
          {!userRole ? (
            <div className={cx("header-auth")}>
              <Button outline={true} to="/register">
                Register
              </Button>
            </div>
          ) : (
            <div className={cx("header-auth")}>
              <p>{username}</p>
              <Button outline={true} onClick={handleLogout}>
                Log Out
              </Button>
              <FontAwesomeIcon icon={faBell} color="#f16736"/>
              <FontAwesomeIcon icon={faUser} color="#f16736"/>
            </div>
          )}

          <label htmlFor="nav-input" className="nav__bars-btn">
            {/* <i className="fa-solid fa-bars" /> */}
            <FontAwesomeIcon icon={faBars} />
          </label>
          <input type="checkbox" hidden name id="nav-input" />
          <label htmlFor="nav-input" className="nav__overlay" />
          <label htmlFor="nav-input" className="nav-mobile">
            <label htmlFor="nav-input" className="nav__mobile-close">
              <div className="nav-title-area">
                <img className="nav-logo" src={LogoHomePage} alt="" />
              </div>
            </label>
            {/*  */}
            {userRole === "1" ? (
              <ul className="nav__mobile_list">
                <li className="nav__mobile_link">
                  <a href="#main"> Home</a>
                </li>
                <li className="nav__mobile_link">
                  <a href="#testimonial"> Booking</a>
                </li>
                <li className="nav__mobile_link">
                  <a href="#tutorial"> Campaign</a>
                </li>
                <li className="nav__mobile_link">
                  <a href="#explore"> About us</a>
                </li>
              </ul>
            ) : userRole === "2" ? (
              <ul className="nav__mobile_list">
                <li className="nav__mobile_link">
                  <a href="#main"> Home</a>
                </li>
                <li className="nav__mobile_link">
                  <a href="#testimonial"> Campaign</a>
                </li>
                <li className="nav__mobile_link">
                  <a href="#tutorial"> Task</a>
                </li>
                <li className="nav__mobile_link">
                  <a href="#explore"> Revenue</a>
                </li>
              </ul>
            ) : (
              <ul className="nav__mobile_list">
                <li className="nav__mobile_link">
                  <a href="#main"> Home</a>
                </li>
                <li className="nav__mobile_link">
                  <a href="#testimonial"> Campaign</a>
                </li>
                <li className="nav__mobile_link">
                  <a href="#tutorial"> Task</a>
                </li>
                <li className="nav__mobile_link">
                  <a href="#explore"> Revenue</a>
                </li>
              </ul>
            )}
            {!userRole ? (
              <ul className="nav__mobile_list">
                <li className={cx("nav__mobile_link")}>
                  <a href="#hero">
                    <Button outline={true} large={true} to="/register">
                      Register
                    </Button>
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="nav__mobile_list">
                <li className={cx("nav__mobile_link")}>
                  <a href="#hero">
                    <Button outline={true} large={true} onClick={handleLogout}>
                      Log Out
                    </Button>
                  </a>
                </li>
              </ul>
            )}
          </label>
        </div>
      </div>
    </header>
  );
}
