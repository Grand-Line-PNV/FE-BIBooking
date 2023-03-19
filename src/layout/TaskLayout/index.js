import React, { useState, useEffect } from "react";
import styles from "./TaskLayout.module.scss";
import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";
import WaitingInfluencer from "../../view/pages/Influencers/task/Waiting";
import InProgressInfluencer from "../../view/pages/Influencers/task/InProgress";
import DoneInfluencer from "../../view/pages/Influencers/task/Done";
import RejectInfluencer from "../../view/pages/Influencers/task/Reject";
import PreLoader from "../../components/preLoader/PreLoader";
import PaidInfluencer from "../../view/pages/Influencers/task/Paid";
const cx = classNames.bind(styles);

const TasksLayout = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <div className={cx("task-brand")}>
      <main className={cx("tasks")}>
        <div className={cx("tasks-info")}>
          <h1>Influencer's Task</h1>
          <div className={cx("tasks-participants")}>
            <button className={cx("tasks-participants__add")}>
              Add Participant
            </button>
          </div>
        </div>
        <div className={cx("tasks-tasks")}>
          <WaitingInfluencer />
          <PaidInfluencer />
          <InProgressInfluencer />
          <DoneInfluencer />
          <RejectInfluencer />
        </div>
      </main>
      {isLoading ? <PreLoader /> : <></>}
    </div>
  );
};

export default TasksLayout;
