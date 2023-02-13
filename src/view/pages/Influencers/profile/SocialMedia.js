import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
import Button from "../../../../components/Button/Button";

const cx = classNames.bind(styles);

const SocialMedia = () => {
  return (
    <section className={cx("inner","socialMedia")}>
      <div className={cx("container")}>
        <div className={cx("socialMedia-container")}>
          <div className={cx("content")}>
          <h2 className={cx("heading")}>Social Media</h2>
            <div className={cx("facebook", "default")}>
              <div className={cx("socialMedia-icon")}>
                <img src="https://iili.io/HEJeB6u.th.png" alt="facebook" />
              </div>
              <div className={cx("user")}>
                <h5>@nguyenlinh</h5>
                <h5>Khanh Linh</h5>
              </div>
              <div className={cx("interaction")}>
                <h5>20.000</h5>
                <h5>Average interaction</h5>
              </div>
              <div className={cx("subcribles")}>
                <h5>150.000</h5>
                <h5>Subcribles</h5>
              </div>
              <Button style={{ color: "blue",backgroundColor:'transparent'}}>Visit now</Button>
            </div>
            <div className={cx("instagram", "default")}>
              <div className={cx("socialMedia-icon")}>
                <img
                  src="https://iili.io/HEJeqGe.th.png"
                  alt="instagram-icon"
                />
              </div>
              <div className={cx("user")}>
                <h5>@nguyenlinh</h5>
                <h5>Khanh Linh</h5>
              </div>
              <div className={cx("interaction")}>
                <h5>20.000</h5>
                <h5>Average interaction</h5>
              </div>
              <div className={cx("subcribles")}>
                <h5>150.000</h5>
                <h5>Subcribles</h5>
              </div>
              <Button style={{ color: "orange",backgroundColor:'transparent'}}>Visit now</Button>
            </div>
            <div className={cx("youtube", "default")}>
              <div className={cx("socialMedia-icon")}>
                <img src="https://iili.io/HEJefn9.th.png" alt="youtube-icon" />
              </div>
              <div className={cx("user")}>
                <h5>@nguyenlinh</h5>
                <h5>Khanh Linh</h5>
              </div>
              <div className={cx("interaction")}>
                <h5>20.000</h5>
                <h5>Average interaction</h5>
              </div>
              <div className={cx("subcribles")}>
                <h5>150.000</h5>
                <h5>Subcribles</h5>
              </div>
              <Button style={{ color: "red", backgroundColor:'transparent'}}>Visit now</Button>
            </div>
            <div className={cx("tiktok", "default")}>
              <div className={cx("socialMedia-icon")}>
              <img src="https://iili.io/HEJen3b.th.png" alt="tiktok icon"/>
              </div>
              <div className={cx("user")}>
                <h5>@nguyenlinh</h5>
                <h5>Khanh Linh</h5>
              </div>
              <div className={cx("interaction")}>
                <h5>20.000</h5>
                <h5>Average interaction</h5>
              </div>
              <div className={cx("subcribles")}>
                <h5>150.000</h5>
                <h5>Subcribles</h5>
              </div>
              <Button className={cx("tiktok-btn")}>Visit now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SocialMedia;
