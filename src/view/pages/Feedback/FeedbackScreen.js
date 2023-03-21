import { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import styles from "./FeedbackStyles.module.scss";
import classNames from "classnames/bind";
import Input from "../../../components/Input";
import useFormData from "../../../hooks/useFormData";
import { createFeedback } from "../../../api/feature";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useNavigate } from "react-router-dom";
import PreLoader from "../../../components/preLoader/PreLoader";

const cx = classNames.bind(styles);

const FeedbackScreen = (prop) => {
  const accountId = localStorage.getItem("account_id");
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const { data, setData, handleChange, setErrors, errors } = useFormData({
    booking_id: prop.bookingId,
    from_account_id: parseInt(accountId),
    to_account_id: prop.toAccountId,
    content: "",
  });

  const handleSubmit = async (event) => {
    console.log(data);
    try {
      event.preventDefault();
      setIsLoading(true);
      await createFeedback(accountId, {...data});
      Swal.fire("Feedback Successfully!", "You clicked the button!", "success");
      setShow(false);
    } catch (error) {
      setIsLoading(false);
      if (error.status === 401) {
      } else if (error.status === 422) {
        setErrors(error.data.errors);
      }
    }
  };
  const handleShowModal = () => {
    setShow(true);
    setIsLoading(false);
    setErrors("");
    setData({
      booking_id: prop.bookingId,
      from_account_id: parseInt(accountId),
      content: "",
      to_account_id: prop.toAccountId,
    });
  };
  return (
    <>
      {" "}
      {show ? null : (
        <Button primary={true} onClick={handleShowModal}>
          Feedback
        </Button>
      )}
      {show ? (
        <div className={cx("modal-content")}>
          {isLoading ? <PreLoader /> : <></>}
          <div className={cx("form-feedback")}>
            <div className={cx(show ? "active" : "disable")}>
              <h2>Write feedback</h2>
              {/* <br /> */}
              <form>
                {/* <p>Campaign: name campaign</p>
                <p>Brand: name campaign</p> */}
                <br />

                <Input
                  title="Content"
                  cols={20}
                  medium={true}
                  rows={10}
                  name="content"
                  value={data.content}
                  onChange={handleChange}
                />
                {errors.content && (
                  <div
                    className={cx("text", "text-medium")}
                    style={{ color: "red", display: "flex" }}
                  >
                    {errors.content}
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Button outline={true} onClick={() => setShow(false)}>
                    Close
                  </Button>
                  <Button primary={true} onClick={handleSubmit}>
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default FeedbackScreen;
