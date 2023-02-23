import classNames from "classnames/bind";
import styles from "./RegisterLayout.module.scss";
import { Saly1 } from "../../assets/images";
import { LogoHomePage } from "../../assets/images";
const cx = classNames.bind(styles);

const RegisterLayout = ({ children }) => {
  return (
    <>
      <section className={cx("auth")}>
        <img className={cx("logo")} src={LogoHomePage} alt="logo B&IBooking"/>
        <div className={cx("container")}>
          <div className={cx("auth-img")}>
            <p className={cx("auth-title", "heading")}>
              Join with us and grow the platform
            </p>
            <img src={Saly1} />
          </div>
          <div className={cx("auth-content")}>{children}</div>
        </div>
      </section>
    </>
  );
};

export default RegisterLayout;
