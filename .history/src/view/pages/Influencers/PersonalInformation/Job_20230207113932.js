import React from "react";
import Button from "../../../../components/Button/Button";
import classNames from "classnames/bind";
import styles from "./Job.module.scss";

const cx = classNames.bind(styles);

export default function Job() {
  return (
    <>
      <div className={cx("job")}>
        <p className={cx("job-title")}>Your job</p>
        <ul className={cx("list-job")}>
          <li className={cx("list-job-item")}>
            <Button href="#" className={cx("list-job-link")}>
              Freelancer
            </Button>
          </li>
          <li className={cx("list-job-item")}>
            <a href="#" className={cx("list-job-link")}>
              Freelancer
            </a>
          </li>
          <li className={cx("list-job-item")}>
            <a href="#" className={cx("list-job-link")}>
              Freelancer
            </a>
          </li>
          <li className={cx("list-job-item")}>
            <a href="#" className={cx("list-job-link")}>
              Freelancer
            </a>
          </li>
          <li className={cx("list-job-item")}>
            <a href="#" className={cx("list-job-link")}>
              Freelancer
            </a>
          </li>
          <li className={cx("list-job-item")}>
            <a href="#" className={cx("list-job-link")}>
              Freelancer
            </a>
          </li>
          <li className={cx("list-job-item")}>
            <a href="#" className={cx("list-job-link")}>
              Freelancer
            </a>
          </li>
          <li className={cx("list-job-item")}>
            <a href="#" className={cx("list-job-link")}>
              Freelancer
            </a>
          </li>
          <li className={cx("list-job-item")}>
            <a href="#" className={cx("list-job-link")}>
              Freelancer
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
