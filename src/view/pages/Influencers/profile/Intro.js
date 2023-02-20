import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
import Button from "../../../../components/Button/Button";
const cx = classNames.bind(styles);
const Intro = () => {
  return (
    <div>
      <section className={cx("inner","intro")}>
        <div className={cx("container")}>
          <div className={cx("intro-container")}>
            <div className={cx("content")}>
              <h2 className={cx("intro-heading", "heading")}>Hello I'am Khanh Linh</h2>
              <div className={cx("intro-desc")}>
                <h4>I am a Web Developer</h4>
                <p>
                  Put your intro here. For example, I am a "Web developer or
                  whatever your profession is" with 5 years of experience. In a
                  Personal Portfolio website, this part attracts your
                  prospective clients most.
                </p>
                <Button primary={true} className={cx("intro-button")}>Contact now</Button>
              </div>
            </div>

            <div className={cx("intro-image")}>
            <img className={cx("image-avatar")}
                src="https://iili.io/HEHPLox.md.jpg"
                alt="HE9kxVe.png"
                border="0"
              ></img>
            <img className={cx("image-background")}
            src="https://iili.io/HEJFxol.png" alt=""/>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Intro;
