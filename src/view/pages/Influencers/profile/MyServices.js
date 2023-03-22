import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
const cx = classNames.bind(styles);

const MyServices = (service) => {
  return (
    <div>
      <section className={cx("boost")}>
        <div className={cx("container")}>
          <div className={cx("boost-header")}>
            <h2 className={cx("boost-heading", "same-heading")}>My Services</h2>
          </div>
          <div className={cx("boost-list")}>
            {Object.values(service).map((datas) =>
              datas.map((data, index) => (
                <div className={cx("boost-item")}>
                  <h3 className={cx("boost-title")}>{data.name}</h3>
                  <p className={cx("text", "text-medium")}>
                    {data.description}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default MyServices;
