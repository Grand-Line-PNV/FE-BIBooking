import classNames from "classnames/bind";
import styles from "./HomeStyles.module.scss";
import Button from "../../../../components/Button/Button";
import { Discord, Spotify, Reddit, Amazon, Netflix } from "../../../../assets/images";
const cx = classNames.bind(styles);
const Partner = () => {
  return (
    <div>
      <section className={cx("partner")}>
        <div className={cx("container")}>
          <div className={cx("partner-container")}>
            <p className={cx("partner-heading", "same-heading")}>See how much our client love.</p>
            <div className={cx("partner-list-item")}>
                <div className={cx("partner-item")}><img srcSet={Netflix} alt="" /></div>
                <div className={cx("partner-item")}><img srcSet={Reddit} alt="" /></div>
                <div className={cx("partner-item")}><img srcSet={Amazon} alt="" /></div>
                <div className={cx("partner-item")}><img srcSet={Discord} alt="" /></div>
                <div className={cx("partner-item")}><img srcSet={Spotify} alt="" /></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Partner;
