import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { getTaskInfluencer } from "../../../../api/influencer";
import styles from "./ProfileStyles.module.scss";
const cx = classNames.bind(styles);

const Feedback = () => {
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
  return (
    <section className={cx("inner", "feedBack")}>
      <div className={cx("container")}>
        <h2 className={cx("heading")}>Feedback</h2>
        <div className={cx("feedBack-container")}>
          <div className={cx("content")}>
            {data.length &&
              data.map((item, index) => {
                if (item.status !== "done") {
                  return null;
                }
                if (item.feedbacks.length > 0) {
                  return (
                    <div className={cx("feedBack")}>
                      <div key={index} className={cx("feedBack-infor")}>
                        <img
                          src="https://iili.io/HEI4YS1.webp"
                          alt="avatar"
                          className={cx("feedBack-avatar")}
                        />
                        <div>
                          <h4>{item.campaign.brand.username}</h4>
                          <div className={cx("feedBack-star")}>
                            <h4>Campaign</h4>
                          </div>
                        </div>
                        {item.feedbacks.map((feedback, idx) => (
                          <p key={idx} className={cx("feedBack-content")}>
                            {feedback.content.replace(/(.{50})..+/, "$1....")}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                }
              })}
            {/* {data
                .filter((item) => item.feedbacks)
                .map((item, index) => (
                  
                ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feedback;
