import React, { useState } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import styles from "./NotifyLayout.module.scss";
import classNames from "classnames/bind";
import NotificationItem from "../../components/Notification";

window.Pusher = require("pusher-js");
window.Echo = new Echo({
  broadcaster: "pusher",
  key: process.env.REACT_APP_PUSHER_APP_KEY,
  cluster: process.env.REACT_APP_PUSHER_APP_CLUSTER,
  encrypted: true,
});
window.Echo.channel("booking-notifications").listen(
  "booking-notifications-event",
  (data) => {
    console.log(data.message);
    // Xử lý thông báo ở đây
  }
);
const cx = classNames.bind(styles);

const Notify = ({ onClose }) => {
  const idUser = localStorage.getItem("account_id");
  const [notifications, setNotifications] = useState([]);

  return (
    <div className={cx("modal-container")} id="modal-opened">
      {notifications.map((notification) => (
        <div key={notification.id}>{notification.content}</div>
      ))}
      <div className={cx("modal")}>
        <div className={cx("modal__details")}>
          <h1 className={cx("modal__title")}>Notification</h1>
        </div>

        <div className={cx("modal__body")}>
          <NotificationItem
            name={"B&I Booking"}
            content={"Beautifull"}
            time={"2h"}
          />
        </div>

        <a href="#modal-closed" className={cx("link-2")} onClick={onClose}></a>
      </div>
    </div>
  );
};

export default Notify;
