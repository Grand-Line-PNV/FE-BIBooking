import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import styles from "../../Brands/Campaign/CreateCampaign.module.scss";
import "./Profile.css";
import classNames from "classnames/bind";
import Button from "../../../../components/Button/Button";
import useFormData from "../../../../hooks/useFormData";
import Input from "../../../../components/Input";
import {
  createInfoBrand,
  infoBrand,
  updateInfoBrand,
} from "../../../../api/brand";
import { brandAction } from "../../../../features/feature/brand";
import useLocationForm from "../../../../hooks/useLocationForm";
import Select from "react-select";
import { convertObjectToFormData } from "../../../../utils/convertDataUtils";
import PreLoader from "../../../../components/preLoader/PreLoader";
import { useNavigate, useParams } from "react-router-dom";
import showToast from "../../../../components/toast/Toast";
import { infoInfluencer } from "../../../../api/influencer";
import { faCloudArrowUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

export default function UpdateBrands() {
  let { id } = useParams();
  const navigation = useNavigate();
  const account_id = localStorage.getItem("account_id");
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [imgPreview, setImgPreview] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const { data, setData, handleChange, errors, setErrors, resetErrors } =
    useFormData();

  const { state, onProvinceSelect, onDistrictSelect, onWardSelect } =
    useLocationForm(true, {
      userId: account_id,
      wardCode: data.ward_code,
    });
  const {
    provinceOptions,
    districtOptions,
    wardOptions,
    selectedProvince,
    selectedDistrict,
    selectedWard,
  } = state;
  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      address_line1: state.selectedWard?.label || "",
      address_line2: state.selectedWard?.label || "",
      address_line3: state.selectedDistrict?.label || "",
      address_line4: state.selectedProvince?.label || "",
    }));
  }, [state, setData]);



  const getData = async () => {
    const result = await infoInfluencer(account_id);
    setFile(
      result.data.data.files.filter((file) => {
        if (file.path == "brands") {
          return file.url;
        }
      })
    );
    setData(result.data.data.credential);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChangeAvt = (e) => {
    setImgPreview(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    setData({ ...data, image: file });
  }, [file]);

  const handleUpdate = async (event) => {
    resetErrors();
    try {
      event.preventDefault();
      setIsLoading(true);
      const formData = convertObjectToFormData(data);
      const response = await updateInfoBrand(account_id, formData);
      dispatch(brandAction.updateOne(response));
      getData();
      navigation("/brand/profile");
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

  return (
    <div className={cx("create-campaign")}>
      {isLoading ? <PreLoader /> : <></>}
      <form encType="multiple" onSubmit={handleUpdate}>
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
              type="number"
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
              <div className={cx("images")}>
                <Input
                  type="file"
                  id={cx("image")}
                  title="Image"
                  name="image"
                  onChange={handleChangeAvt}
                  accept="image/*"
                  star
                />
                {file ? (
                  <img
                    src={
                      imgPreview ||
                      Object.values(file).map((i) => i.url) ||
                      file
                    }
                    width={120}
                    height={120}
                    alt="avatar"
                    className={cx("avatar")}
                  />
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCloudArrowUp} size="xl" />
                    <p>Browse Files to upload</p>
                  </>
                )}
              </div>
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
              defaultValue={
                // (data.credential && data.credential.address_line4) ||
                selectedProvince
              }
              // required
              className={cx("form-select")}
            />
            <Select
              name="district_code"
              key={`district_code_${selectedDistrict?.value}`}
              isDisabled={districtOptions.length === 0}
              options={districtOptions}
              onChange={(option) => onDistrictSelect(option)}
              placeholder="Quận/Huyện"
              defaultValue={
                // (data.credential && data.credential.address_line3) ||
                selectedDistrict
              }
              // required
              className={cx("form-select")}
            />
            <Select
              name="ward_code"
              key={`ward_code_${selectedWard?.value}`}
              isDisabled={wardOptions.length === 0}
              options={wardOptions}
              placeholder="Phường/Xã"
              onChange={(option) => onWardSelect(option)}
              // defaultValue={data.credential && data.credential.address_line4}
              defaultValue={
                // (data.credential && data.credential.address_line3) ||
                selectedWard
              }
              value={data.credential && data.credential.address_line4}
              // required
              className={cx("form-select")}
            />
            <input
              type="text"
              placeholder="Enter industry"
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
