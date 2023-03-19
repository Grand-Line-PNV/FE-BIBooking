import { useState } from "react";
import Button from "../../../components/Button/Button";
import styles from "./FeedbackStyles.module.scss";
import classNames from "classnames/bind";
import Input from "../../../components/Input";

const cx = classNames.bind(styles);

const FeedbackScreen = () => {
  const [show, setShow] = useState(false);

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
                <p>Campaign: name campaign</p>
                <p>Brand: name campaign</p>
                <br />

                <Input title="Content" cols={20} medium={true} rows={10} />
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
                  <Button primary={true}>Submit</Button>
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
