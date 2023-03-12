import React, { Fragment, useEffect, useState } from "react";
import styles from "./EditProfile.module.scss";
import classNames from "classnames/bind";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button/Button";
import useFormData from "../../../../../hooks/useFormData";
import { createInfluencerProfile } from "../../../../../api/influencer";
import { influencerAction } from "../../../../../features/feature/influencer";
import useLocationForm from "../../../../../hooks/useLocationForm";
import Select from "react-select";
import { convertObjectToFormData } from "../../../../../utils/convertDataUtils";
import { useDispatch } from "react-redux";
import AddImage from "./AddImage";

const cx = classNames.bind(styles);

const EditProfile = () => {
  const account_id = localStorage.getItem("account_id");
  const dispatch = useDispatch();
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

  const [selectedImages, setSelectedImages] = useState([]);

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

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = convertObjectToFormData(data);
      await createInfluencerProfile(formData);
      alert("Successfully created");
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
      if (error.status === 401) {
      } else if (error.status === 422) {
        setErrors(error.data.errors);
      }
    }
  };

  return (
    <Fragment>
      <form className={cx("form-inf")} onSubmit={handleSubmit}>
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
          </div>

          <div className={cx("form-control-right")}>
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
            type="text"
            title="Title"
            large={true}
            primary={true}
            value={data.title_for_job}
            name="title_for_job"
            onChange={handleChange}
            placeholder="Enter title"
          />
          <Input
            rows="5"
            title="Content orientation"
            name="content_topic"
            value={data.content_topic}
            onChange={handleChange}
          />
          <Input
            rows="5"
            title="Experiences"
            name="description"
            value={data.description}
            onChange={handleChange}
          />
        </div>
        <AddImage onChange={setSelectedImages} />
        <div className={cx("submit")}>
          <Button primary={true} large={true} className={cx("heading-small")}>
            Save
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default EditProfile;
