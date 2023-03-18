import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./ShowCampaignStyles.module.scss";
import Button from "../../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faCalendar, faFilter } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import PreLoader from "../../preLoader/PreLoader";

const cx = classNames.bind(styles);

const ShowCampaignInfluencer = ({
  data,
  setFilters,
  filterData,
  filters,
  fetchData,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [filteredItems, setFilteredItems] = useState(data);
  const [noResults, setNoResults] = useState(false);

  const handleFilter = () => {
    const filteredData = data.filter((item) => {
      let shouldKeep = true;
      if (filters.name && !item.name.includes(filters.name)) {
        shouldKeep = false;
      }
      if (filters.industry && !item.industry.includes(filters.industry)) {
        shouldKeep = false;
      }
      if (filters.price && item.price > filters.price) {
        shouldKeep = false;
      }
      return shouldKeep;
    });

    setFilteredItems(filteredData);
    setActiveIndex(0);
    setNoResults(filteredData.length === 0);
  };

  useEffect(() => {
    setFilteredItems(data);
    setIsLoading(false);
  }, [data]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // if (data.length === 0) {
  //   <PreLoader />;
  // }

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <>
          <div className={cx("filter")}>
            <div className={cx("filter__item")}>
              <input
                type="text"
                placeholder="Nam campaign"
                className={cx("filter__input")}
                onChange={(e) =>
                  setFilters({ ...filters, name: e.target.value })
                }
              />
            </div>
            <div className={cx("filter__item")}>
              <input
                type="text"
                placeholder="Industry"
                className={cx("filter__input")}
                onChange={(e) =>
                  setFilters({ ...filters, industry: e.target.value })
                }
              />
            </div>
            <div className={cx("filter__item")}>
              <input
                type="number"
                placeholder="Price"
                className={cx("filter__input")}
                onChange={(e) =>
                  setFilters({ ...filters, price: e.target.value })
                }
              />
            </div>
            <div className={cx("filter__item")}>
              <Button primary={true} large={true} onClick={handleFilter}>
                Filter <FontAwesomeIcon icon={faFilter} />
              </Button>
            </div>
          </div>
          <ul className={cx("featured-car-list")}>
            {noResults && (
              <p
                style={{ paddingTop: "20px", color: "red" }}
                className={cx("text")}
              >
                No results were found
              </p>
            )}
            {filteredItems.length > 0 &&
              filteredItems.map((item) => (
                <>
                  <li key={item.id}>
                    <Link to={`/influencer/campaign/${item.id}`}>
                      <div className={cx("featured-car-card")}>
                        <figure className={cx("card-banner", "slider")}>
                          {item.files.map((file, index) => (
                            <div
                              className={
                                index === activeIndex
                                  ? cx("slide", "active")
                                  : "slide"
                              }
                              key={file.id}
                            >
                              <img
                                src={file.url}
                                loading="lazy"
                                width={440}
                                height={300}
                              />
                            </div>
                          ))}
                        </figure>
                        <div className={cx("card-content")}>
                          <div className={cx("card-title-wrapper")}>
                            <h3 className={cx("h3", "card-title")}>
                              <a href="#">{item.name}</a>
                            </h3>
                          </div>
                          <ul className={cx("card-list")}>
                          <li className={cx("card-list-item")}>
                              <FontAwesomeIcon icon={faBullhorn} />
                              <span className={cx("card-item-text")}>
                                {item.campaign_status &&
                                  item.campaign_status
                                    .split(",")
                                    .map((channel) => {
                                      let status;
                                      if (channel === "apply") {
                                        status = <p>Recruiting</p>;
                                      } else if (channel === "closed") {
                                        status = <p>Recruitment Expiration</p>;
                                      }
                                      return <div key={channel}>{status}</div>;
                                    })}
                              </span>
                            </li>
                            <li className={cx("card-list-item")}>
                              <FontAwesomeIcon icon={faCalendar} />
                              <span className={cx("card-item-text")}>
                                {item.started_date}
                              </span>
                            </li>
                          </ul>
                          <div className={cx("card-campaign-wrapper")}>
                            <div className={cx("card-social")}>
                              <ul className={cx("list-icons")}>
                                {item.socialChannel &&
                                  item.socialChannel
                                    .split(",")
                                    .map((channel) => {
                                      let icon;
                                      if (channel === "facebook") {
                                        icon = (
                                          <li>
                                            <a href="#">
                                              <FontAwesomeIcon
                                                icon={faFacebookSquare}
                                                color="#3b5999"
                                              />
                                            </a>{" "}
                                          </li>
                                        );
                                      } else if (channel === "instagram") {
                                        icon = (
                                          <li>
                                            <a href="#">
                                              <FontAwesomeIcon
                                                icon={faYoutube}
                                                color="#ff0000"
                                              />
                                            </a>{" "}
                                          </li>
                                        );
                                      } else if (channel === "tiktok") {
                                        icon = (
                                          <li>
                                            <a href="#">
                                              <FontAwesomeIcon
                                                icon={faInstagram}
                                                color="#e4405f"
                                              />
                                            </a>{" "}
                                          </li>
                                        );
                                      } else if (channel === "youtube") {
                                        icon = (
                                          <li>
                                            <a href="#">
                                              <FontAwesomeIcon
                                                icon={faTiktok}
                                                color="#000000"
                                              />
                                            </a>{" "}
                                          </li>
                                        );
                                      }
                                      return <div key={channel}>{icon}</div>;
                                    })}
                              </ul>
                            </div>
                            <Button primary={true}>Apply</Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                </>
              ))}
          </ul>
        </>
      )}
    </>
  );
};
export default ShowCampaignInfluencer;
