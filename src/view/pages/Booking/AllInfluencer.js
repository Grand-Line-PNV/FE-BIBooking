import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import Button from "../../../components/Button/Button";
import BookingScreen from "./BookingScreen";
import styles from "./BookingStyles.module.scss";
import useFormData from "../../../hooks/useFormData";
import { getAllInfluencer } from "../../../api/brand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownLong,
  faArrowRight,
  faArrowUpLong,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { async } from "q";
import { removeEmptyPropertiesFromObject } from "../../../utils/convertDataUtils";
import Input from "../../../components/Input";

const cx = classNames.bind(styles);

const AllInfluencer = () => {
  const { data, setData } = useFormData();
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
    const validFilters = removeEmptyPropertiesFromObject(filters);
    await fetchData(validFilters);
  };
  return (
    <section className={cx("section", "featured-car")} id={cx("featured-car")}>
      <div className={cx("container")}>
        <section className={cx("BookingScreen")}>
          <div className={cx("wrapper")}>
            <div className={cx("container")}>
              <div className={cx("searching-heading")}>
                <div className={cx("searching-key")}>
                  <input
                    value={filters.keyword}
                    onChange={(e) => {
                      setFilters({ ...filters, keyword: e.target.value });
                    }}
                    placeholder="Searching-key"
                    className={cx("searching-input")}
                  />
                  <span>
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
                    for="career"
                    value={filters.job}
                    onChange={(e) => {
                      setFilters({ ...filters, job: e.target.value });
                    }}
                  >
                    <option value="" selected>
                      All Career
                    </option>
                    <option value="design">Education</option>
                    <option value="engineer">Software Engineer</option>
                    <option value="beauty">Beauty</option>
                  </select>
                </div>
                <div className={cx("searching-cast")}>
                  <input
                    value={filters.minCast}
                    onChange={(e) => {
                      setFilters({ ...filters, minCast: e.target.value });
                    }}
                    placeholder="Min cast"
                    className={cx("cast-input")}
                  />
                  <span>
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
                    value={filters.maxCast}
                    onChange={(e) => {
                      setFilters({ ...filters, maxCast: e.target.value });
                    }}
                    placeholder="Max cast"
                    className={cx("cast-input")}
                  />
                  <span>
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
                  <Button primary={true} onClick={searchHandler}>
                    Search
                  </Button>
                </div>
              </div>
              {/* <h2 className={cx("")}>Education</h2> */}
              <div className={cx("content")}>
                {data.length ? (
                  data.map((item, index) => (
                    <div key={index} className={cx("card")}>
                      {item.files.map((i) => {
                        if (i.path === "avatars") {
                          return (
                            <img
                              className={cx("card-image")}
                              src={i.url}
                              alt={i.name}
                            />
                          );
                        }
                      })}

                      <Button
                        className={cx("card-middle")}
                        primary={true}
                        to={`/influencer/profile/${2}`}
                      >
                        View
                      </Button>
                      <h3>{item.credential.fullname}</h3>
                      <h4>{item.username}</h4>
                      <p className={cx("title")}>{item.credential.job}</p>
                      <p>Address: {item.credential.address_line1}</p>
                      <p>Birthday {item.credential.dob}</p>
                    </div>
                  ))
                ) : (
                  <p
                    style={{ paddingTop: "20px", color: "red" }}
                    className={cx("text")}
                  >
                    No results were found
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
        <div style={{display:'flex',justifyContent: 'center',alignItems: 'center',padding:'20px'}}>
          <Button outline={true}>Load more</Button>
        </div>
      </div>
    </section>
  );
};
export default AllInfluencer;
