import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
const cx = classNames.bind(styles);

const GenderRatio = (audienceData) => {
 
  return (
    <section className={cx("inner", "genderRatio")}>
      <div className={cx("container")}>
        <div className={cx("genderRatio-container")}>
          {Object.values(audienceData).map((data,index) => (
            <>
              <h2 className={cx("heading")}>Gender Ratio</h2>
              <div className={cx("content")}>
                <div>
                  <h5>Male</h5>
                  <h3>{data.male}%</h3>
                </div>
                <div>
                  <h5>Female</h5>
                  <h3>{data.female}%</h3>
                </div>
                <div>
                  <h5>Others</h5>
                  <h3>{data.others}%</h3>
                </div>
              </div>
              <h2 className={cx("heading")}>Top 3 cities</h2>
              <div className={cx("content")}>
                <div>
                  <h5>Ha Noi</h5>
                  <h3>{data.city1}%</h3>
                </div>
                <div>
                  <h5>Ho Chi Minh</h5>
                  <h3>{data.city2}%</h3>
                </div>
                <div>
                  <h5>Da Nang</h5>
                  <h3>{data.city3}%</h3>
                </div>
                <div>
                  <h5>Others</h5>
                  <h3>{data.city4}%</h3>
                </div>
              </div>
              <h2 className={cx("heading")}>Top 3 ages</h2>
              <div className={cx("content")}>
                <div>
                  <h5>18-24</h5>
                  <h3>{data.age1}%</h3>
                </div>
                <div>
                  <h5>25-34</h5>
                  <h3>{data.age2}%</h3>
                </div>
                <div>
                  <h5>35-44</h5>
                  <h3>{data.age3}%</h3>
                </div>
                <div>
                  <h5>Others</h5>
                  <h3>{data.age4}%</h3>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};
export default GenderRatio;
