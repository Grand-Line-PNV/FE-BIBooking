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
                <p className={cx("text", "text-medium")}>
                  {data && data.male ? data.male : "_"}%
                </p>
                <h3 className={cx("boost-title")}>Female</h3>
                <p className={cx("text", "text-medium")}>
                  {data && data.female ? data.female : "_"}%
                </p>
                <h3 className={cx("boost-title")}>Others</h3>
                <p className={cx("text", "text-medium")}>
                  {data && data.others ? data.others : "_"}%
                </p>
                <img src={ChartImg} alt="chart" />
              </div>
              <div className={cx("boost-item")}>
                <h2 className={cx("heading")}>Top 3 cities</h2>

                <h3 className={cx("boost-title")}>Ha Noi</h3>
                <p className={cx("text", "text-medium")}>
                  {data && data.city1 ? data.city1 : "_"}%
                </p>
                <h3 className={cx("boost-title")}>Ho Chi Minh</h3>
                <p className={cx("text", "text-medium")}>
                  {data && data.city2 ? data.city2 : "_"}%
                </p>
                <h3 className={cx("boost-title")}>Da Nang</h3>
                <p className={cx("text", "text-medium")}>
                  {data && data.city3 ? data.city3 : "_"}%
                </p>
                <h3 className={cx("boost-title")}>Others</h3>
                <p className={cx("text", "text-medium")}>
                  {data && data.city4 ? data.city4 : "_"}%
                </p>
                <img src={ChartImg1} alt="chart" width="200px" />
              </div>
              <div className={cx("boost-item")}>
                <h2 className={cx("heading")}>Top 3 ages</h2>
                <h3 className={cx("boost-title")}>18-24</h3>
                <p className={cx("text", "text-medium")}>
                  {data && data.age1 ? data.age1 : "_"}%
                </p>
                <h3 className={cx("boost-title")}>25-34</h3>
                <p className={cx("text", "text-medium")}>
                  {data && data.age2 ? data.age2 : "_"}%
                </p>
                <h3 className={cx("boost-title")}>35-44</h3>
                <p className={cx("text", "text-medium")}>
                  {data && data.age3 ? data.age3 : "_"}%
                </p>
                <h3 className={cx("boost-title")}>Others</h3>
                <p className={cx("text", "text-medium")}>
                  {data && data.age4 ? data.age4 : "_"}%
                </p>
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
