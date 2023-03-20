import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
const cx = classNames.bind(styles);

const MyServices = (service) => {
  return (
    <section className={cx("inner", "myServices")}>
      <div className={cx("container")}>
        <div className={cx("myServices-container")}>
          <div className={cx("content")}>
            <h2 className={cx("heading")}>My Services</h2>
            <div className={cx("services")}>
              {Object.values(service).map((datas) =>
                datas.map((data, index) => (
                  <div key={index}>
                    <div className={cx("service")}>
                      <div className={cx("service-point")}></div>
                      <div>
                        <h4>{data.name}</h4>
                        <span>
                          {data.description}
                        </span>
                      </div>
                    </div>
                    
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyServices;
