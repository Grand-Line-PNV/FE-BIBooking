import React from "react";
import styles from "./NotifyLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Notify = ({ onClose }) => {
  console.log('Tu an com ca');
  return (
    <div className={cx("modal-container")} id="modal-opened">
      <div className={cx("modal")}>

        <div className={cx("modal__details")}>
          <h1 className={cx("modal__title")}>Notification</h1>
          {/* <p className={cx("modal__description")}>Sentence that will tell user what this modal is for or something.</p> */}
        </div>

        <p className={cx("modal__text")}>Add new</p>

        {/* <button class="modal__btn">Button &rarr;</button> */}

        <a href="#modal-closed" className={cx("link-2")} onClick={onClose}></a>

      </div>
    </div>

  );
};

export default Notify;
