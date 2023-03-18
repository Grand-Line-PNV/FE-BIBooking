import React from "react";
import styles from "./TaskLayout.module.scss";
import classNames from "classnames/bind";
import useFormData from "../../../../hooks/useFormData";
import { useEffect } from "react";
import { useState } from "react";
import PreLoader from "../../../../components/preLoader/PreLoader";
import { getTaskInfluencer } from "../../../../api/influencer";

const cx = classNames.bind(styles);

const ApplyingInfluencer = () => {
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
              data.map((item, index) => {
                let status;
                if (item.status === "waiting") {
                  status = (
                    <>
                      <td>{item.id}</td>
                      <td>{item.campaign.name}</td>
                      <td>{item.campaign.brand.username}</td>
                      <td>{item.updated_at}</td>
                      <td style={{ color: "#ffffff", background: "#f8d803" }}>
                        {item.status}
                      </td>
                    </>
                  );
                } else if (item.status === "reject") {
                  status = (
                    <>
                      <td>{item.id}</td>
                      <td>{item.campaign.name}</td>
                      <td>{item.campaign.brand.username}</td>
                      <td>{item.updated_at}</td>
                      <td style={{ color: "#ead282", background: "#816215" }}>
                        {item.status}
                      </td>
                    </>
                  );
                }
                return <tr key={index}>{status}</tr>;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplyingInfluencer;
