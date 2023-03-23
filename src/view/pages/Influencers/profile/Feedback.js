import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getTaskInfluencer } from "../../../../api/influencer";
import styles from "./ProfileStyles.module.scss";
import "./Feedback.css";

const cx = classNames.bind(styles);

const Feedback = () => {
  const influencer_id = localStorage.getItem("account_id");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getData = async () => {
    const result = await getTaskInfluencer(influencer_id);
    setData(result.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <section className={cx("testemonial")}>
        <div className={cx("container")}>
          <div className={cx("boxed")}>
            <h2 className={cx("testemonial-heading", "heading-small")}>
              TESTEMONIALS
            </h2>
            <h2 className={cx("same-heading")}>
              What The People Thinks About Us
            </h2>
          </div>
          <Slider {...settings}>
            {data.length &&
              data.map((item, index) => {
                if (item.status !== "done") {
                  return null;
                }
                if (item.feedbacks.length > 0) {
                  return (
                    <div
                      key={index}
                      className={cx("testemonial-item")}
                      style={{ width: "1000px !important" }}
                    >
                      <div className={cx("testemonial-top")}>
                        <div className={cx("testemonial-info")}>
                          <div className={cx("testemonial-avatar")}>
                            <img src="https://iili.io/HEI4YS1.webp" alt="" />
                          </div>
                          <div className={cx("testemonial-content")}>
                            <h3 className={cx("testemonial-name")}>Campaign</h3>
                          </div>
                        </div>
                      </div>
                      <div className={cx("text", "testemonial-desc")}>
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
          </Slider>
        </div>
      </section>
    </div>
  );
};
export default Feedback;
