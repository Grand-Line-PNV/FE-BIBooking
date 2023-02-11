import React from "react";
import styles from "./ProfileSettingScreen.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../components/Button/Button";
import { Avatar } from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const ProfileSettingScreen = () => {
  return (
    <section className={cx("profile-setting", "animation")}>
      <div className={cx("container")}>
        <div className={cx("profile-setting-container")}>
          {/* <p className={cx("profile-path", "heading-small")}>
            <span>Home</span>
            <span>Profile</span>
          </p> */}
          <h2 className={cx("heading")}>Setting</h2>
          <div className={cx("profile-info")}>
            <div className={cx("profile-avatar")}>
              <img src={Avatar} alt="" />
            </div>
            <div className={cx("profile-content")}>
              <h3 className={cx("profile-name")}>
                Nguyễn Thanh Tú{" "}
                  <FontAwesomeIcon
                    className={cx("profile-icon")}
                    icon={faCheck}
                  />
              </h3>
              <span className={cx("profile-address", "text", "text-medium")}>
                0 channel{" "}
                <a href="">
                  <FontAwesomeIcon
                    className={cx("profile-icon")}
                    icon={faPlus}
                  />
                </a>
              </span>
            </div>
          </div>
          <h2 className={cx("profile-title", "heading")}>
            General Information
          </h2>
          <form className={cx("form-inf")}>
            <div className={cx("form-above")}>
              <div className={cx("form-control-left")}>
                <div className={cx("form-group")}>
                  <label className={cx("form-label", "heading-small")}>
                    Email <strong className={cx("required")}>*</strong>
                  </label>
                  <input
                    className={cx("form-input", "text")}
                    type="email"
                    required
                    name="email"
                  />
                </div>
                <div className={cx("form-group")}>
                  <label className={cx("form-label", "heading-small")}>
                    Full Name
                    <strong className={cx("required")}>*</strong>
                  </label>
                  <input
                    className={cx("form-input", "text")}
                    type="text"
                    required
                    name="user name"
                  />
                </div>
                <div className={cx("form-group")}>
                  <label className={cx("form-label", "heading-small")}>
                    NickName <strong className={cx("required")}>*</strong>
                  </label>
                  <input
                    className={cx("form-input", "text")}
                    type="text"
                    required
                    name="nickname"
                  />
                </div>
                <div className={cx("form-group")}>
                  <label className={cx("form-label", "heading-small")}>
                    Date Of Birth <strong className={cx("required")}>*</strong>
                  </label>
                  <input
                    className={cx("form-input", "text")}
                    type="date"
                    required
                    name="dob"
                  />
                </div>
                <div className={cx("form-group")}>
                  <label className={cx("form-label", "heading-small")}>
                    Phone Number <strong className={cx("required")}>*</strong>
                  </label>
                  <input
                    className={cx("form-input", "text")}
                    type="text"
                    required
                    name="phone number"
                  />
                </div>
                <div className={cx("form-group")}>
                  <label className={cx("form-label", "heading-small")}>
                  Start Work <strong className={cx("required")}>*</strong>
                  </label>
                  <input
                    className={cx("form-input", "text")}
                    type="date"
                    required
                    name="startedWork"
                  />
                </div>
              </div>
              <div className={cx("form-control-right")}>
              <div className={cx("form-group")}>
                  <label className={cx("form-label", "heading-small")}>
                  Booking Price <strong className={cx("required")}>*</strong>
                  </label>
                  <input
                    className={cx("form-input", "text")}
                    type="number"
                    required
                    name="bookingPrice"
                  />
                </div>
                <div className={cx("form-group")}>
                  <label className={cx("form-label", "heading-small")}>
                    Followers <strong className={cx("required")}>*</strong>
                  </label>
                  <input
                    className={cx("form-input", "text")}
                    type="text"
                    required
                    name="followers"
                  />
                </div>
                <div className={cx("form-group")}>
                  <label className={cx("form-label", "heading-small")}>
                    Job <strong className={cx("required")}>*</strong>
                  </label>
                  <input
                    className={cx("form-input", "text")}
                    type="text"
                    required
                    name="job"
                  />
                </div>
                <div className={cx("form-group")}>
                  <label className={cx("form-label", "heading-small")}>
                    Website/Fanpage{" "}
                    <strong className={cx("required")}>*</strong>
                  </label>
                  <input
                    className={cx("form-input", "text")}
                    type="text"
                    required
                    name="website"
                  />
                </div>
                <div className={cx("form-group")}>
                  <label className={cx("form-label", "heading-small")}>
                    Marital status <strong className={cx("required")}>*</strong>
                  </label>
                  <div className={cx("input-radios")}>
                    <div className={cx("radio-group")}>
                      <input type="radio" required className={cx("radio")} />
                      <label className={cx("label-radio", "text")}>
                        Single
                      </label>
                    </div>
                    <div className={cx("radio-group")}>
                      <input type="radio" required className={cx("radio")} />
                      <label className={cx("label-radio", "text")}>
                        Married
                      </label>
                    </div>
                    <div className={cx("radio-group")}>
                      <input type="radio" required className={cx("radio")} />
                      <label className={cx("label-radio", "text")}>
                        Divorced
                      </label>
                    </div>
                  </div>
                </div>

                <div className={cx("form-group")}>
                  <label className={cx("form-label", "heading-small")}>
                    Gender <strong className={cx("required")}>*</strong>
                  </label>
                  <div className={cx("input-radios")}>
                    <div className={cx("radio-group")}>
                      <input type="radio" required className={cx("radio")} />
                      <label className={cx("label-radio", "text")}>Male</label>
                    </div>
                    <div className={cx("radio-group")}>
                      <input type="radio" required className={cx("radio")} />
                      <label className={cx("label-radio", "text")}>
                        Female
                      </label>
                    </div>
                    <div className={cx("radio-group")}>
                      <input type="radio" required className={cx("radio")} />
                      <label className={cx("label-radio", "text")}>Other</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("form-below")}>
              <div className={cx("form-group")}>
                <label className={cx("form-label", "heading-small")}>
                  Link <strong className={cx("required")}>*</strong>
                </label>
                <input
                  className={cx("form-input", "text")}
                  type="text"
                  required
                  name="link"
                />
              </div>
              <div className={cx("form-group")}>
                <label className={cx("form-label", "heading-small")}>
                  Content topic <strong className={cx("required")}>*</strong>
                </label>
                <input
                  className={cx("form-input", "text")}
                  type="text"
                  required
                  name="contentTopic"
                />
              </div>
              <div className={cx("form-group")}>
                <label className={cx("form-label", "heading-small")}>
                  Industry <strong className={cx("required")}>*</strong>
                </label>
                <input
                  className={cx("form-input", "text")}
                  type="text"
                  required
                  name="industry"
                />
              </div>
            </div>
          </form>
          <div className={cx("submit")}>
            <Button primary={true} large={true} className={cx("heading-small")}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSettingScreen;
