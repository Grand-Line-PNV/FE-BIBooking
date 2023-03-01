import React from "react";
import styles from "./CreateCampaign.module.scss";
import classNames from "classnames/bind";
import Input from "../../../../components/Input";

const cx = classNames.bind(styles);

const CreatePrice = () => {
  return (
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
  );
};

export default CreatePrice;
