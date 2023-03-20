import React, { useEffect } from "react";
import styles from "./ProfileBrand.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../components/Button/Button";
import useFormData from "../../../../hooks/useFormData";
import { infoBrand } from "../../../../api/brand";
import "./Profile.css";
import { Link } from "react-router-dom";

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
                <td>
                  <Link to={`/brand/profile/${data.id}`}>
                    <b>{data.brand_name}</b>
                  </Link>
                </td>
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
