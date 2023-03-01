import classNames from "classnames/bind";
import styles from "./HomeStyles.module.scss";
import Button from "../../../../components/Button/Button";
import {
  ShoppingBagImg,
  NotifyImg,
  PlannerImg,
  FeatureImg,
} from "../../../../assets/images";
const cx = classNames.bind(styles);
const Booking = () => {
  return (
    <div>
      <section className={cx("booking")}>
        <div className={cx("container")}>
          <div className={cx("booking-container")}>
            <div className={cx("booking-image")}>
              <img src={FeatureImg} alt="" />
            </div>
            <div className={cx("booking-content")}>
              <p className={cx("booking-heading", "same-heading")}>
                Online Booking Influencers to the next level.
              </p>
              <ul className={cx("booking-list")}>
                <li className={cx("booking-item")}>
                  <div className={cx("booking-icon", "ShoppingBagImg")}>
                    <img
                      src={ShoppingBagImg}
                      alt=""
                    />
                  </div>
                  <div className={cx("booking-desc")}>
                    <p className={cx("heading-small")}><b>Powerfull online protection.</b></p>
                    <p className={cx("booking-text", "text", "text-medium")}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </li>
                <li className={cx("booking-item")}>
                  <div className={cx("booking-icon", "NotifyImg")}>
                    <img
                      src={NotifyImg}
                      alt=""
                    />
                  </div>
                  <div className={cx("booking-desc")}>
                    <p className={cx("heading-small")}><b>Internet without borders.</b></p>
                    <p className={cx("booking-text", "text", "text-medium")}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </li>
                <li className={cx("booking-item")}>
                  <div className={cx("booking-icon", "PlannerImg")}>
                    <img
                      src={PlannerImg}
                      alt=""
                    />
                  </div>
                  <div className={cx("booking-desc")}>
                    <p className={cx("heading-small")}><b>Supercharged VPN</b></p>
                    <p className={cx("booking-text", "text", "text-medium")}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Booking;
