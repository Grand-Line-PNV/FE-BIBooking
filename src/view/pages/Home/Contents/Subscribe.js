import classNames from "classnames/bind";
import styles from "./HomeStyles.module.scss";
import Button from "../../../../components/Button/Button";
import { HeroImg, HeroBlock1, HeroBlock2 } from "../../../../assets/images";

const cx = classNames.bind(styles);
const Subscribe = () => {
  return (
    <div>
      <section className={cx("subscribe")}>
        <div className={cx("container")}>
          <div className={cx("boxed")}>
            <h2 className={cx("subscribe-heading", "heading-small")}>
            Join Our Comunity
            </h2>
            <h2 className={cx("same-heading")}>
            Subscribe To Our Newsletter
            </h2>
            <p className={cx("subscribe-text", "text")}>
            There are many variations of passages of lorem lpsum available, but the majority have suffered alteraction
            </p>
          </div>
          <div className={cx("subscribe-group")}>
            <input type="email" placeholder="Enter your email..." className={cx("subscribe-input", "text", "text-medium")}/>
            <input type="submit" value="Get Started" className={cx("subscribe-submit", "heading-small")}/>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Subscribe;
