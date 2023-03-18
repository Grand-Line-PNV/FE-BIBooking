import React, { useState, useEffect } from "react";
import styles from "./TaskLayout.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import useFormData from "../../../../hooks/useFormData";
import { getTaskInfluencer } from "../../../../api/influencer";

const cx = classNames.bind(styles);
const InProgressInfluencer = () => {
  const influencer_id = localStorage.getItem("account_id");
  const { data, setData } = useFormData({});

  const getData = async () => {
    const result = await getTaskInfluencer(influencer_id);
    setData(result.data.data);
    console.log(result.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={cx("nav-editProfile")}>
      <div className={cx("tasks-column")}>
        <div className={cx("tasks-column-heading")}>
          <h2 className={cx("tasks-column-heading__title")}>In Progress</h2>
          <button className={cx("tasks-column-heading__options")}>
            <i className="fas fa-ellipsis-h" />
          </button>
        </div>
        {data.length &&
          data.map((item, index) => {
            let status;
            if (item.status === "in_progress") {
              status = (
                <Link to={`/influencer/booking-history-detail/${item.id}`}>
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
                        {item.campaign.brand.username}
                      </span>
                    </div>
                    <p>{item.campaign.name}</p>
                    <div className={cx("task__stats")}>
                      <span>{item.updated_at}</span>
                      <span className={cx("task__status-progress")} />
                    </div>
                  </div>
                </Link>
              );
            } else {
              status = <div className={cx("status")}>No task in_progress
              ......</div>;
            }
            return <div key={index}>{status}</div>;
          })}
      </div>
    </div>
  );
};

export default InProgressInfluencer;
