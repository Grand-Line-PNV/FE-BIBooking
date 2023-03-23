import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "../../../assets/SCSS/ShowStyles.module.scss";
import Button from "../../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCalendar,
  faCheck,
  faClose,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import {
  faFacebookSquare,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import PreLoader from "../../preLoader/PreLoader";
import showToast from "../../toast/Toast";
import { closeCampaignBrand } from "../../../api/brand";
const cx = classNames.bind(styles);

const ShowCampaignBrand = ({
  data,
  handleDelete,
  isLoading,
  setIsLoading,
  fetchData,
}) => {
  const navigation = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [filteredItems, setFilteredItems] = useState(data);

  useEffect(() => {
    setFilteredItems(data);
    setIsLoading(false);
  }, [data]);

  const handleCloseCampaign = async (id) => {
    try {
      setIsLoading(true);
      const closed = await closeCampaignBrand(id);
      showToast(false, "Successfully!");
      // navigation("/brand/campaign");
      navigation("/");
    } catch (error) {
      setIsLoading(false);
      showToast(true, "Error! An error occurred. Please try again later!");
      if (error.status === 401) {
      } else if (error.status === 422) {
      }
    }
  };

  const handleOpenCampaign = async (id) => {
    try {
      setIsLoading(true);
      const closed = await closeCampaignBrand(id);
      showToast(false, "Successfully!");
      navigation("/");
    } catch (error) {
      setIsLoading(false);
      showToast(true, "Error! An error occurred. Please try again later!");
      if (error.status === 401) {
      } else if (error.status === 422) {
      }
    }
  };

  return (
    <div>
      {isLoading ? <PreLoader /> : <></>}
      <div className={cx("create-campaign", "animation")}>
        <Button outline={true} to="/brand/campaign/create">
          <FontAwesomeIcon icon={faPlusCircle} /> New Campaign
        </Button>
      </div>
      <ul className={cx("featured-car-list")}>
        {filteredItems.map((item, index) => (
          <li key={index}>
            <div className={cx("featured-car-card")}>
              <figure className={cx("card-banner")}>
                {item.files.map((file, i) => {
                  if (file.path === "campaigns" && i === 0) {
                    return (
                      <div key={file.id}>
                        <img src={file.url} loading="lazy" alt="campaigns" />
                      </div>
                    );
                  }
                })}
              </figure>
              <div className={cx("card-content")}>
                <div className={cx("card-title-wrapper")}>
                  <h3 className={cx("h3", "card-title")}>
                    <a href="#">{item.name}</a>
                  </h3>
                </div>
                <ul className={cx("card-list")}>
                  <li className={cx("card-list-item")}>
                    <FontAwesomeIcon icon={faCalendar} />
                    <span className={cx("card-item-text")}>
                      {item.started_date}
                    </span>
                  </li>
                  <li className={cx("card-list-item")}>
                    {item.campaign_status &&
                      item.campaign_status.split(",").map((channel) => {
                        let status;
                        if (channel === "apply") {
                          status = (
                            <Button
                              outline={true}
                              large={true}
                              onClick={() => handleCloseCampaign(item.id)}
                            >
                              Close <FontAwesomeIcon icon={faClose} />
                            </Button>
                          );
                        } else if (channel === "closed") {
                          status = (
                            <Button
                              outline={true}
                              large={true}
                              onClick={() => handleOpenCampaign(item.id)}
                            >
                              Open <FontAwesomeIcon icon={faCheck} />
                            </Button>
                          );
                        }
                        return <div key={channel}>{status}</div>;
                      })}
                  </li>
                </ul>
                <div className={cx("card-campaign-wrapper")}>
                  <div className={cx("card-social")}>
                    <ul className={cx("list-icons")}>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon
                            className={cx("fa")}
                            icon={faFacebookSquare}
                          />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon
                            className={cx("fa")}
                            icon={faYoutube}
                          />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon
                            className={cx("fa")}
                            icon={faInstagram}
                          />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon
                            className={cx("fa")}
                            icon={faTiktok}
                          />
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div>
                    {item.campaign_status &&
                      item.campaign_status.split(",").map((channel) => {
                        let status;
                        if (channel === "apply") {
                          status = (
                            <>
                              <Button
                                primary={true}
                                to={`/brand/campaign/${item.id}`}
                              >
                                Update
                              </Button>
                              <Button
                                primary={true}
                                onClick={() => handleDelete(item.id)}
                              >
                                Delete
                              </Button>
                            </>
                          );
                        } else if (channel === "closed") {
                          status = (
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
                        return <div key={channel}>{status}</div>;
                      })}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ShowCampaignBrand;
