import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import styles from "./CreateCampaign.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../components/Button/Button";
import useFormData from "../../../../hooks/useFormData";
import Input from "../../../../components/Input";
import { createCampaignBrand } from "../../../../api/brand";
import { convertObjectToFormData } from "../../../../utils/convertDataUtils";
import "./Create.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import PreLoader from "../../../../components/preLoader/PreLoader";
import useDateValidation from "../../../../hooks/useDateValidation";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useLocation } from "react-router-dom";


const cx = classNames.bind(styles);

export default function CreateCampaign() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  const brand_id = localStorage.getItem("account_id");

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [imagesCampaign, setImagesCampaign] = useState([]);
  const [imagesProduct, setImagesProduct] = useState([]);
  const [selectedImagesCampaign, setSelectedImagesCampaign] = useState([]);
  const [selectedImagesProduct, setSelectedImagesProduct] = useState([]);

  const { data, setData, handleChange, errors, setErrors, resetErrors } =
    useFormData({
      brand_id,
      name: "",
      description: "",
      price: "",
      industry: "",
      hashtag: "",
      socialChannel: [],
      amount: "",
      require: "",
      interest: "",
      started_date: "",
      ended_date: "",
      "campaignImages[]": [],
      "productImages[]": [],
    });

  const { startDate, handleChangeDate, handleStartDateChange } =
    useDateValidation();

  const handleImageChangeCampaign = (e) => {
    const files = e.target.files;
    setData({ ...data, "campaignImages[]": files });
    setSelectedImagesCampaign(Array.from(files));

    const updatedImages = [...imagesCampaign];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        updatedImages.push(e.target.result);
        setImagesCampaign(updatedImages);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImageCampaign = (index) => {
    const updatedImages = [...imagesCampaign];
    updatedImages.splice(index, 1);
    setImagesCampaign(updatedImages);

    const updatedFiles = [...selectedImagesCampaign];
    updatedFiles.splice(index, 1);
    setSelectedImagesCampaign(updatedFiles);
  };

  const handleRemoveImageProduct = (index) => {
    const updatedImages = [...imagesProduct];
    updatedImages.splice(index, 1);
    setImagesProduct(updatedImages);

    const updatedFiles = [...selectedImagesProduct];
    updatedFiles.splice(index, 1);
    setSelectedImagesProduct(updatedFiles);
  };

  const handleImageChangeProduct = (e) => {
    const files = e.target.files;
    setData({ ...data, "productImages[]": files });
    setSelectedImagesProduct(Array.from(files));

    const updatedImages = [...imagesProduct];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        updatedImages.push(e.target.result);
        setImagesProduct(updatedImages);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    resetErrors();
    try {
      event.preventDefault();
      setIsLoading(true);
      const formData = convertObjectToFormData(data);
      const response = await createCampaignBrand(formData);
      navigation("/brand/campaign");
      Swal.fire("Successfully!", "You clicked the button!", "success");
    } catch (error) {
      setIsLoading(false);
      if (error.status === 401) {
      } else if (error.status === 422) {
        setErrors(error.data.errors);
      }
    }
  };

  const handleChangeChannel = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setData((prevData) => ({
        ...prevData,
        socialChannel: [...prevData.socialChannel, value],
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        socialChannel: prevData.socialChannel.filter(
          (channel) => channel !== value
        ),
      }));
    }
  };

  return (
    <>
      {isLoading ? <PreLoader /> : <></>}
      <p className={cx("profile-path", "heading-small")}>
        <span>Home</span>
        <span> Create Campaign</span>
      </p>
      <h2 className={cx("profile-title", "heading")}>Create Campaign</h2>
      <div className={cx("create-campaign")}>
        <form onSubmit={handleSubmit} encType="multiple">
          <div className={cx("form")}>
            <div className={cx("form-group")}>
              <Input
                type="text"
                id={cx("name")}
                title="Campaign Name"
                name="name"
                value={data.name}
                onChange={handleChange}
                require
                star
              />
              {errors.name && (
                <div
                  className={cx("text", "text-medium")}
                  style={{ color: "red", display: "flex" }}
                >
                  {errors.name}
                </div>
              )}
            </div>
            <div className={cx("form-group")}>
              <Input
                type="text"
                id={cx("hashtag")}
                title="Hashtag"
                name="hashtag"
                value={data.hashtag}
                onChange={handleChange}
                require
                star
              />
              {errors.hashtag && (
                <div
                  className={cx("text", "text-medium")}
                  style={{ color: "red", display: "flex" }}
                >
                  {errors.hashtag}
                </div>
              )}
            </div>
            <div className={cx("form-group", "email-group")}>
              <label htmlFor="bio" className={cx("label-textarea")}>
                Social Platform <strong className={cx("required")}>*</strong>
              </label>
              <div className="container-socialChannel">
                <label className="option_item">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="socialChannel[]"
                    value="facebook"
                    checked={data.socialChannel.includes("facebook")}
                    onChange={handleChangeChannel}
                    id="facebook"
                    multiple
                  />
                  <div className="option_inner facebook">
                    <div className="tickmark" />
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className="icon-size"
                      />
                    </div>
                  </div>
                </label>
                <label className="option_item">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="socialChannel[]"
                    value="youtube"
                    checked={data.socialChannel.includes("youtube")}
                    onChange={handleChangeChannel}
                    id="youtube"
                    multiple
                  />
                  <div className="option_inner youtube">
                    <div className="tickmark" />
                    <div className="icon">
                      <FontAwesomeIcon icon={faYoutube} className="icon-size" />
                    </div>
                  </div>
                </label>
                <label className="option_item">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="socialChannel[]"
                    value="instagram"
                    checked={data.socialChannel.includes("instagram")}
                    onChange={handleChangeChannel}
                    id="instagram"
                    multiple
                  />
                  <div className="option_inner instagram">
                    <div className="tickmark" />
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="icon-size"
                      />
                    </div>
                  </div>
                </label>
                <label className="option_item">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="socialChannel[]"
                    value="tiktok"
                    checked={data.socialChannel.includes("tiktok")}
                    onChange={handleChangeChannel}
                    id="tiktok"
                    multiple
                  />
                  <div className="option_inner tiktok">
                    <div className="tickmark" />
                    <div className="icon">
                      <FontAwesomeIcon icon={faTiktok} className="icon-size" />
                    </div>
                  </div>
                </label>
              </div>
              {errors.socialChannel && (
                <div
                  className={cx("text", "text-medium")}
                  style={{ color: "red", display: "flex" }}
                >
                  {errors.socialChannel}
                </div>
              )}
            </div>
            <div className={cx("form-group", "phone-group")}>
              <Input
                type="number"
                id={cx("amount")}
                title="Quantity"
                name="amount"
                value={data.amount}
                onChange={handleChange}
                min="0"
                max="999"
                require
                star
              />
              {errors.amount && (
                <div
                  className={cx("text", "text-medium")}
                  style={{ color: "red", display: "flex" }}
                >
                  {errors.amount}
                </div>
              )}
            </div>
            <div className={cx("textarea-group")}>
              <label htmlFor="bio" className={cx("label-textarea")}>
                Description <strong className={cx("required")}>*</strong>
              </label>
              <textarea
                className={cx("textarea")}
                id={cx("description")}
                name="description"
                value={data.description}
                onChange={handleChange}
                require
              />
              {errors.description && (
                <div
                  className={cx("text", "text-medium")}
                  style={{ color: "red", display: "flex" }}
                >
                  {errors.description}
                </div>
              )}
            </div>
            <div className={cx("form-group")}>
              <Input
                type="text"
                id={cx("industry")}
                title="Industry"
                name="industry"
                value={data.industry}
                onChange={handleChange}
                require
                star
              />
              {errors.industry && (
                <div
                  className={cx("text", "text-medium")}
                  style={{ color: "red", display: "flex" }}
                >
                  {errors.industry}
                </div>
              )}
            </div>
            <div className={cx("form-group")}>
              <Input
                type="text"
                id={cx("interest")}
                title="Interest"
                name="interest"
                value={data.interest}
                onChange={handleChange}
                require
                star
              />
              {errors.interest && (
                <div
                  className={cx("text", "text-medium")}
                  style={{ color: "red", display: "flex" }}
                >
                  {errors.interest}
                </div>
              )}
            </div>
            <div className={cx("textarea-group")}>
              <label htmlFor="bio" className={cx("label-textarea")}>
                Require <strong className={cx("required")}>*</strong>
              </label>
              <textarea
                className={cx("textarea")}
                id={cx("require")}
                name="require"
                value={data.require}
                onChange={handleChange}
                require
              />
              {errors.require && (
                <div
                  className={cx("text", "text-medium")}
                  style={{ color: "red", display: "flex" }}
                >
                  {errors.require}
                </div>
              )}
            </div>
            <div className={cx("form-group")}>
              <Input
                type="date"
                id={cx("started_date")}
                title="Start Date"
                name="started_date"
                value={data.started_date}
                onChange={handleStartDateChange(setData)}
                require
                star
              />
              {errors.started_date && (
                <div
                  className={cx("text", "text-medium")}
                  style={{ color: "red", display: "flex" }}
                >
                  {errors.started_date}
                </div>
              )}
            </div>
            <div className={cx("form-group")}>
              <Input
                type="date"
                id={cx("ended_date")}
                title="End Date"
                name="ended_date"
                value={data.ended_date}
                onChange={handleChangeDate(setData)}
                min={startDate}
                require
                star
              />
              {errors.ended_date && (
                <div
                  className={cx("text", "text-medium")}
                  style={{ color: "red", display: "flex" }}
                >
                  {errors.ended_date}
                </div>
              )}
            </div>
            <div className={cx("form-group")}>
              <span className={cx("form-input-img")}>
                <Input
                  type="file"
                  id={cx("campaignImages")}
                  title="Campaign Images"
                  name="campaignImages"
                  onChange={handleImageChangeCampaign}
                  require
                  multiple
                  star
                />
              </span>
              <div className={cx("img-thumbnail")}>
                {imagesCampaign.map((imageUrl, index) => (
                  <>
                    <img
                      key={index}
                      src={imageUrl}
                      alt="uploaded image"
                      id="preview-img-product"
                      name="productImages"
                    />
                    <Button
                      className={cx("btn-delete")}
                      primary={true}
                      onClick={() => handleRemoveImageCampaign(index)}
                    >
                      Remove
                    </Button>
                  </>
                ))}
              </div>
              {errors.campaignImages && (
                <div
                  className={cx("text", "text-medium")}
                  style={{ color: "red", display: "flex" }}
                >
                  {errors.campaignImages}
                </div>
              )}
            </div>
            <div className={cx("form-group")}>
              <span className={cx("form-input-img")}>
                <Input
                  type="file"
                  id={cx("productImages")}
                  title="Product Images"
                  name="productImages"
                  onChange={handleImageChangeProduct}
                  require
                  multiple
                  star
                />
              </span>
              <div className={cx("img-thumbnail")}>
                {imagesProduct.map((imageUrl, index) => (
                  <>
                    <img
                      key={index}
                      src={imageUrl}
                      alt="uploaded image"
                      id="preview-img-product"
                      name="productImages"
                    />
                    <Button
                      className={cx("btn-delete")}
                      primary={true}
                      onClick={() => handleRemoveImageProduct(index)}
                    >
                      Remove
                    </Button>
                  </>
                ))}
              </div>
              {errors.productImages && (
                <div
                  className={cx("text", "text-medium")}
                  style={{ color: "red", display: "flex" }}
                >
                  {errors.productImages}
                </div>
              )}
            </div>
            <div className={cx("form-group")}>
              <Input
                type="number"
                id={cx("price")}
                title="Price"
                name="price"
                value={data.price}
                onChange={handleChange}
                min="0"
                max="100000000"
                require
              />
              {errors.price && (
                <div
                  className={cx("text", "text-medium")}
                  style={{ color: "red", display: "flex" }}
                >
                  {errors.price}
                </div>
              )}
            </div>
            {/*  */}
          </div>
          <div className={cx("submit-inf")}>
            <Button
              primary={true}
              large={true}
              className={cx("heading-small", "btn")}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
