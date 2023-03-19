import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import classNames from "classnames/bind";
import NotificationItem from "../../components/Notification";
import styles from "./NotifyLayout.module.scss";

const cx = classNames.bind(styles);

const pusher = new Pusher("34a8a1d793cabdf7f977", {
  cluster: "sa1",
});

const Notify = ({ onClose }) => {
  const idUser = localStorage.getItem("account_id");
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const getPusher = async () => {
      const socketId = await pusher.connection.socket_id;
      const uid = localStorage.getItem("account_id");

      console.log("socketId", uid);
      pusher.subscribe(`booking-notifications.${uid}`).bind("booking-notifications-event", (event) => {
        console.log(`Event received at ${event.data}: ${event}`);
        setNotifications((prevNotifications) => [
          ...prevNotifications,
          event.data,
        ]);
        console.log("ádsd");
        // LocalNotification(
        //   "New notification",
        //   "Next is the event data",
        //   event,
        //   undefined,
        //   new Date(event.data.time)
        // );
      });
    };
    getPusher();
  }, []);

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
