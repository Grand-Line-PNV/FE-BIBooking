import React, { Fragment, useState } from "react";
import styles from "./EditProfile.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../../components/Button/Button";
import { createService } from "../../../../../api/influencer";
import ServiceRows from "./ServiceRows";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import showToast from "../../../../../components/toast/Toast";

const cx = classNames.bind(styles);

const EditServices = () => {
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
      await createService(serviceData);
      showToast(false, "'Service created successfully!");
    } catch (error) {
      showToast(true, "Error! An error occurred. Please try again later!");
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
          <button onClick={addServiceRows} className={cx("btn-plus")}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <ServiceRows
          rowsData={rowsData}
          deleteServiceRows={deleteServiceRows}
          handleChange={handleChange}
        />
        <div className={cx("submit")}>
          <Button primary={true} large={true} className={cx("heading-small")}>
            Save
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default EditServices;
