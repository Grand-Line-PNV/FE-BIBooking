import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
const cx = classNames.bind(styles);

const ProfileCampaignJoined = () => {
  return (
    <section className={cx("campaignJoined")}>
      <div className={cx("container")}>
        <div className={cx("campaignJoined-container")}>
          <h2 className={cx("heading")}>Campaign joined</h2>
          <p style={{textAlign: "center"}}>
            There are many variations of passages of lorem lpsum available, but
            the majority have suffered alteraction
          </p>
          <div className={cx("content")}>
            <div className={cx("campaigns")}>
              <div className={cx("campaign")}>
                <img src="https://iili.io/HEoDkvI.png" alt="campaign" />
                <div>
                  <div className={cx("campaign-body")}>
                    <div className={cx("campaign-brand")}>
                      <FontAwesomeIcon icon={faFire} />
                      <span style={{ marginLeft: "5px" }}>Jack Wilson</span>
                    </div>
                    <div className={cx("campaign-date")}>
                      <FontAwesomeIcon icon={faCalendarDays} />
                      <span style={{ marginLeft: "5px" }}>6th June 2023</span>
                    </div>
                  </div>
                </div>
                <h3 className={cx("campaign-title")}>
                  Create videos and written content for products
                </h3>
              </div>
            </div>
            <div className={cx("campaigns")}>
              <div className={cx("campaign")}>
                <img src="https://iili.io/HEIrVa9.png" alt="campaign" />
                <div>
                  <div className={cx("campaign-body")}>
                    <div className={cx("campaign-brand")}>
                      <FontAwesomeIcon icon={faFire} />
                      <span style={{ marginLeft: "5px" }}>Jack Wilson</span>
                    </div>
                    <div className={cx("campaign-date")}>
                      <FontAwesomeIcon icon={faCalendarDays} />
                      <span style={{ marginLeft: "5px" }}>6th June 2023</span>
                    </div>
                  </div>
                </div>
                <h3 className={cx("campaign-title")}>
                  Create videos and written content for products
                </h3>
              </div>
            </div>
            <div className={cx("campaigns")}>
              <div className={cx("campaign")}>
                <img src="https://iili.io/HEIrWve.png" alt="campaign" />
                <div>
                  <div className={cx("campaign-body")}>
                    <div className={cx("campaign-brand")}>
                      <FontAwesomeIcon icon={faFire} />
                      <span style={{ marginLeft: "5px" }}>Jack Wilson</span>
                    </div>
                    <div className={cx("campaign-date")}>
                      <FontAwesomeIcon icon={faCalendarDays} />
                      <span style={{ marginLeft: "5px" }}>6th June 2023</span>
                    </div>
                  </div>
                </div>
                <h3 className={cx("campaign-title")}>
                  Create videos and written content for products
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProfileCampaignJoined;
