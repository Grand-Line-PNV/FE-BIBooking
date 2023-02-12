import classNames from "classnames/bind";
import styles from "./RegisterLayout.module.scss";
const cx = classNames.bind(styles);

const RegisterLayout = ({ children }) => {
  return (
    <section className={cx("wrapper")}>
      <h1 className={cx("logo")}>B&I Booking</h1>
      <div className={cx("container")}>
        <div className={cx("content")}>
          <img
            src="https://iili.io/H1b1u2f.png"
            alt="loginImage"
            className={cx("image")}
          />
          <div className={cx("sologan")}>
            <h2 className={cx("welcome")}>
              Join with us and grow the platform
            </h2>
          </div>
          <div className={cx("forms")}>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default RegisterLayout;
