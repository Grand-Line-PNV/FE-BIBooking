import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
const cx = classNames.bind(styles);
const Infor = () => {
  return (
    <section className={cx("inner","infor")}>
      <div className={cx("container")}>
        <div className={cx("infor-container")}>
          <div className={cx("content")}>
            <h2 className={cx("heading")}>I am creative web developer</h2>
            <div className={cx("infor-desc")}>
              <p>
                Your future client wants to know about you before they hire. Put
                some more information about yourself. For example, I provide
                cost-effective and high quality products to meet my Clients’
                needs and so on.
              </p>
            </div>
            <div className={cx("infor-detail")}>
          <div>
            <div className={cx("label-infor")}>
              <label>Name:</label>
              <h4>Khanh Linh</h4>
            </div>
            <div className={cx("label-infor")}>
              <label>Phone:</label>
              <h4>+84 854 301 907</h4>
            </div>
          </div>
          <div>
            <div className={cx("label-infor")}>
              <label>Email:</label>
              <h4>linh.nguyenthikhanh02@gmail.com</h4>
            </div>
            <div className={cx("label-infor")}>
              <label>Job:</label>
              <h4>Web Developer</h4>
            </div>
          </div>
          <div>
            <div className={cx("label-infor")}>
              <label>Age:</label>
              <h4>20 years</h4>
            </div>
            <div className={cx("label-infor")}>
              <label>From:</label>
              <h4>Vietnam</h4>
            </div>
          </div>
        </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};
export default Infor;
