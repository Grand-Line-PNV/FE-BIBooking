import React from "react";

export default function Header() {
    <>
    <header class="header">
                <div class="container">
                    <div class="header-container">
                        <img srcset="./images/logo.png 2x" alt="">
                        <ul class="menu">
                            <li class="menu-item">
                                <a href="#" class="menu-link">About</a>
                            </li>
                            <li class="menu-item">
                                <a href="#" class="menu-link">Features</a>
                            </li>
                            <li class="menu-item">
                                <a href="#" class="menu-link">Pricing</a>
                            </li>
                            <li class="menu-item">
                                <a href="#" class="menu-link">Testimonials</a>
                            </li>
                            <li class="menu-item">
                                <a href="#" class="menu-link">Help</a>
                            </li>
                        </ul>
                        <div class="header-auth">
                            <a href="#" class="header-signin">Sign In</a>
                            <a href="#" class="button button--outline" >Sign Up</a>
                        </div>
                    </div>
                </div>
            </header>
    </>
}