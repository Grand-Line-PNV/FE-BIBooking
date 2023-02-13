import React, { useState } from "react";
import styles from "./ProfileScreen.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

export default function ProfileScreen() {
  //   const changeImage = (e) => {
  //     var preImage = document.getElementById("preview-img");
  //     preImage.src = URL.createObjectURL(e.target.files[0]);
  //     preImage.onload = () => {
  //       URL.revokeObjectURL(output.src);
  //     };
  //   };
  const [eye, setEye] = useState("none");
  const [showPassword, setShowPassword] = useState("none");
  const handleEyeClose = () => {
    setEye("none");
    setShowPassword(!showPassword);
  };
  const handleEyeOpen = () => {
    setEye("block");
    setShowPassword(!showPassword);
  };
  return (
    <section className={cx("profile", "animation")}>
      <div className={cx("container")}>
        <div className={cx("profile-container")}>
          <p className={cx("profile-path", "heading-small")}>
            <span>Home</span>
            <span>Profile</span>
          </p>
          <h2 className={cx("profile-title", "heading")}>
            Brand’s information
          </h2>
          <form className={cx("form-inf")}>
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
                <label className={cx("form-label", "heading-small")}>
                  Brand name <strong className={cx("required")}>*</strong>
                </label>
                <input
                  className={cx("form-input", "heading-small")}
                  type="text"
                  required
                  name="brand name"
                />
              </div>
              <div className={cx("form-group")}>
                <label className={cx("form-label", "heading-small")}>
                  Website/Fanpage <strong className={cx("required")}>*</strong>
                </label>
                <input
                  className={cx("form-input", "heading-small")}
                  type="text"
                  required
                  name=" website"
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
                  Logo
                </label>
                <input
                  type="file"
                  name="image"
                  className={cx("file-upload-default")}
                />
                {/* <div className="input-group col-xs-12">
                  <input
                    type="text"
                    className="form-control file-upload-info"
                    disabled
                    placeholder="Upload Image"
                  />
                  <img
                    id="preview-img"
                    className="col-6 img-thumbnail"
                    style={{ width: "10rem" }}
                    alt=""
                    src="/img/{{ isset($post) ? $post->image : '' }}"
                  />
                  <span className="input-group-append">
                    <button
                      className="file-upload-browse btn btn-gradient-primary"
                      type="button"
                    >
                      Upload
                    </button>
                  </span>
                </div> */}
              </div>
            </div>
          </form>
          <div className={cx("submit-inf")}>
            <Button primary={true} large={true} className={cx("heading-small")}>
              Save
            </Button>
          </div>
          <h2 className={cx("profile-title", "heading")}>
            Brand’s information
          </h2>
          <form className={cx("form-change-password")}>
            <input
              className={cx("form-input-change-password", "heading-small")}
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter your new password"
            />
            <div className={cx("icon-eye")}>
              <FontAwesomeIcon
                icon={faEye}
                onClick={handleEyeOpen}
                style={{ display: eye === "none" ? "block" : "none" }}
              />
              <FontAwesomeIcon
                icon={faEyeSlash}
                style={{ display: eye }}
                onClick={handleEyeClose}
              />
            </div>
          </form>
          <div className={cx("submit-change-password")}>
            <Button primary={true} large={true} className={cx("heading-small")}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
