import React from "react";
import styles from "./TaskLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Apply = () => {
  return (
    <div className={cx("nav-editProfile")}>

<div className={cx("table-wrapper")}>
      <table className={cx("fl-table")}>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Desscription</th>
            <th>Deadline</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Live stream “vaseline dry serum” on Facebook Live stream “vaseline dry serum” on Facebook</td>
            <td>Outerity</td>
            <td><button>Detail</button></td>
            <td>21/11/2000</td>
            <td>Waiting for approval</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Live stream “vaseline dry serum” on Facebook</td>
            <td>Outerity</td>
            <td><button>Detail</button></td>
            <td>21/11/2000</td>
            <td>Waiting for approval</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Live stream “vaseline dry serum” on Facebook</td>
            <td>Outerity</td>
            <td><button>Detail</button></td>
            <td>21/11/2000</td>
            <td>Waiting for approval</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Live stream “vaseline dry serum” on Facebook</td>
            <td>Outerity</td>
            <td><button>Detail</button></td>
            <td>21/11/2000</td>
            <td>Waiting for approval</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Apply;
