import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CampaignStyles.module.scss";
import Button from "../../../../../components/Button/Button";
import ShowCampaign from "../../../../../components/influencer/campaign/ShowCampaign";
import useFormData from "../../../../../hooks/useFormData";
import { getCampaign } from "../../../../../api/brand";
import "./AllCampaign.css";

const cx = classNames.bind(styles);
const AllCampaign = () => {
  const { data, setData } = useFormData([]);

  const fetchData = async () => {
    const result = await getCampaign(data);
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
          <ShowCampaign data={data} />
        </ul>

        <div className={cx("btn-see-more")}>
          <Button outline={true}>Xem Thêm</Button>
        </div>
      </div>
    </section>
  );
};
export default AllCampaign;

{
  /* <div className="slider">
{item.files.map((file, index) => (
  <div
    className={index === activeIndex ? 'slide active' : 'slide'}
    key={file.id}
  >
    <img src={file.url} />
  </div>
))}
</div> */
}
