import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
import Button from "../../../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const SocialMedia = (social) => {
  return (
    <section className={cx("inner", "socialMedia")}>
      <div className={cx("container")}>
        <div className={cx("socialMedia-container")}>
          <div className={cx("content")}>
            <h2 className={cx("heading", "same-heading")}>Social Media</h2>
            {social &&
              Object.values(social).map((datas, index) =>
                datas.map((data, index) => (
                  <div className={cx(data.name, "default")} key={index}>
                    <div className={cx("socialMedia-icon")}>
                      <img
                        src={
                          data.name == "facebook"
                            ? "https://iili.io/HEJeB6u.th.png"
                            : null || data.name == "instagram"
                            ? "https://iili.io/HEJeqGe.th.png"
                            : null || data.name == "youtube"
                            ? "https://iili.io/HEJefn9.th.png"
                            : null || data.name == "tiktok"
                            ? "https://iili.io/HEJen3b.th.png"
                            : null
                        }
                        alt={data.name}
                      />
                    </div>
                    <div className={cx("")}>
                      <h5 className={cx("text", "text-medium")}>
                        {data.username}
                      </h5>
                      <h5 className={cx("text", "text-medium")}>
                        {data.fullname}
                      </h5>
                    </div>
                    <div className={cx("interaction")}>
                      <h5 className={cx("text", "text-medium")}>
                        {data.avg_interactions}
                      </h5>
                      <h5 className={cx("heading-small")}>
                        Average interaction
                      </h5>
                    </div>
                    <div className={cx("subcribles")}>
                      <h5 className={cx("text", "text-medium")}>
                        {data.subcribers}
                      </h5>
                      <h5 className={cx("heading-small")}>Subcribers</h5>
                    </div>
                    <Button
                      style={{
                        color: "blue",
                        backgroundColor: "transparent",
                      }}
                      to={data.link}
                    >
                      <FontAwesomeIcon icon={faLink} />
                    </Button>
                  </div>
                ))
              )}

            {/* <div className={cx("instagram", "default")}>
              <div className={cx("socialMedia-icon")}>
                <img
                  src="https://iili.io/HEJeqGe.th.png"
                  alt="instagram-icon"
                />
              </div>
              <div className={cx("user")}>
                <h5>@nguyenlinh</h5>
                <h5>Khanh Linh</h5>
              </div>
              <div className={cx("interaction")}>
                <h5>20.000</h5>
                <h5>Average interaction</h5>
              </div>
              <div className={cx("subcribles")}>
                <h5>150.000</h5>
                <h5>Subcribles</h5>
              </div>
              <Button style={{ color: "orange",backgroundColor:'transparent'}}>Visit now</Button>
            </div>
            <div className={cx("youtube", "default")}>
              <div className={cx("socialMedia-icon")}>
                <img src="https://iili.io/HEJefn9.th.png" alt="youtube-icon" />
              </div>
              <div className={cx("user")}>
                <h5>@nguyenlinh</h5>
                <h5>Khanh Linh</h5>
              </div>
              <div className={cx("interaction")}>
                <h5>20.000</h5>
                <h5>Average interaction</h5>
              </div>
              <div className={cx("subcribles")}>
                <h5>150.000</h5>
                <h5>Subcribles</h5>
              </div>
              <Button style={{ color: "red", backgroundColor:'transparent'}}>Visit now</Button>
            </div>
            <div className={cx("tiktok", "default")}>
              <div className={cx("socialMedia-icon")}>
              <img src="https://iili.io/HEJen3b.th.png" alt="tiktok icon"/>
              </div>
              <div className={cx("user")}>
                <h5>@nguyenlinh</h5>
                <h5>Khanh Linh</h5>
              </div>
              <div className={cx("interaction")}>
                <h5>20.000</h5>
                <h5>Average interaction</h5>
              </div>
              <div className={cx("subcribles")}>
                <h5>150.000</h5>
                <h5>Subcribles</h5>
              </div>
              <Button className={cx("tiktok-btn")}>Visit now</Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SocialMedia;
