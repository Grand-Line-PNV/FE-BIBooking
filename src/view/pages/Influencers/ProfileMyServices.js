import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
const cx = classNames.bind(styles);

const ProfileMyServices = () => {
  return (
    <section className={cx("myServices")}>
      <div className={cx("container")}>
        <div className={cx("myServices-container")}>
          <div className={cx("content")}>
            <h2 className={cx("heading")}>My Services</h2>
            <div className={cx("services")}>
              <div>
                <div>
                  <h4>Edit image</h4>
                  Lorem Ipsum is simply dummy text of the printing <br/>and
                  typesetting industry.                </div>
                <div>
                  <h4>Edit image</h4>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing <br/>and
                    typesetting industry.
                  </span>
                </div>
                <div>
                  <h4>Edit image</h4>
                  Lorem Ipsum is simply dummy text of the printing <br/>and
                  typesetting industry.                </div>
              </div>
              <div>
                <div>
                  <h4>Edit image</h4>
                  Lorem Ipsum is simply dummy text of the printing <br/>and
                  typesetting industry.                </div>
                <div>
                  <h4>Edit image</h4>
                  Lorem Ipsum is simply dummy text of the printing <br/>and
                  typesetting industry.                </div>
                <div>
                  <h4>Edit image</h4>
Lorem Ipsum is simply dummy text of the printing <br/>and
                    typesetting industry.                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProfileMyServices;
