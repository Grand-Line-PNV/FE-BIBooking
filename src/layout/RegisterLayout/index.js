import classNames from "classnames/bind";
import styles from "./RegisterLayout.module.scss";
import { Saly1 } from "../../assets/images";
import { LogoHomePage } from "../../assets/images";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const RegisterLayout = ({ children }) => {
  return (
    <div className={cx("container-auth")}>
      <div className={cx("logo")}>
        <Link to={"/"}>
          <img className={cx("logoBIBooking")} src={LogoHomePage} alt="logo B&IBooking" />
        </Link>
      </div>
      <section className={cx("auth")}>
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
    </div>
  );
};

export default RegisterLayout;
