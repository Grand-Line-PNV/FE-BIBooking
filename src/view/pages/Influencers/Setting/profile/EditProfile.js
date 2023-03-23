import React, { Fragment, useEffect, useState } from "react";
import styles from "./EditProfile.module.scss";
import classNames from "classnames/bind";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button/Button";
import useFormData from "../../../../../hooks/useFormData";
import { createInfluencerProfile } from "../../../../../api/influencer";
import useLocationForm from "../../../../../hooks/useLocationForm";
import Select from "react-select";
import { convertObjectToFormData } from "../../../../../utils/convertDataUtils";
import AddImage from "./AddImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faFileImage } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import PreLoader from "../../../../../components/preLoader/PreLoader";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import showToast from "../../../../../components/toast/Toast";
const cx = classNames.bind(styles);

const EditProfile = () => {
  const account_id = localStorage.getItem("account_id");
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
  const navigation = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]);
  const [file, setFile] = useState();
  const [avt, setAvt] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { data, setData, handleChange, errors, setErrors, resetErrors } =
    useFormData({
      account_id,
      nickname: "",
      fullname: "",
      dob: "",
      phone_number: "",
      gender: "",
      job: "",
      title_for_job: "",
      description: "",
      content_topic: "",
      influencerImages: [],
      avatar: [],
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

  useEffect(() => {
    setData({ ...data, "influencerImages[]": selectedImages });
  }, [selectedImages]);

  useEffect(() => {
    setData({ ...data, avatarImages: avt });
  }, [avt]);

  const handleSubmit = async (event) => {
    resetErrors();
    try {
      event.preventDefault();
      setIsLoading(true);
      const formData = convertObjectToFormData({
        ...data,
        ...{ ward_code: selectedWard.value },
      });

      await createInfluencerProfile(formData);
      showToast(false, "Successfully!");
      navigation("/influencer/setting/create-profile/social-media");
      setData({
        nickname: "",
        fullname: "",
        dob: "",
        phone_number: "",
        gender: "",
        job: "",
        title_for_job: "",
        description: "",
        content_topic: "",
        address_line1: "",
        address_line2: "",
        address_line3: "",
        address_line4: "",
      });
    } catch (error) {
      showToast(true, "Error! An error occurred. Please try again later!");
      setIsLoading(false);
      if (error.status === 401) {
      } else if (error.status === 422) {
        setErrors(error.data.errors);
      }
    }
  };
  const handleChangeAvt = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setAvt(e.target.files);
  };

  return (
    <Fragment>
      {isLoading ? <PreLoader /> : <></>}
      <form className={cx("form-inf")}>
        <main className={cx("upload")}>
          <div
            className={cx("form-upload")}
            onClick={() => document.querySelector(".input-field").click()}
          >
            <input
              type="file"
              accept="image/*"
              className={cx("input-field")}
              hidden
              onChange={handleChangeAvt}
            />

            {file ? (
              <img
                src={file}
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

          <section className={cx("uploaded-row")}>
            <FontAwesomeIcon icon={faFileImage} />
            <span className={cx("upload-content")}>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => {
                  setFile(null);
                }}
              />
            </span>
          </section>
        </main>
        <div className={cx("form-above")}>
          <div className={cx("form-control-left")}>
            <Input
              type="text"
              placeholder="Nick name"
              title="Nick name"
              primary={true}
              name="nickname"
              large={true}
              value={data.nickname}
              onChange={handleChange}
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
            <Input
              type="text"
              placeholder="Full name"
              title="full name"
              primary={true}
              large={true}
              name="fullname"
              value={data.fullname}
              onChange={handleChange}
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
            <Input
              type="email"
              placeholder="email"
              title="Email"
              primary={true}
              name="email"
              large={true}
              value={data.email}
              onChange={handleChange}
              star
            />
            {errors.email && (
              <div
                className={cx("text", "text-medium")}
                style={{ color: "red", display: "flex" }}
              >
                {errors.email}
              </div>
            )}
            <Input
              type="date"
              placeholder="Enter age"
              title="date of birth"
              primary={true}
              name="dob"
              large={true}
              value={data.dob}
              onChange={handleChange}
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
            <Input
              type="text"
              placeholder="Enter your job"
              title="Job"
              primary={true}
              large={true}
              name="job"
              value={data.job}
              onChange={handleChange}
              star
            />
            {errors.job && (
              <div
                className={cx("text", "text-medium")}
                style={{ color: "red", display: "flex" }}
              >
                {errors.job}
              </div>
            )}
          </div>
          <div className={cx("form-control-right")}>
            {errors.phone_number && (
              <div
                className={cx("text", "text-medium")}
                style={{ color: "red", display: "flex" }}
              >
                {errors.phone_number}
              </div>
            )}
            <Input
              type="text"
              placeholder="Enter phone number"
              title="Phone number"
              primary={true}
              large={true}
              name="phone_number"
              value={data.phone_number}
              onChange={handleChange}
              star
            />
            {errors.gender && (
              <div
                className={cx("text", "text-medium")}
                style={{ color: "red", display: "flex" }}
              >
                {errors.gender}
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
            <div className={cx("form-group")}>
              <label className={cx("form-label", "heading-small")}>
                Provinces <strong className={cx("required")}>*</strong>
              </label>
              <Select
                name="province_code"
                key={`province_code_ ${selectedProvince?.value}`}
                isDisabled={provinceOptions.length === 0}
                options={provinceOptions}
                onChange={(option) => onProvinceSelect(option)}
                placeholder="Tỉnh/Thành"
                defaultValue={selectedProvince}
                className={cx("form-select")}
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
                className={cx("form-select")}
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
                className={cx("form-select")}
                required
              />
              <Input
                type="text"
                placeholder="Address"
                name="address_line1"
                disabled={
                  !(selectedProvince && selectedDistrict && selectedWard)
                }
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
          </div>
        </div>
        <div lassName={cx("form-below")}>
          <Input
            rows="5"
            title="Title"
            name="title_for_job"
            value={data.title_for_job}
            onChange={handleChange}
          />
          {errors.title_for_job && (
            <div
              className={cx("text", "text-medium")}
              style={{ color: "red", display: "flex" }}
            >
              {errors.title_for_job}
            </div>
          )}
          <Input
            rows="5"
            title="Content orientation"
            name="content_topic"
            value={data.content_topic}
            onChange={handleChange}
          />
          {errors.content_topic && (
            <div
              className={cx("text", "text-medium")}
              style={{ color: "red", display: "flex" }}
            >
              {errors.content_topic}
            </div>
          )}
          <Input
            rows="5"
            title="Experiences"
            name="description"
            value={data.description}
            onChange={handleChange}
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
        <AddImage onChange={setSelectedImages} />
        <div className={cx("submit")}>
          <Button
            primary={true}
            large={true}
            className={cx("heading-small")}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default EditProfile;
