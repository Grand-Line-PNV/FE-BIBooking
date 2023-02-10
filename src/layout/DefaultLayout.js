import React from "react";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileSettingScreen from "../view/pages/Influencers/ProfileSetting/ProfileSettingScreen";

const cx = classNames.bind(styles);

export default function DefaultLayout() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <main>
        <ProfileSettingScreen />
      </main>
      <Footer />
    </div>
  );
}
