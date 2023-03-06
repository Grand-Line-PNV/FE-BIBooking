import React from "react";
import styles from "./NotifyLayout.module.scss";
import classNames from "classnames/bind";
import NotificationItem from '../../components/Notification';

const cx = classNames.bind(styles);

const Notify = ({ onClose }) => {
  return (
    <div className={cx("modal-container")} id="modal-opened">
      <div className={cx("modal")}>

        <div className={cx("modal__details")}>
          <h1 className={cx("modal__title")}>Notification</h1>

        </div>

        <div className={cx("modal__body")}>
          <NotificationItem name={'B&I Booking'} content={'Beautifull'} time={'2h'} />
        </div>

        <a href="#modal-closed" className={cx("link-2")} onClick={onClose}></a>

      </div>
    </div>

  );
};

export default Notify;
