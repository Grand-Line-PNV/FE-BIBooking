import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import styles from "../../Influencers/task/TaskLayout.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../components/Button/Button";
import useFormData from "../../../../hooks/useFormData";
import Input from "../../../../components/Input";
import {
  createInfoBrand,
  infoBrand,
  updateInfoBrand,
} from "../../../../api/brand";
import { brandAction } from "../../../../features/feature/brand";
import useLocationForm from "../../../../hooks/useLocationForm";
import Select from "react-select";
import { convertObjectToFormData } from "../../../../utils/convertDataUtils";
import "./Profile.css";

const cx = classNames.bind(styles);

export default function ProfileBrand() {
  const account_id = localStorage.getItem("account_id");
  const { data, setData } = useFormData({});

  const getData = async () => {
    const result = await infoBrand(account_id);
    setData(result.data.data.credential);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div className={cx("nav-editProfile")}>
      <div className={cx("table-wrapper")}>
        <div className={cx("btn-create")}>
          <Button primary={true} large={true} to="/brand/profile/create">
            Create new
          </Button>
        </div>
        <table className={cx("fl-table")}>
          <thead>
            <tr>
              <th>No</th>
              <th>Brand</th>
              <th>Contacts</th>
              <th>Industry</th>
              <th>Address</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data && (
              <tr>
                <td>{data.account_id}</td>
                <td>{data.brand_name}</td>
                <td>{data.phone_number}</td>
                <td>{data.industry}</td>
                <td>{data.address_line1}</td>
                <td>{data.booking_price}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
