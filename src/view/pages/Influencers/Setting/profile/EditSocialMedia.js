import React, { Fragment, useEffect, useState } from "react";
import styles from "./EditProfile.module.scss";
import classNames from "classnames/bind";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import useFormData from "../../../../../hooks/useFormData";
import { convertObjectToFormData } from "../../../../../utils/convertDataUtils";

const cx = classNames.bind(styles);

const EditSocialMedia = () => {
  const [counter, setCounter] = useState(0);
  const account_id = localStorage.getItem("account_id");
  const { data, setData, handleChange,handleChangeIndex, errors, setErrors, resetErrors } =
    useFormData({
      account_id,
      name: "",
      username: "",
      fullname: "",
      avg_interactions: 0,
      subcribes: 0,
      link: "",
    });
    const [listData, setListData] = useState([]);

  useEffect(() => {
    console.log(data);
    console.log("listdata", listData);
  });
  const addInputField = async() => {
    const formData = convertObjectToFormData(data);
    console.log("button", formData);
    if (counter === 3) {
      alert("Don't have more platform to add!");
    } else {
      setCounter(counter + 1);
    }
    await setListData([...listData,data]);
    setData(
      // ...data,
      {
        account_id,
        name: "",
        username: "",
        fullname: "",
        avg_interactions: 0,
        subcribes: 0,
        link: "",
      }
    );
  };
  const removeInputFields = (index) => {
    setCounter(counter - 1);
    const rows = [...data];
    rows.splice(index, 1);
    setData(rows);
  };

  // const handlePlus = () => {
  //   if (counter === 3) {
  //     alert("Don't have more platform to add!");
  //   } else {
  //     setCounter(counter + 1);
  //   }
  // };
  // const handleMinus = () => {
  //   setCounter(counter - 1);
  //   removeInputFields()
  // };

  return (
    <Fragment>
      <form className={cx("form-inf")}>
        <div className={cx("form-above")}>
          <div className={cx("form-control-left")}>
            <div className={cx("form-group")}>
              <label className={cx("form-label")} for="platform">
                Platform <strong className={cx("required")}>*</strong>
              </label>
              <div>
                <select
                  name="name"
                  id="platform"
                  placeholder="Enter platform"
                  value={data.name}
                  onChange={handleChange}
                >
                  <option value="" disabled defaultValue>
                    Select your option
                  </option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="tiktok">Tiktok</option>
                  <option value="youtube">Youtube</option>
                </select>
              </div>
            </div>
            <Input
              type="text"
              placeholder="Enter username"
              title="username"
              primary={true}
              large={true}
              star
              name="username"
              value={data.username}
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="Enter full name"
              title="Full name"
              primary={true}
              large={true}
              star
              name="fullname"
              value={data.fullname}
              onChange={handleChange}
            />
          </div>
          <div className={cx("form-control-right")}>
            <Input
              type="text"
              placeholder="Enter average intereaction"
              title="Average intereaction"
              primary={true}
              name="avg_interactions"
              large={true}
              star
              value={data.avg_interactions}
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="Enter subcribles"
              title="Subcribles"
              primary={true}
              large={true}
              star
              name="subcribes"
              value={data.subcribes}
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="Enter your link account"
              title="Link"
              primary={true}
              large={true}
              star
              name="link"
              value={data.link}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
      <hr></hr>
      {Array.from(Array(counter)).map((c, index) => {
        return (
          <Fragment>
            <form className={cx("form-inf")} key={c}>
              <div className={cx("form-above")}>
                <div className={cx("form-control-left")}>
                  <div className={cx("form-group")}>
                    <label className={cx("form-label")} for="platform">
                      Platform <strong className={cx("required")}>*</strong>
                    </label>
                    <div>
                      <select
                        name="name"
                        id="platform"
                        placeholder="Enter platform"
                        value={data.name}
                        onChange={handleChange}
                      >
                        <option value="" disabled defaultValue>
                          Select your option
                        </option>
                        <option value="facebook">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="tiktok">Tiktok</option>
                        <option value="youtube">Youtube</option>
                      </select>
                    </div>
                  </div>
                  <Input
                    type="text"
                    placeholder="Enter username"
                    title="username"
                    primary={true}
                    large={true}
                    star
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    placeholder="Enter full name"
                    title="Full name"
                    primary={true}
                    large={true}
                    star
                    name="fullname"
                    value={data.fullname}
                    onChange={handleChange}
                  />
                </div>
                <div className={cx("form-control-right")}>
                  <Input
                    type="text"
                    placeholder="Enter average intereaction"
                    title="Average intereaction"
                    primary={true}
                    large={true}
                    star
                    name="avg_interactions"
                    value={data.avg_interactions}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    placeholder="Enter subcribles"
                    title="Subcribles"
                    primary={true}
                    large={true}
                    star
                    name="subcribes"
                    value={data.subcribes}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    placeholder="Enter your link account"
                    title="Link"
                    primary={true}
                    large={true}
                    star
                    name="link"
                    value={data.link}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
            <hr></hr>
          </Fragment>
        );
      })}
      <div className={cx("btn-plus")}>
        <Button primary={true} onClick={addInputField}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        {counter > 0 ? (
          <Button primary={true} onClick={removeInputFields}>
            <FontAwesomeIcon icon={faMinus} />
          </Button>
        ) : (
          ""
        )}
      </div>
      <div className={cx("submit")}>
        <Button primary={true} large={true} className={cx("heading-small")}>
          Save
        </Button>
      </div>
    </Fragment>
  );
};

export default EditSocialMedia;
