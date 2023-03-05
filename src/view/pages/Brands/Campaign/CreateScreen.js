import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import styles from "./CreateCampaign.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../components/Button/Button";
import useFormData from "../../../../hooks/useFormData";
import Input from "../../../../components/Input";
import { createCampaignBrand } from "../../../../api/brand";
import { brandAction } from "../../../../features/feature/brand";
import Select from "react-select";
import { convertObjectToFormData } from "../../../../utils/convertDataUtils";
import InputMask from "react-input-mask";

const cx = classNames.bind(styles);

export default function CreateCampaign() {
  const brand_id = localStorage.getItem("account_id");

  const dispatch = useDispatch();
  const [campaignImages, setCampaignImages] = useState(null);
  const [productImages, setProductImages] = useState(null);

  const { data, setData, handleChange, errors, setErrors, resetErrors } =
    useFormData({
      brand_id,
      name: "",
      description: "",
      price: 0,
      industry: "",
      hashtag: "",
      socialChannel: "",
      amount: "",
      require: "",
      interest: "",
      started_date: "",
      ended_date: "",
      campaignImages: "",
      productImages: "",
    });

  const handleImageChangeCampaign = (e) => {
    const file = e.target.files[0];
    const previewURL = URL.createObjectURL(file);
    setCampaignImages(previewURL);
    setData({ ...data, campaignImages: file });
  };

  const handleImageChangeProduct = (e) => {
    const file = e.target.files[0];
    const previewURL = URL.createObjectURL(file);
    setProductImages(previewURL);
    setData({ ...data, productImages: file });
  };

  const handleSubmit = async (event) => {
    resetErrors();
    try {
      event.preventDefault();
      const formData = convertObjectToFormData(data);
      const response = await createCampaignBrand(formData);
      dispatch(brandAction.addOne(data));
    } catch (error) {
      if (error.status === 401) {
      } else if (error.status === 422) {
        setErrors(error.data.errors);
      }
    }
  };

  return (
    <>
      <p className={cx("profile-path", "heading-small")}>
        <span>Home</span>
        <span> Create Campaign</span>
      </p>
      <h2 className={cx("profile-title", "heading")}>Create Campaign</h2>
      <div className={cx("create-campaign")}>
        <form onSubmit={handleSubmit}>
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
              <Input
                type="text"
                id={cx("socialChannel")}
                title="Social Platform"
                name="socialChannel"
                value={data.socialChannel}
                onChange={handleChange}
                require
                star
              />
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
                id={cx("name")}
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
                id={cx("name")}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                  star
                />
                <img
                  id="preview-img"
                  className={cx("img-thumbnail")}
                  alt=""
                  name="productImages"
                  src={campaignImages}
                />
              </span>
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
                  star
                />
                <img
                  id="preview-img"
                  className={cx("img-thumbnail")}
                  alt=""
                  name="productImages"
                  src={productImages}
                />
              </span>
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
