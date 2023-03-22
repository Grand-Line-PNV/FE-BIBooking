import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import { getTaskInfluencer } from "../../../../api/influencer";
const cx = classNames.bind(styles);

const CampaignJoined = (campaign) => {
  const influencer_id = localStorage.getItem("account_id");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const getData = async () => {
    const result = await getTaskInfluencer(influencer_id);
    setData(result.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <section className={cx("news", "boost")}>
        <div className={cx("container")}>
          <div className={cx("news-header", "boost-header")}>
            <h2 className={cx("news-heading", "same-heading")}>
              Campaign joined
            </h2>
            <p className={cx("news-text", "text", "text-medium")}>
              There are many variations of passages of lorem lpsum available,
              but the majority have suffered alteraction
            </p>
          </div>
          <div className={cx("news-list", "boost-list")}>
            {data.length &&
              data.map((item, index) => {
                if (item.status !== "done") {
                  return null;
                }
                return (
                  <div className={cx("news-item")}>
                    <div className={cx("news-image")}>
                      <img src="https://iili.io/HEoDkvI.png" alt="campaign" />
                    </div>
                    <div className={cx("news-desc")}>
                      <div className={cx("news-inf")}>
                        <FontAwesomeIcon icon={faFire} />{" "}
                        <p className={cx("text", "text-medium")}>
                          {item.campaign.brand.username}
                        </p>
                      </div>
                      <div className={cx("news-date")}>
                        <FontAwesomeIcon icon={faCalendarDays} />{" "}
                        <p className={cx("text", "text-medium")}>
                          {item.updated_at}
                        </p>
                      </div>
                    </div>
                    <p className={cx("heading-small")}>
                      <b> {item.campaign.name}</b>
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default CampaignJoined;
