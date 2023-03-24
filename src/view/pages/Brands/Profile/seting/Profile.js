import React, { useState, useEffect } from "react";
import { infoBrand } from "../../../../../api/brand";
import styles from "./ProfileSetting.module.scss";
import useFormData from "../../../../../hooks/useFormData";
import classNames from "classnames/bind";
import Input from "../../../../../components/Input";

const cx = classNames.bind(styles);
const ProfileSetingBrand = () => {
  const brand_id = localStorage.getItem("account_id");
  const { data, setData } = useFormData([]);

  const fetchData = async () => {
    const result = await infoBrand(brand_id);
    setData(result.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={cx("profile-setting")}>
      <form>
        <div className={cx("form")}>
          <div className={cx("form-group")}>
            <Input
              type="text"
              id={cx("username")}
              title="User Name"
              name="username"
              value={data.username}
              require
              star
              disabled
            />
          </div>
          <div className={cx("form-group")}>
            <Input
              type="text"
              id={cx("email")}
              title="Email"
              name="email"
              value={data.email}
              require
              star
              disabled
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileSetingBrand;
