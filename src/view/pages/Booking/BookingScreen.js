import styles from "./BookingStyles.module.scss";
import classNames from "classnames/bind";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownLong,
  faArrowRight,
  faArrowUpLong,
  faMagnifyingGlass,
  faSearchDollar,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input";
const cx = classNames.bind(styles);

const BookingScreen = () => {
  return (
    <section className={cx("BookingScreen")}>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("direction-heading")}>
            <span className={cx("main-direction")}>Home</span>
            <FontAwesomeIcon icon={faArrowRight} />
            <span className={cx("second-direction")}>Booking</span>
            <FontAwesomeIcon icon={faArrowRight} />
            <span className={cx("third-direction")}>Education</span>
          </div>
          <div className={cx("searching-heading")}>
            <div className={cx("searching-key")}>
              <input
                placeholder="Searching-key"
                className={cx("searching-input")}
              />
              <span>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            </div>
            <div className={cx("gender")}>
              <select for="gender">
                <option value="" disabled selected>
                  Gender
                </option>
                <option value="">Female</option>
                <option value="">Male</option>
                <option value="">Others</option>
              </select>
            </div>
            <div className={cx("career")}>
              <select for="career">
                <option value="" disabled selected>
                  Career
                </option>
                <option value="">Education</option>
                <option value="">Software Engineer</option>
                <option value="">Beauty</option>
              </select>
            </div>
            <div className={cx("min")}>
              <Button
                className={cx("btn-cost")}
                rightIcon={<FontAwesomeIcon icon={faArrowDownLong} />}
              >
                Min cost
              </Button>
            </div>
            <div className={cx("max")}>
              <Button
                className={cx("btn-cost")}
                rightIcon={<FontAwesomeIcon icon={faArrowUpLong} />}
              >
                Max cost
              </Button>
            </div>
            <div className={cx("btn-search")}>
              <Button primary={true}>Search</Button>
            </div>
          </div>
          <h2 className={cx("")}>Education</h2>
          <div className={cx("content")}>
            <div className={cx("card")}>
              <img
                className={cx("card-image")}
                src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/332058588_1196678770964160_70883119882328451_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DPOVGuqeGFcAX9zqcQH&_nc_ht=scontent.fdad1-3.fna&oh=00_AfBudp3bIwDOu9Mnt3-zN36EwLyJh9jpOS-DiFnVxAZqhA&oe=6405635A"
                alt="avt"
              />
              <Button className={cx("card-middle")} primary={true}>
                View
              </Button>
              <h3>Khanh Linh</h3>
              <p className={cx("title")}>CEO & Founder</p>
              <p>Experience: 2 years</p>
              <p>Address: Da nang city</p>
              <p>Tall: 1m55 Weight: 50kg</p>
            </div>
            <div className={cx("card")}>
              <img
                className={cx("card-image")}
                src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/332058588_1196678770964160_70883119882328451_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DPOVGuqeGFcAX9zqcQH&_nc_ht=scontent.fdad1-3.fna&oh=00_AfBudp3bIwDOu9Mnt3-zN36EwLyJh9jpOS-DiFnVxAZqhA&oe=6405635A"
                alt="avt"
              />
              <Button className={cx("card-middle")} primary={true}>
                View
              </Button>
              <h3>Khanh Linh</h3>
              <p className={cx("title")}>CEO & Founder</p>
              <p>Experience: 2 years</p>
              <p>Address: Da nang city</p>
              <p>Tall: 1m55 Weight: 50kg</p>
            </div>
            <div className={cx("card")}>
            <img
              className={cx("card-image")}
              src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/332058588_1196678770964160_70883119882328451_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DPOVGuqeGFcAX9zqcQH&_nc_ht=scontent.fdad1-3.fna&oh=00_AfBudp3bIwDOu9Mnt3-zN36EwLyJh9jpOS-DiFnVxAZqhA&oe=6405635A"
              alt="avt"
            />
            <Button className={cx("card-middle")} primary={true}>
              View
            </Button>
            <h3>Khanh Linh</h3>
            <p className={cx("title")}>CEO & Founder</p>
            <p>Experience: 2 years</p>
            <p>Address: Da nang city</p>
            <p>Tall: 1m55 Weight: 50kg</p>
          </div>
          <div className={cx("card")}>
          <img
            className={cx("card-image")}
            src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/332058588_1196678770964160_70883119882328451_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DPOVGuqeGFcAX9zqcQH&_nc_ht=scontent.fdad1-3.fna&oh=00_AfBudp3bIwDOu9Mnt3-zN36EwLyJh9jpOS-DiFnVxAZqhA&oe=6405635A"
            alt="avt"
          />
          <Button className={cx("card-middle")} primary={true}>
            View
          </Button>
          <h3>Khanh Linh</h3>
          <p className={cx("title")}>CEO & Founder</p>
          <p>Experience: 2 years</p>
          <p>Address: Da nang city</p>
          <p>Tall: 1m55 Weight: 50kg</p>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BookingScreen;
//
