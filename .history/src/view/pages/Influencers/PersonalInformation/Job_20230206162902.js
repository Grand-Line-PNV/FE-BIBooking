import React from "react";

export default function Job() {
  return (
    <>
      <div className={cx("job")}>
        <p className={cx("job-title")}>Your job</p>
        <ul className={cx("list-job")}>
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
          <li className={cx("list-job-item")}>
            <a href="#" className={cx("list-job-link")}>
              Freelancer
            </a>
          </li>
        </ul>
        <div className={cx("submit")}>
          <Button primary={true} radius={true} text={true}>
            Continue
          </Button>
        </div>
      </div>
    </>
  );
}
