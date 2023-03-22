import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./Header.module.scss";
import { LogoHomePage } from "../assets/images/index";
import classNames from "classnames/bind";
import Button from "../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import Notify from "../view/notifications/Notify";
import { Link, useLocation } from "react-router-dom";
import {
  navLinkVisiter,
  navLinkBrand,
  navLinkInfluencer,
  navLinkBrandInf,
  navLinkInfluencerInf,
} from "./navLink";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const cx = classNames.bind(styles);

const STICKY_DEFAULTS = {
  isSticky: false,
  offset: 0,
  background: "none",
  paddingTop: 30,
  paddingBottom: 30,
};

export default function Header() {
  const accountId = localStorage.getItem("account_id");
  const location = useLocation();
  const [sticky, setSticky] = useState(STICKY_DEFAULTS);

  const [open, setOpen] = useState(false);

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
    Swal.fire("Log out Successfully!", "You clicked the button!", "success");
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
    const header = document.querySelector("[data-header]") ?? {};
    if (window.scrollY >= 10 && header !== null) {
      if (header.classList) {
        header.classList.add("active");
      }
    } else if (header !== null) {
      if (header.classList) {
        header.classList.remove("active");
      }
    }
  };

  window.addEventListener("scroll", handleScrollNavBar);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <Link to={"/"}>
            <img src={LogoHomePage} alt="B&IBooking logo" />
          </Link>
        </a>
        {userRole === "1" ? (
          <nav className={`navbar ${isNavOpen ? "active" : ""}`} data-navbar>
            <ul className="navbar-list">
              {navLinkBrand.map((item, i) => (
                <li
                  key={i}
                  className={
                    item.to == location.pathname
                      ? "nav-item active"
                      : "nav-item "
                  }
                >
                  <Link className="nav-link" to={item.to}>
                    <a
                      href="#home"
                      className="navbar-link"
                      data-nav-link
                      onClick={closeNav}
                    >
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#blog"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNav}
                >
                  <Button
                    outline={true}
                    onClick={handleLogout}
                    className="btn-mobile"
                  >
                    Log out
                  </Button>
                </a>
              </li>
            </ul>
          </nav>
        ) : userRole === "2" ? (
          <nav className={`navbar ${isNavOpen ? "active" : ""}`} data-navbar>
            <ul className="navbar-list">
              {navLinkInfluencer.map((item, i) => (
                <li
                  key={i}
                  className={
                    item.to == location.pathname
                      ? "nav-item active"
                      : "nav-item "
                  }
                >
                  <Link className="nav-link" to={item.to}>
                    <a
                      href="#home"
                      className="navbar-link"
                      data-nav-link
                      onClick={closeNav}
                    >
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#blog"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNav}
                >
                  <Button
                    outline={true}
                    onClick={handleLogout}
                    className="btn-mobile"
                  >
                    Log out
                  </Button>
                </a>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className={`navbar ${isNavOpen ? "active" : ""}`} data-navbar>
            <ul className="navbar-list">
              {navLinkVisiter.map((item, i) => (
                <li
                  key={i}
                  className={
                    item.to == location.pathname
                      ? "nav-item active"
                      : "nav-item "
                  }
                >
                  <Link className="nav-link" to={item.to}>
                    <a
                      href="#home"
                      className="navbar-link"
                      data-nav-link
                      onClick={closeNav}
                    >
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#blog"
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNav}
                >
                  <Button outline={true} to="/register" className="btn-mobile">
                    Register
                  </Button>
                </a>
              </li>
            </ul>
          </nav>
        )}
        <div className="header-actions">
          {userRole === "1" ? (
            <>
              <Button outline={true} onClick={handleLogout} className="btn-web">
                Log out
              </Button>
              <a
                href="#"
                className="btn user-btn"
                aria-label="Profile"
                id="modal-closed"
              >
                <FontAwesomeIcon
                  id="modal-closed"
                  color="#f16736"
                  style={{position: "absolute"}}
                />
                <Notify onClose={handleClose} />
              </a>
              {navLinkBrandInf.map((item, i) => (
                <li
                  key={i}
                  className={
                    item.to == location.pathname
                      ? "nav-item active"
                      : "nav-item "
                  }
                >
                  <Link className="nav-link" to={item.to}>
                    <a href="#" className="btn user-btn" aria-label="Profile">
                      <FontAwesomeIcon icon={faUser} color="#f16736" />
                    </a>
                  </Link>
                </li>
              ))}
            </>
          ) : userRole === "2" ? (
            <>
              <Button outline={true} onClick={handleLogout} className="btn-web">
                Log out
              </Button>
              <a
                href="#"
                className="btn user-btn"
                aria-label="Profile"
                id="modal-closed"
              >
                <FontAwesomeIcon
                  id="modal-closed"
                  color="#f16736"
                  style={{position: "relative"}}
                />
                 <Notify onClose={handleClose} />
              </a>
              {navLinkInfluencerInf.map((item, i) => (
                <li
                  key={i}
                  className={
                    item.to == location.pathname
                      ? "nav-item active"
                      : "nav-item "
                  }
                >
                  <Link className="nav-link" to={`${item.to}/${accountId}`}>
                    <a href="#" className="btn user-btn" aria-label="Profile">
                      <FontAwesomeIcon icon={faUser} color="#f16736" />
                    </a>
                  </Link>
                </li>
              ))}
            </>
          ) : (
            <>
              <Button primary={true} to="/login" className="btn-">
                Login
              </Button>
              <Button outline={true} to="/register" className="btn-">
                Register
              </Button>
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
      </div>
    </header>
  );
}
