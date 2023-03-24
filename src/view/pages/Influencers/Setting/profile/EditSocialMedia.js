import { useEffect, useState } from "react";
import styles from "./EditProfile.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TableRows from "./TableRows";
import { social } from "../../../../../api/influencer";
import showToast from "../../../../../components/toast/Toast";
const cx = classNames.bind(styles);

function EditSocialMedia() {
  const account_id = localStorage.getItem("account_id");

  const [rowsData, setRowsData] = useState([]);

  const addTableRows = () => {
    if (rowsData.length === 4) alert("Don't have more platform!");
    else {
      const rowsInput = {
        account_id: account_id,
        name: "",
        username: "",
        fullname: "",
        link: "",
        subcribers: 0,
        avg_interactions: 0,
      };
      setRowsData([...rowsData, rowsInput]);
    }
  };

  const deleteTableRows = (index) => {
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
      const socialData = {
        socials: rowsData,
      };
      await social(socialData);
      showToast(false, "Successfully!");
      setRowsData([]);
    } catch (error) {
      showToast(true, "Error! An error occurred. Please try again later!");
      if (error.status === 401) {
      } else if (error.status === 422) {
        console.log(error.data.errors);
      }
    }
  };

  return (
    <div className={cx("container")}>
      <div style={{ width: "100%" }}>
        <div className={cx("label")}>
          <h4>Platform</h4>
          <h4>Username</h4>
          <h4>Fullname</h4>
          <h4>Link</h4>
          <h4>Subcribes</h4>
          <h4>Avg interactives</h4>
          <button onClick={addTableRows} className={cx("btn-plus")}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <TableRows
          rowsData={rowsData}
          deleteTableRows={deleteTableRows}
          handleChange={handleChange}
        />{" "}
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
      </div>
    </div>
  );
}

export default EditSocialMedia;
