import styles from "./BookingStyles.module.scss";
import classNames from "classnames/bind";
import { Fragment, useEffect, useState } from "react";
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
import PreLoader from "../../../components/preLoader/PreLoader";

const cx = classNames.bind(styles);

const BookingScreen = ({
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

  const handleSearch = () => {
    const filteredData = data.filter((item) => {
      let shouldKeep = true;
      if (filters.name && !item.name.includes(filters.name)) {
        shouldKeep = false;
      }
      // if (filters.industry && !item.industry.includes(filters.industry)) {
      //   shouldKeep = false;
      // }
      // if (filters.price && item.price > filters.price) {
      //   shouldKeep = false;
      // }
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

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
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
                  <Button primary={true} onClick={handleSearch}>Search</Button>
                </div>
              </div>
              {noResults && <p style={{paddingTop: "20px", color: "red"}} className={cx("text")}>No results were found</p>}

              <h2 className={cx("")}>Education</h2>
              <div  className={cx("content")}>
              {filteredItems.length > 0 &&
              filteredItems.map((item,index) => (
                <div key={index} className={cx("card")}>
                  <img
                    className={cx("card-image")}
                    src="https://iili.io/HXjeIFj.md.jpg"
                    alt="avt"
                  />
                  <Button className={cx("card-middle")} primary={true}>
                    View
                  </Button>
                  <h3>{item.name}</h3>
                  <p className={cx("title")}>CEO & Founder</p>
                  <p>Experience: 2 years</p>
                  <p>Address: Da nang city</p>
                  <p>Tall: 1m55 Weight: 50kg</p>
                </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default BookingScreen;
//
