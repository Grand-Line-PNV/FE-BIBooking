import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "../../../assets/SCSS/ShowStyles.module.scss";
import Button from "../../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faCalendar,
  faFilter,
  faX,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import PreLoader from "../../preLoader/PreLoader";
import { removeEmptyPropertiesFromObject } from "../../../utils/convertDataUtils";
import useFormData from "../../../hooks/useFormData";
import { getCampaignInfluencer } from "../../../api/influencer";

const cx = classNames.bind(styles);

const ShowCampaignInfluencer = () => {
  const { data, setData } = useFormData();
  const [filters, setFilters] = useState({
    keyword: "",
    industry: "",
    minCast: 0,
    maxCast: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchData = async (filters) => {
    try {
      const result = await getCampaignInfluencer(filters);
      setData(result.data.data);
    } catch (e) {
      setData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchHandler = async () => {
    setIsLoading(true);
    const validFilters = removeEmptyPropertiesFromObject(filters);
    await fetchData(validFilters);
    setIsLoading(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % 3);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={cx("filter")}>
        <div className={cx("filter__item")}>
          <input
            className={cx("filter__input")}
            value={filters.keyword}
            onChange={(e) => {
              setFilters({ ...filters, keyword: e.target.value });
            }}
            placeholder="Searching-key"
          />
          <span className={cx("searching-icon")}>
            {filters.keyword ? (
              <FontAwesomeIcon
                icon={faX}
                onClick={() => setFilters({ ...filters, keyword: "" })}
              />
            ) : (
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            )}
          </span>
        </div>
        <div className={cx("career")}>
          <select
            className={cx("filter__input")}
            for="career"
            value={filters.industry}
            onChange={(e) => {
              setFilters({ ...filters, industry: e.target.value });
            }}
          >
            <option value="" selected>
              All industry
            </option>
            <option value="design">Education</option>
            <option value="engineer">Kiếm Tiền Quanh Năm</option>
            <option value="beauty">Beauty</option>
          </select>
        </div>
        <div className={cx("searching-cast")}>
          <input
            className={cx("filter__input")}
            value={filters.minCast}
            onChange={(e) => {
              setFilters({ ...filters, minCast: e.target.value });
            }}
            placeholder="Min cast"
          />
          <span className={cx("searching-icon")}>
            {filters.minCast ? (
              <FontAwesomeIcon
                icon={faX}
                onClick={() => setFilters({ ...filters, minCast: "" })}
              />
            ) : (
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            )}
          </span>
        </div>
        <div className={cx("searching-cast")}>
          <input
            className={cx("filter__input")}
            value={filters.maxCast}
            onChange={(e) => {
              setFilters({ ...filters, maxCast: e.target.value });
            }}
            placeholder="Max cast"
          />
          <span className={cx("searching-icon")}>
            {filters.maxCast ? (
              <FontAwesomeIcon
                icon={faX}
                onClick={() => setFilters({ ...filters, maxCast: "" })}
              />
            ) : (
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            )}
          </span>
        </div>
        <div className={cx("btn-search")}>
          <Button primary={true} onClick={searchHandler} large={true}>
            Search
          </Button>
        </div>
      </div>
      {isLoading ? (
        <PreLoader />
      ) : (
        <>
          <ul className={cx("featured-car-list")}>
            {data.length ? (
              data.map((item, index) => (
                <>
                  <li key={index}>
                    <Link to={`/influencer/campaign/${item.id}`}>
                      <div className={cx("featured-car-card")}>
                        <figure className={cx("card-banner", "slider")}>
                          {item.files.map((file, i) => {
                            if (file.path === "campaigns" && i === 0) {
                              return (
                                <div key={file.id}>
                                  <img
                                    src={file.url}
                                    loading="lazy"
                                    alt="campaigns"
                                  />
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
              ))
            ) : (
              <p
                style={{ paddingTop: "20px", color: "red" }}
                className={cx("text")}
              >
                No results were found
              </p>
            )}
          </ul>
        </>
      )}
    </>
  );
};
export default ShowCampaignInfluencer;
