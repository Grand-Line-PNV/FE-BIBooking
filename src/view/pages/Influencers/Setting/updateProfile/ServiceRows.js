import styles from "./UpdateProfile.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function ServiceRows({ rowsData, deleteServiceRows, handleChange }) {
  return rowsData.map((data, index) => {
    const { name, description } = data;
    return (
      <div key={index} className={cx("label")}>
        <input
          type="text"
          value={name}
          onChange={(evnt) => handleChange(index, evnt)}
          name="name"
          style={{ width: "350px" }}
        />
        <input
          type="text"
          value={description}
          onChange={(evnt) => handleChange(index, evnt)}
          name="description"
          style={{ width: "350px",fontSize:'18px' }}
        />{" "}
        <button
          onClick={() => deleteServiceRows(index)}
          className={cx("btn-close")}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    );
  });
}
export default ServiceRows;
