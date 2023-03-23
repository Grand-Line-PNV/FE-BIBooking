import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input";
import styles from "./SendRquestStyles.module.scss";
import { useEffect } from "react";
import { getCampaignBrand } from "../../../api/brand";
import {
  createBookingCampaignInfluencer,
  infoInfluencer,
} from "../../../api/influencer";
import useFormData from "../../../hooks/useFormData";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import showToast from "../../../components/toast/Toast";
import PreLoader from "../../../components/preLoader/PreLoader";

const cx = classNames.bind(styles);

const SendRequest = () => {
  let { id } = useParams();
  const navigation = useNavigate();
  const brandId = localStorage.getItem("account_id");
  const [isLoading, setIsLoading] = useState(false);
  const [dataCampaign, setDataCampaign] = useState([]);
  const [dataInfluencer, setDataInfluencer] = useState([]);
  const { data, setData, handleChange, setErrors, errors } = useFormData({
    campaign_id: dataCampaign.id,
    influencer_id: id,
  });
  const [bookingId, setBookingId] = useState("");

  const getData = async () => {
    const [resultBrand, resultInfluencer] = await Promise.all([
      getCampaignBrand(brandId),
      infoInfluencer(id),
    ]);
    setDataCampaign(resultBrand.data.data);
    setDataInfluencer(resultInfluencer.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChangeOption = (event) => {
    const campaignId = event.target.value;
    setData({ ...data, campaign_id: parseInt(campaignId) });
    setBookingId(campaignId);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await createBookingCampaignInfluencer(data);
      setIsLoading(false);
      navigation(`/brand/booking/payment?bookingId=${bookingId}`);
      showToast(false, "Successfully!");
    } catch (error) {
      setIsLoading(false);
      showToast(true, "Error! An error occurred. Please try again later!");
      if (error.status === 401) {
      } else if (error.status === 422) {
        setErrors(error.data.errors);
      }
    }
  };

  // const handlePayment = () => {
  //   const bookingId = data.id;
  //   navigation(`/brand/booking/payment?bookingId=${bookingId}`);
  // };
  return (
    <main className={cx("wrapper")}>
      {isLoading ? <PreLoader /> : <></>}
      <div className={cx("sendRequest")}>
        <div className={cx("container")}>
          <img
            src="https://iili.io/HW3LaBR.md.png"
            alt=""
            className={cx("image")}
          />
          <div className={cx("background-white")}>
            <div className={cx("form")}>
              <h3 className={cx("title")}>{dataInfluencer.username}</h3>
              <p>I am here for you! How can I help?</p>
              <div className={cx("content")}>
                <lable>Your Campaign</lable>
                <br />

                <select
                  className={cx("select")}
                  name="campaign_id"
                  onChange={handleChangeOption}
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
                  <Button
                    primary={true}
                    onClick={handleSubmit}
                    to="/brand/booking/payment"
                  >
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
                  <span>
                    {dataInfluencer.credential &&
                      dataInfluencer.credential.address_line1}
                    ,{" "}
                    {dataInfluencer.credential &&
                      dataInfluencer.credential.address_line2}
                    ,{" "}
                    {dataInfluencer.credential &&
                      dataInfluencer.credential.address_line3}
                    ,{" "}
                    {dataInfluencer.credential &&
                      dataInfluencer.credential.address_line4}
                  </span>
                </div>
                <div className={cx("info")}>
                  <span className={cx("icon")}>
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <span>
                    {dataInfluencer.credential &&
                      dataInfluencer.credential.phone_number}
                  </span>
                </div>
                <div className={cx("info")}>
                  <span className={cx("icon")}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span>{dataInfluencer.email}</span>
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
