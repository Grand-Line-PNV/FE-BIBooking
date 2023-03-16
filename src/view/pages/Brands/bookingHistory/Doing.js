import React, { useState, useEffect } from "react";
import styles from "./BookingHistory.module.scss";
import classNames from "classnames/bind";
import PreLoader from "../../../../components/preLoader/PreLoader";
import useFormData from "../../../../hooks/useFormData";
import { getTaskBrand } from "../../../../api/brand";

const cx = classNames.bind(styles);
const DoingBrand = () => {
  const brand_id = localStorage.getItem("account_id");
  const { data, setData } = useFormData({});
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const result = await getTaskBrand(brand_id);
    setData(result.data.data);
    console.log(result.data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={cx("nav-editProfile")}>
      {isLoading ? <PreLoader /> : <></>}
      <div className={cx("table-wrapper")}>
        <table className={cx("fl-table")}>
          <thead>
            <tr>
              <th>No</th>
              <th>Name Influencer</th>
              <th>Campaign name</th>
              <th>Campaign end date</th>
              <th>Number of people applying</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.length &&
              data.filter((item) => item.status === "in_progress").map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.influencer.username}</td>
                  <td>{item.campaign.name}</td>
                  <td>{item.campaign.ended_date}</td>
                  <td>{item.campaign.applied_number}</td>
                  <td style={{ color: "#ad9ccc", background: "#52397a " }}>{item.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoingBrand;
