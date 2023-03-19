import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input";
import styles from "./BookingStyles.module.scss";
import { useEffect } from "react";
import { getCampaignBrand } from "../../../api/brand";
import {createBookingCampaignInfluencer} from "../../../api/influencer";
import useFormData from "../../../hooks/useFormData";
import { useState } from "react";
import { convertObjectToFormData } from "../../../utils/convertDataUtils";
const cx = classNames.bind(styles);

const SendRequest = () => {
  const brandId = localStorage.getItem("account_id");
  // const userName = localStorage.getItem("username");

  // const email = sessionStorage.getItem("email");
  const [dataCampaign, setDataCampaign] = useState([]);
  const { data, setData, handleChange ,setErrors,errors} = useFormData({
    campaign_id: "",
    influencer_id: "2",
  });
  const getData = async () => {
    const result = await getCampaignBrand(brandId);
    setDataCampaign(result.data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleSubmit = async() => {
    try {
      const formData = convertObjectToFormData(data);
      await createBookingCampaignInfluencer(formData);
      alert("Successfully sent");
    } catch (error) {
      if (error.status === 401) {
      } else if (error.status === 422) {
        setErrors(error.data.errors);
      }
    }
  };
  return (
    <main className={cx("wrapper")}>
      <div className={cx("sendRequest")}>
        <div className={cx("container")}>
          <img
            src="https://iili.io/HW3LaBR.md.png"
            alt=""
            className={cx("image")}
          />
          <div className={cx("background-white")}>
          <div className={cx("form")}>
            <h3 className={cx("title")}>Nguyen Thi Khanh Linh</h3>
            <p>I am here for you! How can I help?</p>
            <div className={cx("content")}>
              <lable>Your Campaign</lable>
              <br />

              <select
                className={cx("select")}
                name="campaign_id"
                onChange={handleChange}
              >
                <option disabled selected>
                  Choose your campaign
                </option>
                {dataCampaign &&
                  dataCampaign.map((val, index) => {
                    return (
                      <option key={index} value={val.id}>
                        {val.name}
                      </option>
                    );
                  })}
              </select>
              {errors.campaign_id && (
              <div
                className={cx("text", "text-medium")}
                style={{ color: "red", display: "flex" }}
              >
                {errors.campaign_id}
              </div>
            )}
              <br />
              <div className={cx("btn")}>
                <Button primary={true} onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </div>
          </div>
          <div className={cx("information")}>
            <img src="https://iili.io/HWFJidb.png" />
            <div className={cx("content")}>
              <div className={cx("info")}>
                <span className={cx("icon")}>
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <span>101B Le Huu Trac, Phuoc My, Son Tra, Da Nang</span>
              </div>
              <div className={cx("info")}>
                <span className={cx("icon")}>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span>0854 301 907</span>
              </div>
              <div className={cx("info")}>
                <span className={cx("icon")}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span>linh.nguyenthikhanh02@gmail.com</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default SendRequest;
