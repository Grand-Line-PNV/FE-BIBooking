import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import styles from "./PaymentStyles.module.scss";
const cx = classNames.bind(styles);

const PaymentScreen = () => {
  const [services, setServices] = useState([
    { id: 0, name: "service1",selected:false },
    { id: 1, name: "service2" ,selected:false },
    { id: 2, name: "service3" ,selected:false },
    { id: 3, name: "service4" ,selected:false },
    { id: 4, name: "service5" ,selected:false },
  ]);
  const [activeId, setActiveId] = useState({});
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    console.log("adndskjdkas", activeId);
  }, [activeId]);

  const handleSelect = (id) => {
    setActiveId((pre) => {
      const next = { ...pre };
      if (next[id]) {
        next[id] = delete next[id];
        return next;
      }
      next[id] = true;
      return next;
    });
  };
  // const handleChangeColor = () => {
  //   Object.keys(activeId).map((k) => k + " = " + activeId[k]);
  // };
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
            <div className={cx("")}>
              <h3 className={cx("title")}>Payment methods</h3>
              <p>Use saved card</p>
              <div className={cx("methods")}>
                <div className={cx("method")} onClick={() => setVisible(1)}>
                  <img src="https://iili.io/HWEulNn.png" alt="atm" />
                  <span
                    className={cx("chose", visible === 1 ? "chosen" : "")}
                  ></span>
                </div>
                <div className={cx("method")} onClick={() => setVisible(2)}>
                  <img src="https://iili.io/HWEucAX.png" alt="momo" />
                  <span
                    className={cx("chose", visible === 2 ? "chosen" : "")}
                  ></span>
                </div>
                <div className={cx("method")} onClick={() => setVisible(3)}>
                  <img src="https://iili.io/HWEua9t.png" alt="zalopay" />
                  <span
                    className={cx("chose", visible === 3 ? "chosen" : "")}
                  ></span>
                </div>
                <div className={cx("method")} onClick={() => setVisible(4)}>
                  <img src="https://iili.io/HWEu7SI.png" alt="shopeepay" />
                  <span
                    className={cx("chose", visible === 4 ? "chosen" : "")}
                  ></span>
                </div>
              </div>
              <div>
                <ul className={cx("services")}>
                  {services.map((todo, index) => (
                    <li
                      key={index}
                      onClick={() => handleSelect(todo.id)}
                      className={cx()}
                    >
                      {todo.name}
                    </li>
                  ))}
                </ul>
              </div>
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
