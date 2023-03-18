import React from "react";
import styles from "./TaskLayout.module.scss";
import classNames from "classnames/bind";
import useFormData from "../../../../hooks/useFormData";
import { useEffect } from "react";
import { useState } from "react";
import PreLoader from "../../../../components/preLoader/PreLoader";
import { getTaskInfluencer } from "../../../../api/influencer";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const DoneTask = () => {
  const influencer_id = localStorage.getItem("account_id");
  const { data, setData } = useFormData({});
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const result = await getTaskInfluencer(influencer_id);
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
              <th>Name</th>
              <th>Brand</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.length &&
              data
                .filter((item) => item.status === "done")
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <Link to={`/influencer/booking-history-detail/${item.id}`}>
                        <td><b>{item.campaign.name}</b></td>
                      </Link>
                    <td>{item.campaign.brand.username}</td>
                    <td>{item.updated_at}</td>
                    <td style={{ color: "#385932", background: "#d1eeda " }}>{item.status}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoneTask;
