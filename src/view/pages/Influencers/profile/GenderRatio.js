import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
import { ChartImg, ChartImg1, ChartImg2 } from "../../../../assets/images";
const cx = classNames.bind(styles);

const GenderRatio = (audienceData) => {
  return (
    <div>
      <section className={cx("boost")}>
        <div className={cx("container")}>
          {Object.values(audienceData).map((data, index) => (
            <div className={cx("boost-list")}>
              <div className={cx("boost-item")}>
                <h2 className={cx("heading")}>Gender Ratio</h2>
                <h3 className={cx("boost-title")}>Male</h3>
                <p className={cx("text", "text-medium")}>{data.male}%</p>
                <h3 className={cx("boost-title")}>Female</h3>
                <p className={cx("text", "text-medium")}>{data.female}%</p>
                <h3 className={cx("boost-title")}>Others</h3>
                <p className={cx("text", "text-medium")}>{data.others}%</p>
                <img src={ChartImg} alt="chart" />
              </div>
              <div className={cx("boost-item")}>
                <h2 className={cx("heading")}>Top 3 cities</h2>

                <h3 className={cx("boost-title")}>Ha Noi</h3>
                <p className={cx("text", "text-medium")}>{data.city1}%</p>
                <h3 className={cx("boost-title")}>Ho Chi Minh</h3>
                <p className={cx("text", "text-medium")}>{data.city2}%</p>
                <h3 className={cx("boost-title")}>Da Nang</h3>
                <p className={cx("text", "text-medium")}>{data.city3}%</p>
                <h3 className={cx("boost-title")}>Others</h3>
                <p className={cx("text", "text-medium")}>{data.city4}%</p>
                <img src={ChartImg1} alt="chart" width="200px" />
              </div>
              <div className={cx("boost-item")}>
                <h2 className={cx("heading")}>Top 3 ages</h2>
                <h3 className={cx("boost-title")}>18-24</h3>
                <p className={cx("text", "text-medium")}>{data.age1}%</p>
                <h3 className={cx("boost-title")}>25-34</h3>
                <p className={cx("text", "text-medium")}>{data.age2}%</p>
                <h3 className={cx("boost-title")}>35-44</h3>
                <p className={cx("text", "text-medium")}>{data.age3}%</p>
                <h3 className={cx("boost-title")}>Others</h3>
                <p className={cx("text", "text-medium")}>{data.age4}%</p>
                <img src={ChartImg2} alt="chart" width="200px" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default GenderRatio;
