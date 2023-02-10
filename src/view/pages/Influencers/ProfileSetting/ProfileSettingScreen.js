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
          <h2 className={cx("profile-title", "heading")}>Setting</h2>
          <div className={cx("profile-info")}>
            <div className={cx("profile-avatar")}>
              <img src={Avatar} alt="" />
            </div>
            <div className={cx("profile-content")}>
              <h3 className={cx("profile-name")}>
                Nguyễn Thanh Tú{" "}
                <a href="">
                  <FontAwesomeIcon
                    className={cx("profile-icon")}
                    icon={faCheck}
                  />
                </a>
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
          <ul className={cx("profile-tabs")}>
            <li className={cx("heading", "tab", "active")}>
              <a href="" className={cx("heading", "tab-link")}>
                INFO
              </a>
            </li>
            <li className={cx("heading", "tab", )}>
              <a href="" className={cx("heading", "tab-link")}>
                VERIFY ID
              </a>
            </li>
          </ul>
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
                    className={cx("form-input", "heading-small")}
                    type="email"
                    required
                    name="email"
                  />
                </div>
                <div className={cx("form-group")}>
                  <label className={cx("form-label", "heading-small")}>
                    Name
                    <strong className={cx("required")}>*</strong>
                  </label>
                  <input
                    className={cx("form-input", "heading-small")}
                    type="text"
                    required
                    name="user name"
                  />
                </div>
                <div className={cx("form-group")}>
                  <label className={cx("form-label", "heading-small")}>
                    Phone number <strong className={cx("required")}>*</strong>
                  </label>
                  <input
                    className={cx("form-input", "heading-small")}
                    type="text"
                    required
                    name="phone number"
                  />
                </div>
                <div className={cx("form-group")}>
                  <label className={cx("form-label", "heading-small")}>
                    Province <strong className={cx("required")}>*</strong>
                  </label>
                  <input
                    className={cx("form-input", "heading-small")}
                    type="text"
                    required
                    name="province"
                  />
                </div>
              </div>
              <div className={cx("form-control-right")}>
                <div className={cx("form-group")}>
                  <label className={cx("form-label")}>
                    Marital status <strong className={cx("required")}>*</strong>
                  </label>
                  <div className={cx("input-radios")}>
                    <div className={cx("radio-group")}>
                      <input type="radio" required className={cx("radio")} />
                      <label className={cx("label-radio")}>Single</label>
                    </div>
                    <div className={cx("radio-group")}>
                      <input type="radio" required className={cx("radio")} />
                      <label className={cx("label-radio")}>Married</label>
                    </div>
                    <div className={cx("radio-group")}>
                      <input type="radio" required className={cx("radio")} />
                      <label className={cx("label-radio")}>Divorced</label>
                    </div>
                  </div>
                </div>
                <div className={cx("form-group")}>
                  <label className={cx("form-label", "heading-small")}>
                    Website/Fanpage{" "}
                    <strong className={cx("required")}>*</strong>
                  </label>
                  <input
                    className={cx("form-input", "heading-small")}
                    type="text"
                    required
                    name=" website"
                  />
                </div>
                <div className={cx("form-group")}>
                  <label className={cx("form-label")}>
                    Gender <strong className={cx("required")}>*</strong>
                  </label>
                  <div className={cx("input-radios")}>
                    <div className={cx("radio-group")}>
                      <input type="radio" required className={cx("radio")} />
                      <label className={cx("label-radio")}>Male</label>
                    </div>
                    <div className={cx("radio-group")}>
                      <input type="radio" required className={cx("radio")} />
                      <label className={cx("label-radio")}>Female</label>
                    </div>
                    <div className={cx("radio-group")}>
                      <input type="radio" required className={cx("radio")} />
                      <label className={cx("label-radio")}>Other</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("form-below")}>
              <div className={cx("form-group")}>
                <label className={cx("form-label", "heading-small")}>
                  Industry <strong className={cx("required")}>*</strong>
                </label>
                <input
                  className={cx("form-input", "heading-small")}
                  type="text"
                  required
                  name="industry"
                />
              </div>
              <div className={cx("form-group")}>
                <label className={cx("form-label", "heading-small")}>
                  Industry <strong className={cx("required")}>*</strong>
                </label>
                <input
                  className={cx("form-input", "heading-small")}
                  type="text"
                  required
                  name="industry"
                />
              </div>
              <div className={cx("form-group")}>
                <label className={cx("form-label", "heading-small")}>
                  Industry <strong className={cx("required")}>*</strong>
                </label>
                <input
                  className={cx("form-input", "heading-small")}
                  type="text"
                  required
                  name="industry"
                />
              </div>
              <div className={cx("form-group")}>
                <label className={cx("form-label", "heading-small")}>
                  Industry <strong className={cx("required")}>*</strong>
                </label>
                <input
                  className={cx("form-input", "heading-small")}
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
