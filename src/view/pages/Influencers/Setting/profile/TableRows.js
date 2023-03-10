import styles from "./EditProfile.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function TableRows({ rowsData, deleteTableRows, handleChange }) {
  return rowsData.map((data, index) => {
    const { name, username, fullname, link, subcribers, avg_interactions } =
      data;
    return (
      <div key={index} className={cx("label")}>
        <input
          type="text"
          value={name}
          onChange={(evnt) => handleChange(index, evnt)}
          name="name"
          style={{width:'170px'}}
        />
        <input
          type="text"
          value={username}
          onChange={(evnt) => handleChange(index, evnt)}
          name="username"
          style={{width:'150px'}}
        />{" "}
        <input
          type="text"
          value={fullname}
          onChange={(evnt) => handleChange(index, evnt)}
          name="fullname"
          style={{width:'220px'}}
        />{" "}
        <input
          type="text"
          value={link}
          onChange={(evnt) => handleChange(index, evnt)}
          name="link"
          style={{width:'250px'}}
        />{" "}
        <input
          type="text"
          value={subcribers}
          onChange={(evnt) => handleChange(index, evnt)}
          name="subcribers"
          style={{width:'100px'}}
        />{" "}
        <input
          type="text"
          value={avg_interactions}
          onChange={(evnt) => handleChange(index, evnt)}
          name="avg_interactions"
          style={{width:'100px'}}
        />{" "}
        <button onClick={() => deleteTableRows(index)} className={cx('btn-close')}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    );
  });
}
export default TableRows;
