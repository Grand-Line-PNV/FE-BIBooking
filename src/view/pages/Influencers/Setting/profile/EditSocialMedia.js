import React, { Fragment } from "react";
import styles from "./EditProfile.module.scss";
import classNames from "classnames/bind";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button/Button";

const cx = classNames.bind(styles);

const EditSocialMedia = () => {
  return (
    <Fragment>
      <form className={cx("form-inf")}>
        <div className={cx("form-above")}>
          <div className={cx("form-control-left")}>
            <div className={cx("form-group")}>
              <label className={cx("form-label")} for="platform">
                Platform <strong className={cx("required")}>*</strong>
              </label>
              <div>
                <select
                  name="platform"
                  id="platform"
                  placeholder="Enter platform"
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="tiktok">Tiktok</option>
                  <option value="youtube">Youtube</option>
                </select>
              </div>
            </div>
            <Input
              type="text"
              placeholder="Enter username"
              title="username"
              primary={true}
              large={true}
              star
            />
            <Input
              type="text"
              placeholder="Enter full name"
              title="Full name"
              primary={true}
              large={true}
              star
            />
          </div>
          <div className={cx("form-control-right")}>
            <Input
              type="text"
              placeholder="Enter average intereaction"
              title="Average intereaction"
              primary={true}
              large={true}
              star
            />
            <Input
              type="text"
              placeholder="Enter subcribles"
              title="Subcribles"
              primary={true}
              large={true}
              star
            />
            <Input
              type="text"
              placeholder="Enter your link account"
              title="Link"
              primary={true}
              large={true}
              star
            />
          </div>
        </div>
      </form>
      <div className={cx("submit")}>
        <Button primary={true} large={true} className={cx("heading-small")}>
          Save
        </Button>
      </div>
    </Fragment>
  );
};

export default EditSocialMedia;
