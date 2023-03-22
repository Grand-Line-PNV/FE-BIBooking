import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "../../../../../assets/SCSS/ShowStyles.module.scss";
import Button from "../../../../../components/Button/Button";
import ShowCampaignInfluencer from "../../../../../components/influencer/campaign/ShowCampaign";
import useFormData from "../../../../../hooks/useFormData";
import { getCampaignInfluencer } from "../../../../../api/influencer";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

const AllCampaignInfluencer = () => {
  const location = useLocation();
  const { data, setData } = useFormData([]);

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

  return (
    <section className={cx("section", "featured-car")} id={cx("featured-car")}>
      <div className={cx("container")}>
        <ShowCampaignInfluencer
        />

        {/* <div className={cx("btn-see-more")}>
          <Button outline={true}>Xem Thêm</Button>
        </div> */}
      </div>
    </section>
  );
};
export default AllCampaignInfluencer;
