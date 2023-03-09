import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import styles from "./ProfileScreen.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../components/Button/Button";
import useFormData from "../../../../hooks/useFormData";
import Input from "../../../../components/Input";
import { createInfoBrand } from "../../../../api/brand";
import { brandAction } from "../../../../features/feature/brand";
import useLocationForm from "../../../../hooks/useLocationForm";
import Select from "react-select";
import { convertObjectToFormData } from "../../../../utils/convertDataUtils";

const cx = classNames.bind(styles);

export default function ProfileScreen() {
  const account_id = localStorage.getItem("account_id");
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const { state, onProvinceSelect, onDistrictSelect, onWardSelect  } =
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
    console.log(file)
    const previewURL = URL.createObjectURL(file);
    setImagePreview(previewURL);
    setData({...data, image: file})
  };

  const handleSubmit = async (event) => {
    resetErrors();
    try {
      event.preventDefault();
      const formData = convertObjectToFormData(data)
      const response = await createInfoBrand(formData);
      dispatch(brandAction.addOne(data));
    } catch (error) {
      if (error.status === 401) {
      } else if (error.status === 422) {
        setErrors(error.data.errors);
      }
    }
  };

  return (
    <section className={cx("profile", "animation")}>
      <div className={cx("container")}>
        <div className={cx("profile-container")}>
          <p className={cx("profile-path", "heading-small")}>
            <span>Home</span>
            <span>Profile</span>
          </p>
          <h2 className={cx("profile-title", "heading")}>
            Brand’s information
          </h2>
          <form onSubmit={handleSubmit}>
            <div className={cx("form-inf")}>
              <div className={cx("form-control-left")}>
                <div className={cx("form-group")}>
                  <Input
                    type="text"
                    placeholder="Enter full name"
                    title="full name"
                    name="fullname"
                    id="fullname"
                    value={data.fullname}
                    onChange={handleChange}
                    primary={true}
                    large={true}
                    star
                  />
                </div>
                {errors.fullname && (
                  <div
                    className={cx("text", "text-medium")}
                    style={{ color: "red", display: "flex" }}
                  >
                    {errors.fullname}
                  </div>
                )}
                <div className={cx("form-group")}>
                  <Input
                    type="text"
                    placeholder="Enter nick name"
                    title="Nick name"
                    name="nickname"
                    id="nickname"
                    value={data.nickname}
                    onChange={handleChange}
                    primary={true}
                    large={true}
                    star
                  />
                </div>
                {errors.nickname && (
                  <div
                    className={cx("text", "text-medium")}
                    style={{ color: "red", display: "flex" }}
                  >
                    {errors.nickname}
                  </div>
                )}
                <div className={cx("form-group")}>
                  <Input
                    type="date"
                    placeholder="Enter dob"
                    title="Date Of Birth"
                    name="dob"
                    id="dob"
                    value={data.dob}
                    onChange={handleChange}
                    primary={true}
                    large={true}
                    star
                  />
                </div>
                {errors.dob && (
                  <div
                    className={cx("text", "text-medium")}
                    style={{ color: "red", display: "flex" }}
                  >
                    {errors.dob}
                  </div>
                )}
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
                        value="male"
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
                        value="female"
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
                        value="other"
                        checked={data.gender === "other"}
                        onChange={handleChange}
                        id="other"
                      />
                      <label className={cx("label-radio", "text")} for="other">
                        Others
                      </label>
                    </div>
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
                <div className={cx("form-group")}>
                  <Input
                    type="text"
                    placeholder="Enter phone number"
                    title="phone number"
                    name="phone_number"
                    id="phone_number"
                    value={data.phone_number}
                    onChange={handleChange}
                    primary={true}
                    large={true}
                    star
                  />
                </div>
                {errors.phone_number && (
                  <div
                    className={cx("text", "text-medium")}
                    style={{ color: "red", display: "flex" }}
                  >
                    {errors.phone_number}
                  </div>
                )}
                <div className={cx("form-group")}>
                  <Input
                    type="text"
                    placeholder="Enter description"
                    title="Description"
                    name="description"
                    id="description"
                    value={data.description}
                    onChange={handleChange}
                    primary={true}
                    large={true}
                    star
                  />
                </div>
                {errors.description && (
                  <div
                    className={cx("text", "text-medium")}
                    style={{ color: "red", display: "flex" }}
                  >
                    {errors.description}
                  </div>
                )}
              </div>
              <div className={cx("form-control-right")}>
                <div className={cx("form-group")}>
                  <Input
                    type="text"
                    placeholder="Enter brand name"
                    title="Brand name"
                    name="brand_name"
                    id="brand_name"
                    value={data.brand_name}
                    onChange={handleChange}
                    primary={true}
                    large={true}
                    star
                  />
                </div>
                {errors.brand_name && (
                  <div
                    className={cx("text", "text-medium")}
                    style={{ color: "red", display: "flex" }}
                  >
                    {errors.brand_name}
                  </div>
                )}
                <div className={cx("form-group")}>
                  <Input
                    type="text"
                    placeholder="Enter website/fanpage"
                    title="website"
                    name="website"
                    id="website"
                    value={data.website}
                    onChange={handleChange}
                    primary={true}
                    large={true}
                    star
                  />
                </div>
                {errors.website && (
                  <div
                    className={cx("text", "text-medium")}
                    style={{ color: "red", display: "flex" }}
                  >
                    {errors.website}
                  </div>
                )}
                <div className={cx("form-group")}>
                  <Input
                    type="text"
                    placeholder="Enter industry"
                    title="industry"
                    name="industry"
                    id="industry"
                    value={data.industry}
                    onChange={handleChange}
                    primary={true}
                    large={true}
                    star
                  />
                </div>
                {errors.industry && (
                  <div
                    className={cx("text", "text-medium")}
                    style={{ color: "red", display: "flex" }}
                  >
                    {errors.industry}
                  </div>
                )}
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
                  />
                  <Input
                    type="text"
                    placeholder="Enter industry"
                    name="address_line1"
                    disabled={!(selectedProvince && selectedDistrict && selectedWard)}
                    value={data.address_line1}
                    onChange={handleChange}
                    primary={true}
                    large={true}
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
                <div className={cx("form-group")}>
                  <label className={cx("form-label", "heading-small")}>
                    Logo
                  </label>
                  <span className={cx("form-input-img")}>
                    <input
                      type="file"
                      name="image"
                      className={cx("file-upload-default")}
                      onChange={handleImageChange}
                    />
                    <img
                      id="preview-img"
                      className={cx("img-thumbnail")}
                      style={{ width: "10rem" }}
                      alt=""
                      name="image"
                      src={imagePreview}
                    />
                    {errors.image && (
                    <div
                      className={cx("text", "text-medium")}
                      style={{ color: "red", display: "flex" }}
                    >
                      {errors.image}
                    </div>
                  )}
                  </span>
                </div>
              </div>
            </div>
            <div className={cx("submit-inf")}>
              <Button
                primary={true}
                large={true}
                className={cx("heading-small")}
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
