import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
import Button from "../../../components/Button/Button";
const cx = classNames.bind(styles);

const ProfileSocialMedia = () => {
  return (
    <section className={cx("socialMedia")}>
      <div className={cx("container")}>
        <div className={cx("socialMedia-container")}>
          <div className={cx("content")}>
            <div className={cx("facebook")}>
              <div className={cx("socialMedia-icon")}>
                <img src="https://iili.io/HEJeB6u.png" alt="facebook"/>
              </div>
              <div className={cx("user")}>
                <h6>@nguyenlinh</h6>
                <h6>Khanh Linh</h6>
              </div>
              <div className={cx("interaction")}>
                <h6>20.000</h6>
                <h6>Average interaction</h6>
              </div>
              <div className={cx("subcribles")}>
                <h6>150.000</h6>
                <h6>Subcribles</h6>
              </div>
              <Button style={{ color: "blue" }}>Visit now</Button>
            </div>
            <div className={cx("instagram")}>
              <div className={cx("socialMedia-icon")}>
                <img src="https://iili.io/HEJeqGe.png" alt="instagram"/>
              </div>
              <div className={cx("user")}>
                <h6>@nguyenlinh</h6>
                <h6>Khanh Linh</h6>
              </div>
              <div className={cx("interaction")}>
                <h6>20.000</h6>
                <h6>Average interaction</h6>
              </div>
              <div className={cx("subcribles")}>
                <h6>150.000</h6>
                <h6>Subcribles</h6>
              </div>
              <Button style={{ color: "orange" }}>Visit now</Button>
            </div>
            <div className={cx("youtube")}>
              
              <div className={cx("socialMedia-icon")}>
              <img src="https://iili.io/HEJefn9.png"  alt="youtube"/>
              </div>
              <div className={cx("user")}>
                <h6>@nguyenlinh</h6>
                <h6>Khanh Linh</h6>
              </div>
              <div className={cx("interaction")}>
              <h6>20.000</h6>
              <h6>Average interaction</h6>
              </div>
              <div className={cx("subcribles")}>
              <h6>150.000</h6>
              <h6>Subcribles</h6>
              </div>
              <Button style={{color:'red'}}>Visit now</Button>
            </div>
            <div className={cx("tiktok")}>
              
              <div className={cx("socialMedia-icon")}>
              <img src="https://iili.io/HEJen3b.png"  alt="tiktok"/>
              </div>
              <div className={cx("user")}>
                <h6>@nguyenlinh</h6>
                <h6>Khanh Linh</h6>
              </div>
              <div className={cx("interaction")}>
              <h6>20.000</h6>
              <h6>Average interaction</h6>
              </div>
              <div className={cx("subcribles")}>
              <h6>150.000</h6>
              <h6>Subcribles</h6>
              </div>
              <Button style={{color:'black'}}>Visit now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProfileSocialMedia;
