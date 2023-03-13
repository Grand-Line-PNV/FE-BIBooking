import { useEffect, useState } from "react";
import styles from "./UpdateProfile.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TableRows from "./TableRows";
import { updateSocialMedia } from "../../../../../api/influencer";
const cx = classNames.bind(styles);

function UpdateSocialMedia() {
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
      await updateSocialMedia(socialData);
      alert("Successfully updated");
      setRowsData([]);
    } catch (error) {
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
          <h4 style={{ width: "170px" }}>Platform</h4>
          <h4 style={{ width: "150px" }}>Username</h4>
          <h4 style={{ width: "220px" }}>Fullname</h4>
          <h4 style={{ width: "250px" }}>Link</h4>
          <h4 style={{ width: "100px" }}>Subcribes</h4>
          <h4 style={{ width: "100px" }}>Avg interactives</h4>

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
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UpdateSocialMedia;
