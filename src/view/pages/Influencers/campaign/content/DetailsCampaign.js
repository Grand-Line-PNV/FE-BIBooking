import { Link, useParams, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import Button from "../../../../../components/Button/Button";
import styles from "./DetailCampaignStyles.module.scss";
import { getDetailsCampaignBrand } from "../../../../../api/brand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBan,
  faHashtag,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { createBookingCampaignInfluencer } from "../../../../../api/influencer";
import PreLoader from "../../../../../components/preLoader/PreLoader";

const cx = classNames.bind(styles);

const DetailCampaignInfluencer = () => {
  let { id } = useParams();
  const influencer_id = localStorage.getItem("account_id");
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [campaign, setCampaign] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

  const getData = async () => {
    const result = await getDetailsCampaignBrand(id);
    setCampaign(result.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleBooking = async () => {
    try {
      setIsLoading(true);
      const response = await createBookingCampaignInfluencer({
        campaign_id: campaign.id,
        influencer_id: influencer_id,
      });
      navigation("/influencer/task");
    } catch (error) {
      setIsLoading(false);
      console.error("Error booking campaign: ", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={cx("card")}>
      {isLoading ? <PreLoader /> : <></>}
      <div className={cx("card__title")}>
        <div className={cx("icon")}>
          <Button primary={true} large={true} to="/influencer/campaign">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        </div>
      </div>
      <div className={cx("card__body")}>
        <div className={cx("half")}>
          <div className={cx("image", "slider")}>
            {campaign.files &&
              campaign.files.map((file, index) => (
                <div
                  className={
                    index === activeIndex ? cx("slide", "active") : "slide"
                  }
                  key={file.id}
                >
                  <img src={file.url} loading="lazy" width={440} height={300} />
                </div>
              ))}
          </div>
        </div>
        <div className={cx("half")}>
          <p className={cx("heading-small")}>Campaign Name: {campaign.name}</p>
          <div>
            <p className={cx("heading-small")}>Require</p>
            {campaign && campaign.require && (
              <p className={cx("text", "text-medium")}>
                {campaign.require.replace(/(.{500})..+/, "$1....")}
              </p>
            )}
          </div>
          <div className={cx("price-campaign")}>
            <p className={cx("heading-small")}>Price:</p>
            <p className={cx("text", "text-medium")}>{campaign.price} VND</p>
          </div>
          <div>
            <p className={cx("heading-small")}>Description</p>
            {campaign && campaign.description && (
              <p className={cx("text", "text-medium")}>
                {campaign.description.replace(/(.{500})..+/, "$1....")}
              </p>
            )}
          </div>
          <div>
            {campaign.campaign_status &&
              campaign.campaign_status.split(",").map((channel) => {
                let icon;
                if (channel === "apply") {
                  icon = (
                    <span className={cx("stock", "text", "text-small")}>
                      <FontAwesomeIcon
                        icon={faTasks}
                        color="#3b5999"
                        style={{ fontSize: "32" }}
                      />
                      <p>Recruiting</p>
                    </span>
                  );
                } else if (channel === "closed") {
                  icon = (
                    <span className={cx("stock", "text", "text-small")}>
                      <FontAwesomeIcon
                        icon={faBan}
                        color="#ff0000"
                        style={{ fontSize: "32" }}
                      />
                      <p>Recruitment Expiration</p>
                    </span>
                  );
                }
                return <div key={channel}>{icon}</div>;
              })}
          </div>
          <div className={cx("icon-socialChannel")}>
            <p className={cx("heading-small")}>Campaign platform: </p>
            {campaign.socialChannel &&
              campaign.socialChannel.split(",").map((channel) => {
                let icon;
                if (channel === "facebook") {
                  icon = (
                    <FontAwesomeIcon
                      icon={faFacebookSquare}
                      color="#3b5999"
                      style={{ fontSize: "32" }}
                    />
                  );
                } else if (channel === "instagram") {
                  icon = (
                    <FontAwesomeIcon
                      icon={faYoutube}
                      color="#ff0000"
                      style={{ fontSize: "32" }}
                    />
                  );
                } else if (channel === "tiktok") {
                  icon = (
                    <FontAwesomeIcon
                      icon={faInstagram}
                      color="#e4405f"
                      style={{ fontSize: "32" }}
                    />
                  );
                } else if (channel === "youtube") {
                  icon = (
                    <FontAwesomeIcon
                      icon={faTiktok}
                      color="#000000"
                      style={{ fontSize: "32" }}
                    />
                  );
                }
                return <div key={channel}>{icon}</div>;
              })}
          </div>
          <div className={cx("hasgtag", "text", "text-small")}>
            <FontAwesomeIcon
              icon={faHashtag}
              color="#000000"
              style={{ fontSize: "32" }}
            />
            <p>{campaign.hashtag}</p>
          </div>
          <p className={cx("heading-small")}>
            Start from: {campaign.started_date}
          </p>
        </div>
      </div>
      <div className={cx("card__footer")}>
        <Button primary={true} large={true} onClick={handleBooking}>
          Apply
        </Button>
      </div>
    </div>
  );
};
export default DetailCampaignInfluencer;
