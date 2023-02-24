import React, { Fragment } from "react";
import styles from "./EditProfile.module.scss";
import classNames from "classnames/bind";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button/Button";

const cx = classNames.bind(styles);

const EditFollowrRate = () => {
  return (
    <Fragment>
      <form className={cx("form-inf")}>
        <div className={cx("form-above")}>
          <div className={cx("form-control-left")}>
            <div className={cx("form-group")}>
              <h4 className={cx("form-label")} for="platform">
                Gender <strong className={cx("required")}>*</strong>
              </h4>
              <Input
                small={true}
                primary={true}
                title="Male"
                placeholder="Enter percentage..."
              />
              <Input
                small={true}
                primary={true}
                title="Female"
                placeholder="Enter percentage..."
              />
              <Input
                small={true}
                primary={true}
                title="Others"
                placeholder="Enter percentage..."
              />
            </div>
          </div>
          <div className={cx("form-control-left")}>
            <div className={cx("form-group")}>
              <h4 className={cx("form-label")} for="platform">
                Top 3 Cities <strong className={cx("required")}>*</strong>
              </h4>
              <Input
                small={true}
                primary={true}
                title="City 1"
                placeholder="Enter percentage..."
              />
              <Input
                small={true}
                primary={true}
                title="City 2"
                placeholder="Enter percentage..."
              />
              <Input
                small={true}
                primary={true}
                title="City 3"
                placeholder="Enter percentage..."
              />
              <Input
                small={true}
                primary={true}
                title="Other"
                placeholder="Enter percentage..."
              />
            </div>
          </div>
          <div className={cx("form-control-left")}>
            <div className={cx("form-group")}>
              <h4 className={cx("form-label")} for="platform">
                Top 3 ages <strong className={cx("required")}>*</strong>
              </h4>
              <Input
                small={true}
                primary={true}
                title="Less than 18 years old"
                placeholder="Enter percentage..."
              />
              <Input
                small={true}
                primary={true}
                title="18 - 34 years old"
                placeholder="Enter percentage..."
              />
              <Input
                small={true}
                primary={true}
                title="35 - 44 years old"
                placeholder="Enter percentage..."
              />
              <Input
                small={true}
                primary={true}
                title="Other"
                placeholder="Enter percentage..."
              />
            </div>
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

export default EditFollowrRate;
