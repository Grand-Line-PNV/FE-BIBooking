import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import styles from "./PaymentStyles.module.scss";
import Input from "../../../components/Input";
import useFormData from "../../../hooks/useFormData";
import { createPaymentVnpay, getPaymentVnpay } from "../../../api/booking";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getDetailTaskInfluencer } from "../../../api/influencer";
import { banks } from "../../../components/Bank_Name";
import PreLoader from "../../../components/preLoader/PreLoader";
const cx = classNames.bind(styles);

const PaymentFormScreen = () => {
  const navigation = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("bookingId");
  const booking_id = parseInt(id);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().substr(0, 10)
  );
  const { data, setData, handleChange, errors, setErrors, resetErrors } =
    useFormData({
      booking_id,
      description: "",
      number: 0,
      date: selectedDate,
      bank_name: "",
    });
  const [isLoading, setIsLoading] = useState(false);
  const [bookingIfo, setBookingIf] = useState({});

  const getData = async () => {
    const result = await getDetailTaskInfluencer(id);
    console.log(result);
    setBookingIf(result.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (event) => {
    resetErrors();
    try {
      event.preventDefault();
      setIsLoading(true);
      // Gọi API để tạo request đến VNPay
      const response = await createPaymentVnpay(data);
      const id_payment = response.data.data.id;
      const result = await getPaymentVnpay(id_payment)
        .then(function (response) {
          console.log(response);
          //   window.location.replace(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      setIsLoading(false);
      if (error.status === 401) {
      } else if (error.status === 402) {
        setErrors(error.data.error);
      }
    }
  };
  return (
    <main className={cx("wrapper")}>
      {isLoading ? <PreLoader /> : <></>}
      <div className={cx("sendRequest")}>
        <form onSubmit={handleSubmit}>
          <div className={cx("container")}>
            <img
              src="https://iili.io/HW3LaBR.md.png"
              alt=""
              className={cx("image")}
            />
            <div className={cx("background-white")}>
              <div className={cx("form")}>
                <h3 className={cx("title")}>Payment methods</h3>
                <from className={cx("form-payment")} >
                  <lable>Bank</lable>
                  <br />
                  <select
                    name="bank_name"
                    id="bank_name"
                    onChange={handleChange}
                    className={cx("select")}
                  >
                    <option value="">Không chọn </option>
                    {banks.map((bank) => (
                      <option key={bank.id} value={bank.value}>
                        {bank.name}
                      </option>
                    ))}
                  </select>
                  {errors.bank_name && (
                    <div
                      className={cx("text", "text-medium")}
                      style={{ color: "red", display: "flex" }}
                    >
                      {errors.bank_name}
                    </div>
                  )}
                  <Input
                    title="Price"
                    primary={true}
                    medium={true}
                    type="number"
                    id="number"
                    name="number"
                    value={bookingIfo.campaign && bookingIfo.campaign.price}
                    onChange={handleChange}
                    disabled
                  />
                  <Input
                    style={{ fontSize: "18px" }}
                    title="Description"
                    cols={20}
                    primary={true}
                    medium={true}
                    type="text"
                    id="description"
                    name="description"
                    value={data.description}
                    onChange={handleChange}
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
                  <span>{bookingIfo.campaign && bookingIfo.campaign.price} VND</span>
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
                  <span>{bookingIfo.campaign && bookingIfo.campaign.price} VND</span>
                </div>
                <Button primary={true}>Payment</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
export default PaymentFormScreen;
