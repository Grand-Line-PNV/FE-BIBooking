import React, { useState, useEffect } from "react";
import styles from "./BookingHistoryLayout.module.scss";
import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";
import WaitingBrand from "../../view/pages/Brands/bookingHistory/Waiting";
import InProgressBrand from "../../view/pages/Brands/bookingHistory/InProgress";
import DoneBrand from "../../view/pages/Brands/bookingHistory/Done";
import RejectBrand from "../../view/pages/Brands/bookingHistory/Reject";
import PreLoader from "../../components/preLoader/PreLoader";
import PaidBrand from "../../view/pages/Brands/bookingHistory/Paid";

const cx = classNames.bind(styles);
const BookingHistoryLayout = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <div className={cx("task-brand")}>
      <main className={cx("tasks")}>
        <div className={cx("tasks-info")}>
          <h1>Brand's Task management</h1>
          <div className={cx("tasks-participants")}>
            <button className={cx("tasks-participants__add")}>
              Add Participant
            </button>
          </div>
        </div>
        <div className={cx("tasks-tasks")}>
          <WaitingBrand />
          <PaidBrand />
          <InProgressBrand />
          <DoneBrand />
          <RejectBrand />
        </div>
      </main>
      {isLoading ? <PreLoader /> : <></>}
    </div>
  );
};

export default BookingHistoryLayout;
