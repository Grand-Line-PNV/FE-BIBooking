import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CampaignStyles.module.scss";
import Button from "../../../../../components/Button/Button";
import ShowCampaignInfluencer from "../../../../../components/influencer/campaign/ShowCampaign";
import useFormData from "../../../../../hooks/useFormData";
import { getCampaignInfluencer } from "../../../../../api/influencer";
import "./AllCampaign.css";

const cx = classNames.bind(styles);

const AllCampaignInfluencer = () => {
  const { data, setData } = useFormData([]);

  const fetchData = async () => {
    const result = await getCampaignInfluencer(data);
    console.log(result);
    setData(result.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={cx("section", "featured-car")} id={cx("featured-car")}>
      <div className={cx("container")}>
        <ul className={cx("featured-car-list")}>
          <ShowCampaignInfluencer data={data} fetchData={fetchData}/>
        </ul>

        <div className={cx("btn-see-more")}>
          <Button outline={true}>Xem Thêm</Button>
        </div>
      </div>
    </section>
  );
};
export default AllCampaignInfluencer;