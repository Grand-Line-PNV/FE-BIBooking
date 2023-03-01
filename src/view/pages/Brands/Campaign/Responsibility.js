import React from "react";
import styles from "./CreateCampaign.module.scss";
import classNames from "classnames/bind";
import Input from "../../../../components/Input";

const cx = classNames.bind(styles);

const CreateResponsibility = () => {
  return (
    <form className={cx("form-inf")}>
      <div className={cx("form-above")}>
        <div className={cx("form-control-left")}>
          <Input
            type="text"
            placeholder="Enter nick name"
            title="nick name"
            primary={true}
            large={true}
            star
          />
          <Input
            type="text"
            placeholder="Enter full name"
            title="full name"
            primary={true}
            large={true}
            star
          />
          <Input
            type="email"
            placeholder="Enter email"
            title="Email"
            primary={true}
            large={true}
            star
          />
          <Input
            type="date"
            placeholder="Enter age"
            title="date of birth"
            primary={true}
            large={true}
            star
          />
        </div>
        <div className={cx("form-control-right")}>
          <Input
            type="text"
            placeholder="Enter phone number"
            title="Phone number"
            primary={true}
            large={true}
            star
          />
          <Input
            type="text"
            placeholder="Enter your job"
            title="Job"
            primary={true}
            large={true}
            star
          />
          <Input
            type="text"
            placeholder="Enter your country"
            title="country"
            primary={true}
            large={true}
            star
          />
          <div className={cx("form-group")}>
            <label className={cx("form-label")}>
              Gender <strong className={cx("required")}>*</strong>
            </label>
            <div className={cx("input-radios")}>
              <div className={cx("radio-group")}>
                <input
                  type="radio"
                  className={cx("radio")}
                  name="gender"
                  id="male"
                />
                <label className={cx("label-radio", "text")} for="male">
                  Male
                </label>
              </div>
              <div className={cx("radio-group")}>
                <input
                  type="radio"
                  className={cx("radio")}
                  name="gender"
                  id="female"
                />
                <label className={cx("label-radio", "text")} for="female">
                  Female
                </label>
              </div>
              <div className={cx("radio-group")}>
                <input
                  type="radio"
                  className={cx("radio")}
                  name="gender"
                  id="other"
                />
                <label className={cx("label-radio", "text")} for="other">
                  Others
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div lassName={cx("form-below")}>
        <Input
          type="text"
          title="Title"
          large={true}
          primary={true}
          placeholder="Enter title"
        />
        <Input rows="5" title="Content orientation" />
        <Input rows="5" title="Experience" />
      </div>
    </form>
  );
};

export default CreateResponsibility;
