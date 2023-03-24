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
              No notification
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
