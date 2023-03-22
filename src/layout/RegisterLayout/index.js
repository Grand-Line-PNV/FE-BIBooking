import classNames from "classnames/bind";
import styles from "./RegisterLayout.module.scss";
import { LogoHomePage, Saly1 } from "../../assets/images";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const RegisterLayout = ({ children }) => {
  return (
    <>
      <section className={cx("auth")}>
        <Link to={"/"} className={cx("logo")}>
          <img src={LogoHomePage} alt="logo B&IBooking" />
        </Link>
        <div className={cx("container")}>
          <div className={cx("auth-img")}>
            <p className={cx("auth-title", "heading")}>
              Join with us and grow the platform
            </p>
            <img src={Saly1} alt="Saly1" />
          </div>
          <div className={cx("auth-content")}>{children}</div>
        </div>
      </section>
    </>
  );
};

export default RegisterLayout;
