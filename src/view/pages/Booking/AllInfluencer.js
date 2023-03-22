import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import Button from "../../../components/Button/Button";
import styles from "../../../assets/SCSS/ShowStyles.module.scss";
import useFormData from "../../../hooks/useFormData";
import { getAllInfluencer } from "../../../api/brand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBirthdayCake,
  faIndustry,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { removeEmptyPropertiesFromObject } from "../../../utils/convertDataUtils";
import PreLoader from "../../../components/preLoader/PreLoader";

const cx = classNames.bind(styles);

const AllInfluencer = () => {
  const { data, setData } = useFormData();
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    keyword: "",
    gender: "",
    job: "",
    minCast: 0,
    maxCast: 0,
  });

  const fetchData = async (filters) => {
    try {
      const result = await getAllInfluencer(filters);
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

  return (
    <section
      className={cx("section", "featured-car", "animation")}
      id={cx("featured-car")}
    >
      <div className={cx("container")}>
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
          <div className={cx("gender")}>
            <select
              className={cx("filter__input")}
              for="gender"
              value={filters.gender}
              onChange={(e) => {
                setFilters({ ...filters, gender: e.target.value });
              }}
            >
              <option value="" selected>
                All Gender
              </option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className={cx("career")}>
            <select
              className={cx("filter__input")}
              for="career"
              value={filters.job}
              onChange={(e) => {
                setFilters({ ...filters, job: e.target.value });
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
                      {/* <Link to={`/influencer/campaign/${item.id}`}> */}
                      <div className={cx("featured-car-card")}>
                        <figure className={cx("card-banner", "slider")}>
                          {item.files.map((i) => {
                            if (i.path === "avatars") {
                              return (
                                <img
                                  className={cx("card-image")}
                                  src={i.url}
                                  alt={i.name}
                                  width="100%"
                                  height="100%"
                                />
                              );
                            }
                          })}
                        </figure>
                        <div className={cx("card-content")}>
                          <div className={cx("card-title-wrapper")}>
                            <h3 className={cx("h3", "card-title")}>
                              <a href="#">{item.credential.fullname}</a>
                            </h3>
                          </div>
                          <ul className={cx("card-list")}>
                            <li className={cx("card-list-item")}>
                              <FontAwesomeIcon icon={faIndustry} />
                              <span className={cx("card-item-text")}>
                                {item.credential.job}
                              </span>
                            </li>
                            <li className={cx("card-list-item")}>
                              <FontAwesomeIcon icon={faBirthdayCake} />
                              <span className={cx("card-item-text")}>
                                {item.credential.dob}
                              </span>
                            </li>
                            <li className={cx("card-list-item")}>
                              <FontAwesomeIcon icon={faAddressBook} />
                              <span className={cx("card-item-text")}>
                                {item.credential.address_line1}
                              </span>
                            </li>
                          </ul>
                          <div className={cx("card-campaign-wrapper")}>
                            <p></p>
                            <Button
                              to={`/influencer/profile/${item.credential.account_id}`}
                              primary={true}
                            >
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                      {/* </Link> */}
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

        {/* <div className={cx("btn-see-more")}>
          <Button outline={true}>Xem Thêm</Button>
        </div> */}
      </div>
    </section>
  );
};
export default AllInfluencer;
