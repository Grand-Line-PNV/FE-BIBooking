import classNames from "classnames/bind";
import styles from "./Notification.module.scss";

const cx = classNames.bind(styles);

const NotificationItem = ({ name, content, time, avatar }) => {

  return (
    <div className={cx('container')}>
      <div className={cx("avatar")}>
        <img className={cx('img')} src={avatar || "https://kinhtechungkhoan.vn/stores/news_dataimages/thuuyen/042022/18/06/in_article/4704_giaxe.jpg?rt=20220418064708"} alt={name} />
      </div>
      <div className={cx("body")}>
        <div className={cx("name")}>{name}</div>
        <div className={cx("content")}>{content}</div>
        <div className={cx("date-time")}>{time}</div>
      </div>
    </div>
  )

}

export default NotificationItem