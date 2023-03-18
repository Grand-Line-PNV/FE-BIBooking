import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./paymentVnpayStyles.module.scss";
// import Vnpay from "vnpay-js";
import useFormData from "../../../../hooks/useFormData";
import { createPaymentVnpay, getPaymentVnpay } from "../../../../api/booking";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getDetailTaskInfluencer } from "../../../../api/influencer";
import { banks } from "../../../../components/Bank_Name";
import Button from "../../../../components/Button/Button";
import PreLoader from "../../../../components/preLoader/PreLoader";


const cx = classNames.bind(styles);

const PaymentForm = () => {
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
    <form onSubmit={handleSubmit} style={{ paddingTop: "100px" }}>
      {isLoading ? <PreLoader /> : <></>}
      <div className="form-group">
        <label htmlFor="amount">bank_name</label>
        <select
          name="bank_name"
          id="bank_name"
          onChange={handleChange}
          class="form-control"
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
      </div>
      <div className="form-group">
        <label htmlFor="amount">description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          value={data.description}
          onChange={handleChange}
        />
        {errors.description && (
          <div
            className={cx("text", "text-medium")}
            style={{ color: "red", display: "flex" }}
          >
            {errors.description}
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          className="form-control"
          id="number"
          name="number"
          value={bookingIfo.campaign && bookingIfo.campaign.price}
          onChange={handleChange}
          disabled
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">date</label>
        <input
          type="date"
          className="form-control"
          id="date"
          name="date"
          value={data.date}
          onChange={handleChange}
          readOnly
          disabled
        />
      </div>
      <Button primary={true}>Payment</Button>
    </form>
  );
};

export default PaymentForm;
