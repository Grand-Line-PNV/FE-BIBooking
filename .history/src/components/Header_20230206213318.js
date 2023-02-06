import React from "react";

export default function Header() {
  <>
    <header className="header">
      <div className="container">
        <div className="header-container">
          <img srcSet="./images/logo.png 2x" alt="" />
          <ul className="menu">
            <li className="menu-item">
              <a href="#" className="menu-link">
                About
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Features
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Pricing
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Testimonials
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Help
              </a>
            </li>
          </ul>
          <div className="header-auth">
            <a href="#" className="header-signin">
              Sign In
            </a>
            <a href="#" className="button button--outline">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  </>;
}
