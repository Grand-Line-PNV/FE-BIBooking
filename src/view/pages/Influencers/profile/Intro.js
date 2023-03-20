import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
import Button from "../../../../components/Button/Button";
import { useEffect } from "react";
const cx = classNames.bind(styles);
const Intro = (prop) => {
  const roleId = localStorage.getItem("role");
  // const username = localStorage.getItem("username");
  const id = prop.info.account_id;

  return (
    <div>
      <section className={cx("inner", "intro")}>
        <div className={cx("container")}>
          <div className={cx("intro-container")}>
            <div className={cx("content")}>
              <h2 className={cx("intro-heading")}>
                Hello I'am {prop.username}
              </h2>
              <div className={cx("intro-desc")}>
                <h4>I am a {prop.info.job}</h4>
                <p>{prop.info.description}</p>
                {roleId == 1 ? (
                  <Button
                    primary={true}
                    className={cx("intro-button")}
                    to={`/booking/send-request/${id}`}
                  >
                    Contact now
                  </Button>
                ) : (
                  <Button
                    primary={true}
                    className={cx("intro-button")}
                    to="/influencer/setting/update-profile"
                  >
                    Update Now
                  </Button>
                )}
              </div>
            </div>

            <div className={cx("intro-image")}>
              {Object.values(prop.file).map((i) => {
                if (i.path === "avatars") {
                  return (
                    <img
                      className={cx("image-avatar")}
                      src={i.url}
                      alt="HE9kxVe.png"
                      border="0"
                    />
                  );
                }
              })}
              <img
                className={cx("image-background")}
                src="https://iili.io/HEJFxol.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {Object.values(prop.file).map((i) => {
          if (i.path === "influencers") {
            return (
              <>
                <img
                  style={{ width: "200px" }}
                  className={cx("image-files")}
                  src={i.url}
                  alt="HE9kxVe.png"
                  border="0"
                />
              </>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Intro;
