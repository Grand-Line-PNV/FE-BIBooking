import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./Header.module.scss";
import { LogoHomePage } from "../assets/images/index";
import classNames from "classnames/bind";
import Button from "../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faRing,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { faBellSlash } from "@fortawesome/free-regular-svg-icons";
import Notify from '../view/notifications/Notify';

const cx = classNames.bind(styles);

const STICKY_DEFAULTS = {
  isSticky: false,
  offset: 0,
  background: "none",
  paddingTop: 30,
  paddingBottom: 30,
};

export default function Header() {
  const [sticky, setSticky] = useState(STICKY_DEFAULTS);

  const [open, setOpen] = useState(false)

  const [userRole, setUserRole] = useState("");
  const [username, setUserName] = useState("");

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
    navigation("/");
  };
  // nav-bar
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleScrollNavBar = () => {
    const header = document.querySelector("[data-header]");
    if (window.scrollY >= 10) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  };

  window.addEventListener("scroll", handleScrollNavBar);

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }


  return (
    <header
      className="header"
      data-header
      ref={headerRef}
      style={{
        marginTop: sticky.offset,
        background: sticky.background,
        paddingTop: sticky.paddingTop,
        paddingBottom: sticky.paddingBottom,
      }}
    >
      <div className="container">
        <div
          className={`overlay ${isNavOpen ? "active" : ""}`}
          data-overlay
          onClick={closeNav}
        />
        <a href="#" className="logo">
          <img src={LogoHomePage} alt="B&IBooking logo" />
        </a>
        {userRole === "1" ? (
          <nav className={`navbar ${isNavOpen ? "active" : ""}`} data-navbar>
            <ul className="navbar-list">
              <li>
                <a
                  href="#home"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNav}
                  to="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#featured-car"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNav}
                >
                  Booking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNav}
                  to="/brand/campaign"
                >
                  Campaign
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNav}
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNav}
                >
                   <Button outline={true} onClick={handleLogout} className="btn-mobile">Log out</Button>
                </a>
              </li>
            </ul>
          </nav>
        ) : userRole === "2" ? (
          <nav className={`navbar ${isNavOpen ? "active" : ""}`} data-navbar>
            <ul className="navbar-list">
              <li>
                <a
                  href="#home"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNav}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#featured-car"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNav}
                >
                  Campaign
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNav}
                >
                  Task
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNav}
                >
                  Revenue
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNav}
                >
                  <Button outline={true} onClick={handleLogout} className="btn-mobile">Log out</Button>
                </a>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className={`navbar ${isNavOpen ? "active" : ""}`} data-navbar>
            <ul className="navbar-list">
              <li>
                <a
                  href="#home"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNav}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#featured-car"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNav}
                >
                  Campaign
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNav}
                >
                  Task
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNav}
                >
                  Revenue
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNav}
                >
                  <Button outline={true} to="/register" className="btn-mobile">Register</Button>
                </a>
              </li>
            </ul>
          </nav>
        )}
        <div className="header-actions">
          {!userRole ? (
            <>
              <Button outline={true} to="/register" className="btn-">
                Register
              </Button>
            </>
          ) : (
            <>
              <Button outline={true} onClick={handleLogout} className="btn-web">
                Log out
              </Button>
              <a href="#" className="btn user-btn" aria-label="Profile" id="modal-closed" onClick={handleOpen}>
                <FontAwesomeIcon id="modal-closed" icon={faBell} color="#f16736" onClick={handleOpen}/>
              </a>
              <a href="#" className="btn user-btn" aria-label="Profile">
                <FontAwesomeIcon icon={faUser} color="#f16736" />
              </a>
            </>
          )}
          <button
            className={`nav-toggle-btn ${isNavOpen ? "active" : ""}`}
            data-nav-toggle-btn
            aria-label="Toggle Menu"
            onClick={toggleNav}
          >
            <span className="one" />
            <span className="two" />
            <span className="three" />
          </button>
            </div>
          {
            open && <Notify onClose={handleClose} />
          }
        </div>
    </header>
  );
}
