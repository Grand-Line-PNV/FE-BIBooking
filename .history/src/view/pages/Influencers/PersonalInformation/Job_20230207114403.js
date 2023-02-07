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
            <Button outline={true} large={true}>
              Freelancer
            </Button>
          </li>
          <li className={cx("list-job-item")}>
          <Button outline={true} large={true}>
              Freelancer
            </Button>
          </li>
          <li className={cx("list-job-item")}>
          <Button outline={true} large={true}>
              Freelancer
            </Button>
          </li>
          <li className={cx("list-job-item")}>
          <Button outline={true} large={true}>
              Freelancer
            </Button>
          </li>
          <li className={cx("list-job-item")}>
          <Button outline={true} large={true}>
              Freelancer
            </Button>
          </li>
          <li className={cx("list-job-item")}>
          <Button outline={true} large={true}>
              Freelancer
            </Button>
          </li>
          <li className={cx("list-job-item")}>
          <Button outline={true} large={true}>
              Freelancer
            </Button>
          </li>
          <li className={cx("list-job-item")}>
          <Button outline={true} large={true}>
              Freelancer
            </Button>
          </li>
          <li className={cx("list-job-item")}>
          <Button outline={true} large={true}>
              Freelancer
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}
