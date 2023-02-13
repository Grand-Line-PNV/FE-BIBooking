import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
const cx = classNames.bind(styles);

const GenderRatio = () => {
  return (
    <section className={cx("inner","genderRatio")}>
      <div className={cx("container")}>
        <div className={cx("genderRatio-container")}>
          <h2 className={cx("heading")}>Gender Ratio</h2>
          <div className={cx("content")}>
            <div>
              <h5>Male</h5>
              <h3>29%</h3>
            </div>
            <div>
              <h5>Female</h5>
              <h3>51%</h3>
            </div>
            <div>
              <h5>Others</h5>
              <h3>20%</h3>
            </div>
          </div>
          <h2 className={cx("heading")}>Top 3 cities</h2>
          <div className={cx("content")}>
            <div>
              <h5>Ha Noi</h5>
              <h3>19%</h3>
            </div>
            <div>
              <h5>Ho Chi Minh</h5>
              <h3>23%</h3>
            </div>
            <div>
              <h5>Da Nang</h5>
              <h3>47%</h3>
            </div>
            <div>
              <h5>Others</h5>
              <h3>11%</h3>
            </div>
          </div>
          <h2 className={cx("heading")}>Top 3 ages</h2>
          <div className={cx("content")}>
            <div>
              <h5>18-24</h5>
              <h3>44%</h3>
            </div>
            <div>
              <h5>25-34</h5>
              <h3>29%</h3>
            </div>
            <div>
              <h5>35-44</h5>
              <h3>22%</h3>
            </div>
            <div>
              <h5>Others</h5>
              <h3>1%</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GenderRatio;
