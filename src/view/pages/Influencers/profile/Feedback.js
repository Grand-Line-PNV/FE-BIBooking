import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
const cx = classNames.bind(styles);

const Feedback = () => {
  return (
    <section className={cx("inner", "feedBack")}>
      <div className={cx("container")}>
        <h2 className={cx("heading")}>Feedback</h2>
        <div className={cx("feedBack-container")}>
          <div className={cx("content")}>
            <div className={cx("feedBack")}>
              <div className={cx("feedBack-infor")}>
                <img
                  src="https://iili.io/HEI4YS1.webp"
                  alt="avatar"
                  className={cx("feedBack-avatar")}
                />
                <div>
                  <h4>Jack Williamson</h4>
                  <div className={cx("feedBack-star")}>
                    <h4>Campaign</h4>
                  </div>
                </div>
              </div>
              <p className={cx("feedBack-content")}>
                Lorem ipsum dolor sit amet, consec adipis. Cursus ultricies sit
                sit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feedback;
