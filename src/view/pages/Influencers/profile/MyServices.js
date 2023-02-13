import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
const cx = classNames.bind(styles);

const MyServices = () => {
  return (
    <section className={cx("inner","myServices")}>
      <div className={cx("container")}>
        <div className={cx("myServices-container")}>
          <div className={cx("content")}>
            <h2 className={cx("heading")}>My Services</h2>
            <div className={cx("services")}>
              <div>
                <div className={cx("service")}>
                  <div className={cx("service-point")}></div>
                  <div>
                    <h4>Edit image</h4>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing 
                      and typesetting industry.
                    </span>
                  </div>
                </div>
                <div className={cx("service")}>
                  <div className={cx("service-point")}></div>
                  <div>
                    <h4>Create a video</h4>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing 
                      and typesetting industry.
                    </span>
                  </div>
                </div>
                <div className={cx("service")}>
                  <div className={cx("service-point")}></div>
                  <div>
                    <h4>Writen content</h4>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing 
                      and typesetting industry.
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className={cx("service")}>
                  <div className={cx("service-point")}></div>
                  <div>
                    <h4>Model</h4>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing 
                      and typesetting industry.
                    </span>
                  </div>
                </div>
                <div className={cx("service")}>
                  <div className={cx("service-point")}></div>
                  <div>
                    <h4>Post story</h4>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing 
                      and typesetting industry.
                    </span>
                  </div>
                </div>
                <div className={cx("service")}>
                  <div className={cx("service-point")}></div>
                  <div>
                    <h4>Post status</h4>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing 
                      and typesetting industry.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyServices;
