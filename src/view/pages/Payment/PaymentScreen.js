import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import styles from "./PaymentStyles.module.scss";
import Input from "../../../components/Input";
const cx = classNames.bind(styles);

const PaymentScreen = () => {
  return (
    <main className={cx("wrapper")}>
      <div className={cx("sendRequest")}>
        <div className={cx("container")}>
          <img
            src="https://iili.io/HW3LaBR.md.png"
            alt=""
            className={cx("image")}
          />
          <div className={cx("background-white")}>
            <div className={cx("form")}>
              <h3 className={cx("title")}>Payment methods</h3>
              <from className={cx("form-payment")}>
                <lable>Bank</lable>
                <br />
                <select className={cx("select")}>
                  <option disabled selected>
                    Choose bank
                  </option>

                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <Input title="Price" primary={true} medium={true} />
                <Input
                  style={{ fontSize: "18px" }}
                  title="Description"
                  cols={20}
                  primary={true}
                  medium={true}
                />
              </from>
            </div>
            <div className={cx("payments")}>
              <div className={cx("discount")}>
                <span className={cx("title")}>Gift Card / Discount code</span>
                <div className={cx("payment")}>
                  <input className={cx("input-discount")} />
                  <Button outline={true} small={true}>
                    Apply
                  </Button>
                </div>
              </div>
              <div className={cx("payment")}>
                <span>Sub total</span>
                <span>120$</span>
              </div>
              <div className={cx("payment")}>
                <span>Tax</span>
                <span>0$</span>
              </div>
              <div className={cx("payment")}>
                <span>Disscount</span>
                <span>0%</span>
              </div>
              <div className={cx("payment")}>
                <span>Total</span>
                <span>120$</span>
              </div>
              <Button primary={true}>Payment</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default PaymentScreen;
