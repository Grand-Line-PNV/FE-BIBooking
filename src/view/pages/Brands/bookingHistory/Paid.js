import React, { useEffect } from "react";
import styles from "./BookingHistory.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import useFormData from "../../../../hooks/useFormData";
import { getTaskBrand } from "../../../../api/brand";

const cx = classNames.bind(styles);
const PaidBrand = () => {
  const brand_id = localStorage.getItem("account_id");
  const { data, setData } = useFormData({});

  const getData = async () => {
    const result = await getTaskBrand(brand_id);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={cx("nav-editProfile")}>
      <div className={cx("tasks-column")}>
        <div className={cx("tasks-column-heading")}>
          <h2 className={cx("tasks-column-heading__title")}>Booking</h2>
          <button className={cx("tasks-column-heading__options")}>
            <i className="fas fa-ellipsis-h" />
          </button>
        </div>
        {data.length &&
          data.map((item, index) => {
            let status;
            if (item.status === "paid") {
              status = (
                <Link to={`/brand/booking-history-detail/${item.id}`}>
                  <div key={index} className={cx("task")} draggable="true">
                    <div className={cx("task__tags")}>
                      <img
                        className={cx("avatar")}
                        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                        alt="avatar"
                      />
                      <span
                        className={cx(
                          "task__tag",
                          "task__tag--illustration",
                          "text"
                        )}
                      >
                        {item.influencer.username}
                      </span>
                    </div>
                    <p>{item.campaign.name}</p>
                    <div className={cx("task__stats")}>
                      <span>{item.campaign.ended_date}</span>
                      <span className={cx("task__status-paid")} />
                    </div>
                  </div>
                </Link>
              );
            }
            return <div key={index}>{status}</div>;
          })}
      </div>
    </div>
  );
};

export default PaidBrand;
