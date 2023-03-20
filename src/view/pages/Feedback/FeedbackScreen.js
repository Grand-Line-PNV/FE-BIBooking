import { useState } from "react";
import Button from "../../../components/Button/Button";
import styles from "./FeedbackStyles.module.scss";
import classNames from "classnames/bind";
import Input from "../../../components/Input";
import useFormData from "../../../hooks/useFormData";
import { convertObjectToFormData } from "../../../utils/convertDataUtils";
import { createFeedback } from "../../../api/feature";

const cx = classNames.bind(styles);

const FeedbackScreen = (prop) => {
  const accountId = localStorage.getItem("account_id");

  const [show, setShow] = useState(false);
  const { data, handleChange, setErrors } = useFormData({
    booking_id: prop.bookingId,
    account_id: accountId,
    content: "",
  });
  const handleSubmit = async () => {
    try {
      await createFeedback(data);
      alert("Successfully");
    } catch (error) {
      if (error.status === 401) {
      } else if (error.status === 422) {
        setErrors(error.data.errors);
      }
    }
  };
  return (
    <>
      {" "}
      {show ? null : (
        <Button primary={true} onClick={() => setShow(true)}>
          Feedback
        </Button>
      )}
      {show ? (
        <div className={cx("modal-content")}>
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
                  name='content'
                  value={data.content}
                  onChange={handleChange}
                />
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
