import classNames from "classnames/bind";
import styles from "./HomeStyles.module.scss";
import Button from "../../../../components/Button/Button";
import { NewsImg1, NewsImg2, NewsImg3 } from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
const News = () => {
  return (
    <div>
      <section className={cx("news", "boost")}>
        <div className={cx("container")}>
          <div className={cx("news-header", "boost-header")}>
            <h2 className={cx("news-heading", "same-heading")}>Latest News</h2>
            <p className={cx("news-text", "text", "text-medium")}>
              There are many variations of passages of lorem lpsum available,
              but the majority have suffered alteraction
            </p>
          </div>
          <div className={cx("news-list", "boost-list")}>
            <div className={cx("news-item", "boost-item")}>
              <div className={cx("news-image")}>
                <img src={NewsImg1} alt="" />
              </div>
              <div className={cx("news-desc")}>
                <div className={cx("news-inf")}>
                    <FontAwesomeIcon icon={faUser} /> <p className={cx("text", "text-medium")}>Jack Wilson</p>
                </div>
                <div className={cx("news-date")}>
                    <FontAwesomeIcon icon={faCalendar} /> <p className={cx("text", "text-medium")}>06 March 2022</p>
                </div>
              </div>
              <p className={cx("heading-small")}><b>Discover cennect with great local business in your</b></p>
            </div>
            <div className={cx("news-item", "boost-item")}>
              <div className={cx("news-image")}>
                <img src={NewsImg2} alt="" />
              </div>
              <div className={cx("news-desc")}>
                <div className={cx("news-inf")}>
                    <FontAwesomeIcon icon={faUser} /> <p className={cx("text", "text-medium")}>Jack Wilson</p>
                </div>
                <div className={cx("news-date")}>
                    <FontAwesomeIcon icon={faCalendar} /> <p className={cx("text", "text-medium")}>06 March 2022</p>
                </div>
              </div>
              <p className={cx("heading-small")}><b>Discover cennect with great local business in your</b></p>
            </div>
            <div className={cx("news-item", "boost-item")}>
              <div className={cx("news-image")}>
                <img src={NewsImg3} alt="" />
              </div>
              <div className={cx("news-desc")}>
                <div className={cx("news-inf")}>
                    <FontAwesomeIcon icon={faUser} /> <p className={cx("text", "text-medium")}>Jack Wilson</p>
                </div>
                <div className={cx("news-date")}>
                    <FontAwesomeIcon icon={faCalendar} /> <p className={cx("text", "text-medium")}>06 March 2022</p>
                </div>
              </div>
              <p className={cx("heading-small")}><b>Discover cennect with great local business in your</b></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default News;
