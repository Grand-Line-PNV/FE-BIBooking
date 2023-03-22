import { useParams, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import Button from "../../../../components/Button/Button";
import styles from "./DetailStyles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCancel,
  faCheck,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import PreLoader from "../../../../components/preLoader/PreLoader";
import { getDetailTaskBrand } from "../../../../api/brand";
import { updateStatusBooking } from "../../../../api/booking";
import Feedback from "../../Influencers/profile/Feedback";
import FeedbackScreen from "../../Feedback/FeedbackScreen";

const cx = classNames.bind(styles);

const DetailsBrand = () => {
  let { id } = useParams();
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const getData = async () => {
    const result = await getDetailTaskBrand(id);
    setData(result.data.data);
  };

  const handlePayment = () => {
    const bookingId = data.id;
    navigation(`/brand/booking/payment?bookingId=${bookingId}`);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleRejectBooking = async (id) => {
    try {
      setIsLoading(true);
      const reject = await updateStatusBooking(id, {
        status: "reject",
      });
      navigation("/brand/booking-history");
    } catch (error) {
      if (error.status === 401) {
      } else if (error.status === 422) {
      }
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
          <Button primary={true} large={true} to="/brand/booking-history">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        </div>
      </div>
      <div className={cx("card__body")}>
        <div className={cx("half")}>
          <div className={cx("image", "slider")}>
            {data.campaign &&
              data.campaign.files.map((file, index) => (
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
          {data.campaign && (
            <p className={cx("heading-small")}>
              Campaign Name: {data.campaign.name}
            </p>
          )}
          {data.influencer && (
            <p className={cx("heading-small")}>
              Influencer Name: {data.influencer.username}
            </p>
          )}
          <div>
            <p className={cx("heading-small")}>Require</p>
            {data.campaign && data.campaign.require && (
              <p className={cx("text", "text-medium")}>
                {data.campaign.require.replace(/(.{500})..+/, "$1....")}
              </p>
            )}
          </div>
          {data.campaign && (
            <div className={cx("price-campaign")}>
              <p className={cx("heading-small")}>Price:</p>
              <p className={cx("text", "text-medium")}>
                {data.campaign.price} VND
              </p>
            </div>
          )}

          <div>
            <p className={cx("heading-small")}>Description</p>
            {data.campaign && data.campaign.description && (
              <p className={cx("text", "text-medium")}>
                {data.campaign.description.replace(/(.{500})..+/, "$1....")}
              </p>
            )}
          </div>
          <div className={cx("icon-socialChannel")}>
            <p className={cx("heading-small")}>Campaign platform: </p>
            {data.campaign &&
              data.campaign.socialChannel.split(",").map((channel) => {
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
            {data.campaign && <p>{data.campaign.hashtag}</p>}
          </div>
          {data.campaign && (
            <p className={cx("heading-small")}>
              Start from: {data.campaign.started_date}
            </p>
          )}

          {data.status &&
            data.status.split(",").map((status_booking) => {
              let status;
              if (status_booking === "waiting") {
                status = (
                  <>
                    <p
                      className={cx("waiting")}
                      style={{
                        color: "#ffffff",
                        background: "#f8d803",
                        padding: "10px 20px",
                        borderRadius: "99px",
                      }}
                    >
                      waiting
                    </p>
                    {visible && (
                      <>
                        <Button
                          className={`accept-button ${
                            visible ? "visible" : ""
                          }`}
                          primary={true}
                          onClick={handlePayment}
                        >
                          <FontAwesomeIcon icon={faCheck} /> Agree
                        </Button>
                        <Button
                          className={`reject-button ${
                            visible ? "visible" : ""
                          }`}
                          outline={true}
                          onClick={() => handleRejectBooking(data.id)}
                        >
                          <FontAwesomeIcon icon={faCancel} /> Reject
                        </Button>
                      </>
                    )}
                  </>
                );
              } else if (status_booking === "confirmed") {
                status = (
                  <p
                    className={cx("confirmed")}
                    style={{
                      color: "#DFD437",
                      background: "#fff494",
                      padding: "10px 20px",
                      borderRadius: "99px",
                    }}
                  >
                    confirmed
                  </p>
                );
              } else if (status_booking === "in_progress") {
                status = (
                  <p
                    className={cx("in_progress")}
                    style={{
                      color: "#ad9ccc",
                      background: "#52397a",
                      padding: "10px 20px",
                      borderRadius: "99px",
                    }}
                  >
                    in_progress
                  </p>
                );
              } else if (status_booking === "paid") {
                status = (
                  <p
                    className={cx("paid")}
                    style={{
                      color: "#d8d8da",
                      background: "#47303c",
                      padding: "10px 20px",
                      borderRadius: "99px",
                    }}
                  >
                    paid
                  </p>
                );
              } else if (status_booking === "done") {
                status = (
                  <>
                    <p
                      className={cx("done")}
                      style={{
                        color: "#385932",
                        background: "#d1eeda",
                        padding: "10px 20px",
                        borderRadius: "99px",
                      }}
                    >
                      done
                    </p>
                    <FeedbackScreen
                      bookingId={data.id}
                      toAccountId={data.influencer.id}
                    />
                  </>
                );
              } else if (status_booking === "cancel") {
                status = (
                  <p
                    className={cx("cancel")}
                    style={{
                      color: "#D6607A",
                      background: "#BC2244",
                      padding: "10px 20px",
                      borderRadius: "99px",
                    }}
                  >
                    cancel
                  </p>
                );
              } else if (status_booking === "reject") {
                status = (
                  <p
                    className={cx("reject")}
                    style={{
                      color: "#ead282",
                      background: "#816215",
                      padding: "10px 20px",
                      borderRadius: "99px",
                    }}
                  >
                    reject
                  </p>
                );
              }
              return (
                <div
                  key={status}
                  className={cx("heading-small", "status_booking")}
                >
                  Status: {status}
                </div>
              );
            })}
        </div>
      </div>
      <div className={cx("card__footer")}>
        {/* {data.status &&
          data.status.split(",").map((status_booking) => {
            let status;
            if (status_booking === "done") {
              status = <FeedbackScreen bookingId={data.id} />;
            }
            return (
              <div
                key={status}
                className={cx("heading-small", "status_booking")}
              >
                {status}
              </div>
            );
          })} */}
      </div>
    </div>
  );
};
export default DetailsBrand;
