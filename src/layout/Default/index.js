import React from "react";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const cx = classNames.bind(styles);

export default function Default({children}) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <main>
      <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
