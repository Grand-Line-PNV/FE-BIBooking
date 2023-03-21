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
    <section className={cx("inner", "campaignJoined")}>
      <div className={cx("container")}>
        <div className={cx("campaignJoined-container")}>
          <h2 className={cx("heading")}>Campaign joined</h2>
          <p style={{ textAlign: "center" }}>
            There are many variations of passages of lorem lpsum available, but
            the majority have suffered alteraction
          </p>
          <div className={cx("content")}>
            {data.length &&
              data.map((item, index) => {
                if (item.status !== "done") {
                  return null;
                }
                return (
                  <div className={cx("campaigns")} key={index}>
                    <div className={cx("campaign")}>
                      <img src="https://iili.io/HEoDkvI.png" alt="campaign" />
                      <div className={cx("campaign-body")}>
                        <div className={cx("campaign-brand")}>
                          <FontAwesomeIcon icon={faFire} />
                          <span style={{ marginLeft: "5px" }}>
                            {item.campaign.brand.username}
                          </span>
                        </div>
                        <div className={cx("campaign-date")}>
                          <FontAwesomeIcon icon={faCalendarDays} />
                          <span style={{ marginLeft: "5px" }}>
                            {item.updated_at}
                          </span>
                        </div>
                      </div>
                      <h3 className={cx("campaign-title")}>
                        {item.campaign.name}
                      </h3>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CampaignJoined;
