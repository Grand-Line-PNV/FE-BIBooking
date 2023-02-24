import React, { Fragment } from "react";
import styles from "./EditProfile.module.scss";
import classNames from "classnames/bind";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button/Button";

const cx = classNames.bind(styles);

const EditServices = () => {
  return (
    <Fragment>
      <form className={cx("form-inf")}>
        <Input
          title="Title"
          primary={true}
          large={true}
          placeholder="Enter your services ..."
        />
        <Input
          title="Description"
          rows={2}
          placeholder="Enter your services ..."
          large={true}
        />
      </form>
      <div className={cx("submit")}>
            <Button primary={true} large={true} className={cx("heading-small")}>
              Save
            </Button>
          </div>
    </Fragment>
  );
};

export default EditServices;
