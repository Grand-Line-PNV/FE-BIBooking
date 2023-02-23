import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.scss";
import { LogoHomePage } from "../assets/images/index";
import classNames from "classnames/bind";
import Button from "../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faXmark } from "@fortawesome/free-solid-svg-icons";
import { HeroImg } from "../assets/images/index";
import "./Header.css";

const cx = classNames.bind(styles);

export default function Header() {
  const [sticky, setSticky] = useState({
    isSticky: false,
    offset: 0,
    background: "none",
    paddingTop: 50,
    paddingBottom: 50,
  });
  const headerRef = useRef(null);
  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > 20) {
      setSticky({
        isSticky: true,
        offset: 0,
        background: "white",
        paddingTop: 30,
        paddingBottom: 30,
      });
    } else {
      setSticky({
        isSticky: false,
        offset: 0,
        background: "none",
        paddingTop: 50,
        paddingBottom: 50,
      });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);
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
            <Button outline={true} to="/register">Sign Up</Button>
          </div>

          <label htmlFor="nav-input" className="nav__bars-btn">
          {/* <i className="fa-solid fa-bars" /> */}
          <FontAwesomeIcon icon={faBars}/>
        </label>
        <input type="checkbox" hidden name id="nav-input" />
        <label htmlFor="nav-input" className="nav__overlay" />
        <label htmlFor="nav-input" className="nav-mobile">
          <label htmlFor="nav-input" className="nav__mobile-close">
            <div className="nav-title-area">
              <img className="nav-logo" src={LogoHomePage} alt="" />
            </div>
            {/* <i className="fa-solid fa-xmark" /> */}
          </label>
          <ul className="nav__mobile_list">
            <li className="nav__mobile_link">
              {/* <i className="fa-solid fa-house" /> */}
              <a href="#main"> Home</a>
            </li>
            <li className="nav__mobile_link">
              {/* <i className="fa-solid fa-address-card" /> */}
              <a href="#testimonial"> Campaign</a>
            </li>
            <li className="nav__mobile_link">
              {/* <i className="fa-solid fa-briefcase" /> */}
              <a href="#tutorial"> Task</a>
            </li>
            <li className="nav__mobile_link">
              {/* <i className="fa-brands fa-creative-commons-nd" /> */}
             <a href="#explore"> Revenue</a>
            </li>
            <li className="nav__mobile_link">
              <a href="#hero"><Button primary={true} large={true}>Sign Up</Button></a>
            </li>
          </ul>
        </label>
        </div>
      </div>
    </header>
  );
}
