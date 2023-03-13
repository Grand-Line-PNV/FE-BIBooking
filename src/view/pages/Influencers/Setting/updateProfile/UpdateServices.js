import React, { Fragment, useState } from "react";
import styles from "./UpdateProfile.module.scss";
import classNames from "classnames/bind";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button/Button";
import { updateServices } from "../../../../../api/influencer";
import ServiceRows from "./ServiceRows";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

const UpdateServices = () => {
  const account_id = localStorage.getItem("account_id");

  const [rowsData, setRowsData] = useState([]);

  const addServiceRows = () => {
    const rowsInput = {
      account_id: account_id,
      name: "",
      description: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };

  const deleteServiceRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const serviceData = {
        services: rowsData,
      };
      await updateServices(serviceData);
      alert('Service created successfully')
    } catch (error) {
      if (error.status === 401) {
      } else if (error.status === 422) {
        console.log(error.data.errors);
      }
    }
  };
  return (
    <Fragment>
      <form className={cx("form-inf")} onSubmit={handleSubmit}>
        <div className={cx("form-services")}>
          <div>
            <h3 style={{ width: "350px" }}>Service name</h3>
          </div>
          <div>
            <h3 style={{ width: "350px" }}>Service description</h3>
          </div>
          <div onClick={addServiceRows} className={cx("btn-plus")}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <ServiceRows
          rowsData={rowsData}
          deleteServiceRows={deleteServiceRows}
          handleChange={handleChange}
        />
        <div className={cx("submit")}>
          <Button primary={true} large={true} className={cx("heading-small")}>
            Update
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default UpdateServices;
