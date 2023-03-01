import classNames from "classnames/bind";
import styles from "./HomeStyles.module.scss";
import Button from "../../../../components/Button/Button";
import {
  ShoppingBagImg,
  NotifyImg,
  PlannerImg,
  SolutionImg,
} from "../../../../assets/images";
const cx = classNames.bind(styles);
const Solution = () => {
  return (
    <div>
      <section className={cx("solution", "booking")}>
        <div className={cx("container")}>
          <div className={cx("solution-container", "booking-container")}>
            <div className={cx("solution-content")}>
              <p className={cx("solution-heading", "same-heading")}>
                Unique Solutions for Your Brands
              </p>
              <p className={cx("solution-text", "text", "text-medium")}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
              <div className={cx("solution-list")}>
                <div className={cx("solution-item")}>
                  <p className={cx("solution-heading-number", "same-heading")} style={{color: "#FF3D68"}}>50+</p>
                  <p className={cx("text", "text-medium")}>Total Client</p>
                </div>
                <div className={cx("solution-item")}>
                  <p className={cx("solution-heading-number", "same-heading")} style={{color: "#3E3FD8"}}>100+</p>
                  <p className={cx("text", "text-medium")}>Project Done</p>
                </div>
              </div>
            </div>
            <div className={cx("solution-image", "booking-image")}>
              <img src={SolutionImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Solution;
