import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
import { useState } from "react";
const cx = classNames.bind(styles);
const Infor = (prop) => {
  const[data,setData] = useState(prop.info)
  return (
    <section className={cx("inner","infor")}>
      <div className={cx("container")}>
        <div className={cx("infor-container")}>
          <div className={cx("content")}>
            <h2 className={cx("heading")}>{data.title_for_job}</h2>
            <div className={cx("infor-desc")}>
              <p>
                {data.content_topic}
              </p>
            </div>
            <div className={cx("infor-detail")}>
          <div>
            <div className={cx("label-infor")}>
              <label>Name:</label>
              <h4>{data.fullname}</h4>
            </div>
            <div className={cx("label-infor")}>
              <label>Phone:</label>
              <h4>{data.phone_number}</h4>
            </div>
          </div>
          <div>
            <div className={cx("label-infor")}>
              <label>Email:</label>
              <h4>{prop.email}</h4>
            </div>
            <div className={cx("label-infor")}>
              <label>Job:</label>
              <h4>{data.job}</h4>
            </div>
          </div>
          <div>
            <div className={cx("label-infor")}>
              <label>Age:</label>
              <h4>{data.dob}</h4>
            </div>
            <div className={cx("label-infor")}>
              <label>City:</label>
              <h4>{data.address_line4}</h4>
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
