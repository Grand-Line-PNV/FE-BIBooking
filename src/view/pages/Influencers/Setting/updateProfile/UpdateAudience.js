import React, { Fragment, useEffect, useState } from "react";
import styles from "./UpdateProfile.module.scss";
import classNames from "classnames/bind";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button/Button";
import {
  infoInfluencer,
  updateAudienceData,
} from "../../../../../api/influencer";
import useFormData from "../../../../../hooks/useFormData";
import { convertObjectToFormData } from "../../../../../utils/convertDataUtils";
import showToast from "../../../../../components/toast/Toast";
const cx = classNames.bind(styles);

const UpdateAudience = () => {
  const account_id = localStorage.getItem("account_id");
  const initialData = {
    female: 0,
    male: 0,
    others: 0,
    age1: 0,
    age2: 0,
    age3: 0,
    age4: 0,
    city1: 0,
    city2: 0,
    city3: 0,
    city4: 0,
  };

  const { data, setData, handleChange, errors, setErrors, resetErrors } =
    useFormData(initialData);

  const handleSubmit = async (event) => {
    resetErrors();
    try {
      event.preventDefault();
      const formData = convertObjectToFormData(data);
      await updateAudienceData(formData);
      showToast(false, "Successfully!");
    } catch (error) {
      showToast(true, "Error! An error occurred. Please try again later!");
      if (error.status === 401) {
      } else if (error.status === 422) {
        setErrors(error.data.message);
      }
    }
  };

  const getData = async () => {
    const result = await infoInfluencer(account_id);
    setData(result.data.data.audience_data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Fragment>
      <form className={cx("form-inf")} onSubmit={handleSubmit}>
        <div className={cx("form-above")}>
          <div className={cx("form-control-left")}>
            <div className={cx("form-group")}>
              <h4 className={cx("form-label")} for="platform">
                Gender <strong className={cx("required")}>*</strong>
              </h4>
              <div>
                <Input
                  small={true}
                  primary={true}
                  title="Male"
                  placeholder="Enter percentage..."
                  name="male"
                  value={data.male}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  small={true}
                  primary={true}
                  title="Female"
                  placeholder="Enter percentage..."
                  name="female"
                  value={data.female}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  small={true}
                  primary={true}
                  title="Others"
                  placeholder="Enter percentage..."
                  name="others"
                  value={data.others}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className={cx("form-control-left")}>
            <div className={cx("form-group")}>
              <h4 className={cx("form-label")} for="platform">
                Top 3 Cities <strong className={cx("required")}>*</strong>
              </h4>
              <div>
                <Input
                  small={true}
                  primary={true}
                  title="City 1"
                  placeholder="Enter percentage..."
                  name="city1"
                  value={data.city1}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  small={true}
                  primary={true}
                  title="City 2"
                  placeholder="Enter percentage..."
                  name="city2"
                  value={data.city2}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  small={true}
                  primary={true}
                  title="City 3"
                  placeholder="Enter percentage..."
                  name="city3"
                  value={data.city3}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  small={true}
                  primary={true}
                  title="Other"
                  placeholder="Enter percentage..."
                  name="city4"
                  value={data.city4}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className={cx("form-control-left")}>
            <div className={cx("form-group")}>
              <h4 className={cx("form-label")} for="platform">
                Top 3 ages <strong className={cx("required")}>*</strong>
              </h4>
              <div>
                <Input
                  small={true}
                  primary={true}
                  title="Less than 18 years old"
                  placeholder="Enter percentage..."
                  name="age1"
                  value={data.age1}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  small={true}
                  primary={true}
                  title="18 - 34 years old"
                  placeholder="Enter percentage..."
                  name="age2"
                  value={data.age2}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  small={true}
                  primary={true}
                  title="35 - 44 years old"
                  placeholder="Enter percentage..."
                  name="age3"
                  value={data.age3}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  small={true}
                  primary={true}
                  title="Other"
                  placeholder="Enter percentage..."
                  name="age4"
                  value={data.age4}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={cx("submit")}>
          <Button primary={true} large={true} className={cx("heading-small")}>
            Update
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default UpdateAudience;
