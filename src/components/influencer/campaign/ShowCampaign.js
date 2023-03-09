import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./ShowCampaignStyles.module.scss";
import Button from "../../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Show.css";
import PreLoader from "../../preLoader/PreLoader";

const cx = classNames.bind(styles);
const ShowCampaign = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  //
  const [filteredItems, setFilteredItems] = useState(data);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setFilteredItems(data);
    setIsLoading(false);
  }, [data]);

  const handleFilter = (selectedValue) => {
    setSelectedValue(selectedValue);
    const filtered =
      selectedValue === ""
        ? data
        : data.filter((item) => item.socialChannel === selectedValue);
    setFilteredItems(filtered);
  };

  const categories = [...new Set(data.map((item) => item.socialChannel))];
  //

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
          <div className={cx("select-social")}>
            <select
              value={selectedValue}
              onChange={(e) => handleFilter(e.target.value)}
            >
              <option value="">All channels</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          {filteredItems.map((item) => (
            <li key={item.id}>
              <div className={cx("featured-car-card")}>
                <figure className={cx("card-banner", "slider")}>
                  {item.files.map((file, index) => (
                    <div
                      className={
                        index === activeIndex ? "slide active" : "slide"
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
                      <a href="#">{item.nameCampaign}</a>
                    </h3>
                  </div>
                  <ul className={cx("card-list")}>
                    <li className={cx("card-list-item")}>
                      <span>bởi</span>
                      <span className={cx("card-item-text")}>Shopee</span>
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
                      <p className={cx("card-campaign")}>
                        {item.campaign_status}
                      </p>
                    </div>
                    <Button primary={true}>Apply</Button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </>
      )}
    </>
  );
};
export default ShowCampaign;
