import React from "react";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileScreen from "../view/pages/Brands/Profile/ProfileScreen";

const cx = classNames.bind(styles);

export default function DefaultLayout() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <main>
        <ProfileScreen />
      </main>
      <Footer />
    </div>
  );
}
