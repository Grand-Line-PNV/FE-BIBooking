import classNames from "classnames/bind";
import styles from "./HomeStyles.module.scss";
import Button from "../../../../components/Button/Button";
import {
    Img2012,
  BitcoinImg,
  PieChartImg,
} from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
const Boost = () => {
  return (
    <div>
      <section className={cx("boost")}>
        <div className={cx("container")}>
          <div className={cx("boost-header")}>
            <h2 className={cx("boost-heading", "same-heading")}>Want you to Boost your Brand?</h2>
            <p className={cx("boost-text", "text", "text-medium")}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className={cx("boost-list")}>
            <div className={cx("boost-item")}>
              <div className={cx("boost-image", "Img2012")}>
                <img src={Img2012} alt="" />
              </div>
              <h3 className={cx("boost-title")}>Scheduling</h3>
              <p className={cx("text", "text-medium")}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
              <a href="#" className={cx("button")}>
                Read more <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
            <div className={cx("boost-item")}>
              <div className={cx("boost-image", "BitcoinImg")}>
                <img src={BitcoinImg} alt="" />
              </div>
              <h3 className={cx("boost-title")}>Increase conversion</h3>
              <p className={cx("text", "text-medium")}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
              <a href="#" className={cx("button")}>
                Read more <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
            <div className={cx("boost-item")}>
              <div className={cx("boost-image", "PieChartImg")}>
                <img src={PieChartImg} alt="" />
              </div>
              <h3 className={cx("boost-title")}>Increase analytics</h3>
              <p className={cx("text", "text-medium")}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
              <a
                href="#"
                className={cx("button")}>
                Read more <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Boost;
