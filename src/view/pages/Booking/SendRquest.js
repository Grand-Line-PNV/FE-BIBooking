import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input";
import styles from "./BookingStyles.module.scss";
const cx = classNames.bind(styles);

const SendRequest = () => {
  return (
    <main className={cx("wrapper")}>
      <div className={cx("sendRequest")}>
        <div className={cx("container")}>
          <img
            src="https://iili.io/HW3LaBR.md.png"
            alt=""
            className={cx("image")}
          />
          <div className={cx("background-white")}>
          <div className={cx("form")}>
            <h3 className={cx("title")}>Nguyen Thi Khanh Linh</h3>
            <p>I am here for you! How can I help?</p>
            <div className={cx("content")}>
              <Input
                title="Name"
                placeholder="Enter your brand name..."
                primary={true}
                medium={true}
                className={cx("input")}
              />
              <Input
                title="Email"
                placeholder="Enter your brand email..."
                primary={true}
                medium={true}
                className={cx("input")}
              />
              <lable>Your Campaign</lable>
              <br />
              <select className={cx("select")}>
                <option disabled selected>
                  Choose your campaign
                </option>

                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <br />
              <div className={cx("btn")}>
                <Button primary={true}>Submit</Button>
              </div>
            </div>
          </div>
          <div className={cx("information")}>
            <img src="https://iili.io/HWFJidb.png" />
            <div className={cx("content")}>
              <div className={cx("address")}>
              <span className={cx("icon")}><FontAwesomeIcon icon={faLocationDot}/></span>
              <span>101B Le Huu Trac, Phuoc My, Son Tra, Da Nang</span>
              </div>
              <div className={cx("phone")}>
              <span className={cx("icon")}><FontAwesomeIcon icon={faPhone}/></span>
              <span>0854 301 907</span>
              </div>
              <div className={cx("email")}>
              <span className={cx("icon")}><FontAwesomeIcon icon={faEnvelope}/></span>
              <span>linh.nguyenthikhanh02@gmail.com</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default SendRequest;
