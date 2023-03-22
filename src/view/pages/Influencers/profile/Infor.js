import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
import { useState } from "react";
const cx = classNames.bind(styles);

const Infor = (prop) => {
  const [data, setData] = useState(prop.info);
  return (
    <div>
      <section className={cx("boost")}>
        <div className={cx("container")}>
          <div className={cx("boost-header")}>
            <h2 className={cx("boost-heading", "same-heading")}>
              {data.title_for_job}
            </h2>
            <p className={cx("boost-text", "text", "text-medium")}>
              {data.content_topic}
            </p>
          </div>
          <div className={cx("boost-list")}>
            <div className={cx("boost-item")}>
              <h3 className={cx("boost-title")}>Name</h3>
              <p className={cx("text", "text-medium")}>{data.fullname}</p>
              <h3 className={cx("boost-title")}>Phone</h3>
              <p className={cx("text", "text-medium")}>{data.phone_number}</p>
            </div>
            <div className={cx("boost-item")}>
              <h3 className={cx("boost-title")}>Email</h3>
              <p className={cx("text", "text-medium")}>{prop.email}</p>
              <h3 className={cx("boost-title")}>Age</h3>
              <p className={cx("text", "text-medium")}>{data.dob}</p>
            </div>
            <div className={cx("boost-item")}>
              <h3 className={cx("boost-title")}>job</h3>
              <p className={cx("text", "text-medium")}>{data.job}</p>
              <h3 className={cx("boost-title")}>City</h3>
              <p className={cx("text", "text-medium")}>{data.address_line4}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Infor;
