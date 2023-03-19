import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CampaignStyles.module.scss";
import Button from "../../../../../components/Button/Button";
import ShowCampaignInfluencer from "../../../../../components/influencer/campaign/ShowCampaign";
import useFormData from "../../../../../hooks/useFormData";
import { getCampaignInfluencer } from "../../../../../api/influencer";
import "./AllCampaign.css";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

const AllCampaignInfluencer = () => {
  const location = useLocation();
  const { data, setData } = useFormData([]);
  const [filters, setFilters] = useState({});

  const fetchData = async () => {
    const result = await getCampaignInfluencer(data);
    setData(result.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const filterData = () => {
    let filteredData = [...data];

    // Áp dụng các điều kiện filter
    if (filters.name) {
      filteredData = filteredData.filter((item) => item.name === filters.name);
    }

    if (filters.industry) {
      filteredData = filteredData.filter(
        (item) => item.industry === filters.industry
      );
    }

    if (filters.price) {
      filteredData = filteredData.filter((item) => item.price >= filters.price);
    }

    setData(filteredData); // Cập nhật lại dữ liệu hiển thị
  };

  return (
    <section className={cx("section", "featured-car")} id={cx("featured-car")}>
      <div className={cx("container")}>
        <ShowCampaignInfluencer
          data={data}
          fetchData={fetchData}
          setFilters={setFilters}
          filterData={filterData}
          filters={filters}
        />

        <div className={cx("btn-see-more")}>
          <Button outline={true}>Xem Thêm</Button>
        </div>
      </div>
    </section>
  );
};
export default AllCampaignInfluencer;
