// import React, { useState, useEffect } from "react";
// import Pusher from "pusher-js";
// import classNames from "classnames/bind";
// import NotificationItem from "../../components/Notification";
// import styles from "./NotifyLayout.module.scss";
// import Echo from "laravel-echo";

// const cx = classNames.bind(styles);

// const pusher = new Pusher("34a8a1d793cabdf7f977", {
//   cluster: "sa1",
// });

// const Notify = ({ onClose }) => {
//   const idUser = localStorage.getItem("account_id");
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     const getPusher = async () => {
//       const socketId = await pusher.connection.socket_id;
//       const uid = localStorage.getItem("account_id");
//       console.log(socketId);

//       console.log("socketId", uid);
//       pusher
//         .subscribe(`booking-notifications.${uid}`)
//         .bind("booking-notifications-event", (event) => {
//           console.log(`Event received at ${event.data}: ${event}`);
//           setNotifications((prevNotifications) => [
//             ...prevNotifications,
//             event.data,
//           ]);
//           // LocalNotification(
//           //   "New notification",
//           //   "Next is the event data",
//           //   event,
//           //   undefined,
//           //   new Date(event.data.time)
//           // );
//         });
//     };
//     getPusher();
//   }, []);

//   return (
//     <div className={cx("modal-container")} id="modal-opened">
//       {notifications.map((notification) =>
//         notification && notification.message ? (
//           <div key={notification.id}>{notification.message}</div>
//         ) : null
//       )}
//       <div className={cx("modal")}>
//         <div className={cx("modal__details")}>
//           <h1 className={cx("modal__title")}>Notification</h1>
//         </div>

//         <div className={cx("modal__body")}>
//           <NotificationItem
//             name={"B&I Booking"}
//             content={"Beautifull"}
//             time={"2h"}
//           />
//         </div>

//         <a href="#modal-closed" className={cx("link-2")} onClick={onClose}></a>
//       </div>
//     </div>
//   );
// };

// export default Notify;

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { uniqueId } from "lodash";
import Echo from "laravel-echo";
import { useDispatch } from "react-redux";
import moment from "moment";
import "./Notify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

window.Pusher = require("pusher-js");
const echo = new Echo({
  broadcaster: "pusher",
  key: process.env.REACT_APP_PUSHER_APP_KEY,
  cluster: process.env.REACT_APP_PUSHER_APP_CLUSTER,
  forceTLS: true,
});

function Notication(props) {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const refCount = useRef();
  const show = useRef(false);
  const userId = localStorage.getItem("account_id");

  const getNotification = useCallback(() => {
    // implementation here
  }, []);

  useEffect(() => {
    getNotification();
  }, [getNotification]);

  useEffect(() => {
    const channel = echo.channel("booking-notifications");
    channel.listen(".booking-notifications-event", function (res) {
      setData([...data, res.message]);
    });
  }, [data]);

  const NotificationList = () => {
    if (data.length > 0) {
      let number = 0;
      const notificationItems = [];
      data.forEach((item) => {
        console.log(item);
        if (item.userId == userId) {
          number++;
          notificationItems.push(
            <span
              key={uniqueId("notification")}
              className="notification"
              style={{
                display: "flex",
                gap: "10px",
                padding: "15px",
              }}
            >
              <img
                src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon-thumbnail.png"
                alt="avatar"
                width="50px"
                height="50px"
              />
              <span
                style={{
                  textAlign: "start",
                }}
              >
                <p>{item.message}</p>
                <p
                  style={{
                    textAlign: "end",
                  }}
                  className="time"
                >
                  {moment(item.time).format("DD/MM/YYYY")}
                </p>
              </span>
            </span>
          );
        }
      });

      refCount.current.textContent = number;
      return <div>{notificationItems}</div>;
    } else {
      return (
        <li className="itemNotication">
          <section className="content-notication-empty">
            <p className="time"></p>
            <p style={{ marginBottom: 0 }} className="heading-small">
              Không có thông báo mới
            </p>
          </section>
        </li>
      );
    }
  };

  const listNotice = useMemo(() => <NotificationList />, [data]);

  const toggleShow = () => {
    show.current = !show.current;
  };

  const handleMark = () => {
    refCount.current.textContent = 0;
  };

  return (
    <>
      <section className="logo">
      <FontAwesomeIcon
            id="modal-closed"
            icon={faBell}
            color="#f16736"
            onClick={toggleShow}
          />
        <span
          onClick={toggleShow}
          ref={refCount}
          style={{
            position: "absolute",
            cursor: "pointer",
            margin: "0",
            padding: "0",
            marginTop: "15px",
          }}
          className="count"
        >
          
          0
        </span>
        <div
          style={show.current ? { display: "block" } : { display: "none" }}
          className="notification-list"
        >
          <div className="itemNotication">
            <h1 style={{ borderBottom: "3px solid #f16736", padding: "20px" }}>
              B&I Booking
            </h1>
            <section className="content-notication-show">{listNotice}</section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Notication;
