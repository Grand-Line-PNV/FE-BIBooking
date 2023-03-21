import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import styles from "../../Brands/Campaign/CreateCampaign.module.scss";
import "./Profile.css";
import classNames from "classnames/bind";
import Button from "../../../../components/Button/Button";
import useFormData from "../../../../hooks/useFormData";
import Input from "../../../../components/Input";
import { createInfoBrand, infoBrand } from "../../../../api/brand";
import { brandAction } from "../../../../features/feature/brand";
import useLocationForm from "../../../../hooks/useLocationForm";
import Select from "react-select";
import { convertObjectToFormData } from "../../../../utils/convertDataUtils";
import PreLoader from "../../../../components/preLoader/PreLoader";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

export default function CreateBrands() {
    const navigation = useNavigate();
  const account_id = localStorage.getItem("account_id");
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { state, onProvinceSelect, onDistrictSelect, onWardSelect } =
    useLocationForm(false);
  const {
    provinceOptions,
    districtOptions,
    wardOptions,
    selectedProvince,
    selectedDistrict,
    selectedWard,
  } = state;
  const { data, setData, handleChange, errors, setErrors, resetErrors } =
    useFormData({
      account_id,
      fullname: "",
      nickname: "",
      brand_name: "",
      dob: "",
      description: "",
      phone_number: "",
      gender: "",
      website: "",
      industry: "",
      image: "",
      address_line1: "",
      address_line2: "",
      address_line3: "",
      address_line4: "",
    });

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      address_line2: state.selectedWard?.label || "",
      address_line3: state.selectedDistrict?.label || "",
      address_line4: state.selectedProvince?.label || "",
    }));
  }, [state, setData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const previewURL = URL.createObjectURL(file);
    setImagePreview(previewURL);
    setData({ ...data, image: file });
  };

  const getData = async () => {
    const result = await infoBrand(account_id);
  };

  const handleSubmit = async (event) => {
    resetErrors();
    try {
      event.preventDefault();
      setIsLoading(true);
      const formData = convertObjectToFormData({
        ...data,
        ...{ ward_code: selectedWard.value },
      });
      const response = await createInfoBrand(formData);
      dispatch(brandAction.addOne(data));
      getData();
      navigation("/brand/profile");
    } catch (error) {
      setIsLoading(false);
      if (error.status === 401) {
      } else if (error.status === 422) {
        setErrors(error.data.errors);
      }
    }
  };

  return (
    <div className={cx("create-campaign")}>
      {isLoading ? <PreLoader /> : <></>}
      <form onSubmit={handleSubmit} encType="multiple">
        <div className={cx("form")}>
          <div className={cx("form-group")}>
            <Input
              type="text"
              id={cx("fullname")}
              title="Fullname"
              name="fullname"
              value={data.fullname}
              onChange={handleChange}
              require
              star
            />
            {errors.fullname && (
              <div
                className={cx("text", "text-medium")}
                style={{ color: "red", display: "flex" }}
              >
                {errors.fullname}
              </div>
            )}
          </div>
          <div className={cx("form-group")}>
            <Input
              type="text"
              id={cx("brand_name")}
              title="Brand Name"
              name="brand_name"
              value={data.brand_name}
              onChange={handleChange}
              require
              star
            />
            {errors.brand_name && (
              <div
                className={cx("text", "text-medium")}
                style={{ color: "red", display: "flex" }}
              >
                {errors.brand_name}
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
              id={cx("nickname")}
              title="Nick Name"
              name="nickname"
              value={data.nickname}
              onChange={handleChange}
              require
              star
            />
            {errors.nickname && (
              <div
                className={cx("text", "text-medium")}
                style={{ color: "red", display: "flex" }}
              >
                {errors.nickname}
              </div>
            )}
          </div>
          <div className={cx("form-group")}>
            <Input
              type="text"
              id={cx("website")}
              title="Website / Panpage"
              name="website"
              value={data.website}
              onChange={handleChange}
              require
              star
            />
            {errors.website && (
              <div
                className={cx("text", "text-medium")}
                style={{ color: "red", display: "flex" }}
              >
                {errors.website}
              </div>
            )}
          </div>
          <div className={cx("form-group")}>
            <Input
              type="tel"
              pattern="[0-9]{10}"
              id={cx("phone_number")}
              title="Phone Number"
              name="phone_number"
              value={data.phone_number}
              onChange={handleChange}
              require
            />
            {errors.phone_number && (
              <div
                className={cx("text", "text-medium")}
                style={{ color: "red", display: "flex" }}
              >
                {errors.phone_number}
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
            <span className={cx("form-input-img-profile")}>
              <Input
                type="file"
                id={cx("campaignImages")}
                title="Image"
                name="campaignImages"
                onChange={handleImageChange}
                require
                multiple
                star
              />
              <img
                id="preview-img"
                className={cx("img-thumbnail-profile")}
                style={{ width: "15rem" }}
                alt=""
                name="image"
                src={imagePreview}
              />
            </span>
            {errors.image && (
              <div
                className={cx("text", "text-medium")}
                style={{ color: "red", display: "flex" }}
              >
                {errors.image}
              </div>
            )}
          </div>
          <div className={cx("form-group")}>
            <Input
              type="date"
              id={cx("dob")}
              title="Day Of Birth"
              name="dob"
              value={data.dob}
              onChange={handleChange}
              require
              star
            />
            {errors.dob && (
              <div
                className={cx("text", "text-medium")}
                style={{ color: "red", display: "flex" }}
              >
                {errors.dob}
              </div>
            )}
          </div>
          <div className={cx("form-group")}>
            <label className={cx("form-label", "heading-small")}>
              Gender <strong className={cx("required")}>*</strong>
            </label>
            <div className={cx("input-radios")}>
              <div className={cx("radio-group")}>
                <input
                  type="radio"
                  className={cx("radio")}
                  name="gender"
                  defaultValue="male"
                  checked={data.gender === "male"}
                  onChange={handleChange}
                  id="male"
                />
                <label className={cx("label-radio", "text")} for="male">
                  Male
                </label>
              </div>
              <div className={cx("radio-group")}>
                <input
                  type="radio"
                  className={cx("radio")}
                  name="gender"
                  defaultValue="female"
                  checked={data.gender === "female"}
                  onChange={handleChange}
                  id="female"
                />
                <label className={cx("label-radio", "text")} for="female">
                  Female
                </label>
              </div>
              <div className={cx("radio-group")}>
                <input
                  type="radio"
                  className={cx("radio")}
                  name="gender"
                  defaultValue="other"
                  checked={data.gender === "other"}
                  onChange={handleChange}
                  id="other"
                />
                <label className={cx("label-radio", "text")} for="other">
                  Others
                </label>
              </div>
            </div>
            {errors.gender && (
              <div
                className={cx("text", "text-medium")}
                style={{ color: "red", display: "flex" }}
              >
                {errors.gender}
              </div>
            )}
          </div>
          <div className={cx("form-group")}>
            <label className={cx("form-label", "heading-small")}>
              Provinces <strong className={cx("required")}>*</strong>
            </label>
            <Select
              name="province_code"
              key={`province_code_${selectedProvince?.value}`}
              isDisabled={provinceOptions.length === 0}
              options={provinceOptions}
              onChange={(option) => onProvinceSelect(option)}
              placeholder="Tỉnh/Thành"
              defaultValue={selectedProvince}
              required
              className={cx("form-select")}
            />
            <Select
              name="district_code"
              key={`district_code_${selectedDistrict?.value}`}
              isDisabled={districtOptions.length === 0}
              options={districtOptions}
              onChange={(option) => onDistrictSelect(option)}
              placeholder="Quận/Huyện"
              defaultValue={selectedDistrict}
              required
              className={cx("form-select")}
            />
            <Select
              name="ward_code"
              key={`ward_code_${selectedWard?.value}`}
              isDisabled={wardOptions.length === 0}
              options={wardOptions}
              placeholder="Phường/Xã"
              onChange={(option) => onWardSelect(option)}
              defaultValue={selectedWard}
              required
              className={cx("form-select")}
            />
            <input
              type="text"
              placeholder="Address"
              name="address_line1"
              disabled={!(selectedProvince && selectedDistrict && selectedWard)}
              value={data.address_line1}
              onChange={handleChange}
              primary={true}
              large={true}
              className={cx("form-select")}
            />
            {errors.address_line1 && (
              <div
                className={cx("text", "text-medium")}
                style={{ color: "red", display: "flex" }}
              >
                {errors.address_line1}
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
  );
}
