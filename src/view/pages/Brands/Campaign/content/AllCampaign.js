import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CampaignStyles.module.scss";
import Button from "../../../../../components/Button/Button";
import useFormData from "../../../../../hooks/useFormData";
import {
  deleteCampaignBrand,
  getCampaignBrand,
  updateCampaignBrand,
} from "../../../../../api/brand";
import ShowCampaignBrand from "../../../../../components/brand/campaign/ShowCampaign";

const cx = classNames.bind(styles);
const AllCampaignBrand = () => {
  const brand_id = localStorage.getItem("account_id");
  const { data, setData } = useFormData([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const result = await getCampaignBrand(brand_id );
    setData(result.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleDelete = async (campaignId) => {
    setIsLoading(true);
    const res = await deleteCampaignBrand(campaignId);
    setIsLoading(false);
    fetchData();
  };

  return (
    <section className={cx("section", "featured-car", "animation")} id={cx("featured-car")}>
      <div className={cx("container")}>
        <ShowCampaignBrand
          data={data}
          handleDelete={handleDelete}
          isLoading={isLoading}
          fetchData={fetchData}
          setIsLoading={setIsLoading}
        />

        <div className={cx("btn-see-more")}>
          <Button outline={true}>Xem Thêm</Button>
        </div>
      </div>
    </section>
  );
};
export default AllCampaignBrand;
