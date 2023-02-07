import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { Logo, Saly1 } from "../../../../assets/images/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLockOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button/Button";
const cx = classNames.bind(styles);

const RegisterScreen = () => {
  const [width, setWidth] = useState("80px");
  const [right, setRight] = useState("30");
  const [lock, setLock] = useState("none");
  const [showPassword, setShowPassword] = useState(false);
  const [showBrandLogin, setShowBrandLogin] = useState(false);
  const handleToggleRight = () => {
    setWidth("105px");
    setRight("0px");
    setShowBrandLogin(!showBrandLogin);
  };
  const handleToggleLeft = () => {
    setShowBrandLogin(!showBrandLogin);
    setWidth("81px");
    setRight("103px");
  };
  const handleLockClose = () => {
    setLock("none");
    setShowPassword(!showPassword);
  };
  const handleLockOpen = () => {
    setLock("block");
    setShowPassword(!showPassword);
  };
  return (
    // <div>
    //   <div className={cx("wrapper")}>
    //     <div className={cx("title")}>
    //       <h1>B&I Booking</h1>
    //     </div>
    //     <div className={cx("background-login")}>
    //       <img
    //         src="https://iili.io/H1b1u2f.png"
    //         className={cx("background-image")}
    //         alt=""
    //       />
    //       <div className={cx("rectangle1")}>
    //         <h3 className={cx("sologan")}>
    //           Join with us and grow the platform
    //         </h3>
    //       </div>
    //       <div className={cx("rectangle2")}>
    //         <div className={cx("rectangle2-form")}>
    //           <div className={cx("choose-role")}>
    //             <div
    //               style={{ width: width, right: right }}
    //               className={cx("btn")}
    //             ></div>
    //             <button
    //               type="button"
    //               className={cx("toggle-btn")}
    //               onClick={handleToggleLeft}
    //             >
    //               Brand
    //             </button>
    //             <button
    //               type="button"
    //               className={cx("toggle-btn")}
    //               onClick={handleToggleRight}
    //             >
    //               Influencer
    //             </button>
    //           </div>
    //           <h2>Create Account</h2>
    //           <div className={cx("button")}>
    //             <Button
    //               className={cx("button-login")}
    //               outline={true}
    //               leftIcon={
    //                 <img src="https://iili.io/H1LYZ5g.png" width="25px" />
    //               }
    //             >
    //               {" "}
    //               Sign up Google
    //             </Button>
    //             <Button
    //               outline={true}
    //               leftIcon={
    //                 <img src='https://iili.io/H1LYtea.png"' width="25px" />
    //               }
    //             >
    //               {" "}
    //               Sign up Facebook
    //             </Button>
    //           </div>
    //           <div
    //             className={cx("brand-login")}
    //             style={{
    //               display: showBrandLogin ? "none" : "block",
    //               transition: "0.5s",
    //             }}
    //           >
    //             <h4
    //               style={{
    //                 color: "gray",
    //                 textAlign: "center",
    //                 marginTop: "5px",
    //               }}
    //             >
    //               ___ OR ___
    //             </h4>
    //             <div className={cx("form-login")}>
    //               <div className={cx("form")}>
    //                 <label>User name</label>
    //                 <FontAwesomeIcon icon={faUser} />
    //               </div>
    //               <input type="email" placeholder="Enter user name" />
    //               <hr />
    //               <div className={cx("form")}>
    //                 <label>Email</label>
    //                 <FontAwesomeIcon icon={faEnvelope} />
    //               </div>
    //               <input type="email" placeholder="Enter email" />
    //               <hr />
    //               <div className={cx("form")}>
    //                 <label>Password</label>
    //                 <FontAwesomeIcon
    //                   icon={faLock}
    //                   onClick={handleLockOpen}
    //                   style={{ display: lock === "none" ? "block" : "none" }}
    //                 />
    //                 <FontAwesomeIcon
    //                   icon={faLockOpen}
    //                   style={{ display: lock }}
    //                   onClick={handleLockClose}
    //                 />
    //               </div>
    //               <input
    //                 type={showPassword ? "text" : "password"}
    //                 placeholder="Enter Password"
    //               />
    //               <hr />
    //             </div>
    //             <div style={{ textAlign: "center" }}>
    //               <Button primary={true} style={{ width: "250px" }}>
    //                 Create Account
    //               </Button>
    //             </div>
    //           </div>
    //           <div className={cx("status-account")}>
    //             <p>Already have an account?</p>
    //             <h4>Log in</h4>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    // <div>
    //   <div className={cx("auth")}>
    //     <img
    //       style={{ objectFit: "cover", padding: "30px 20px" }}
    //       src={Logo}
    //       alt="LogoB&IBooking"
    //     />
    //     <div className={cx("container")}>
    //       <div className={cx("auth-container")}>
    //         <div className={cx("block-left")}>
    //           <p className={cx("auth-title")}>Tell me more about you</p>
    //           <img className={cx("saly1-img")} src={Saly1} alt="Saly1" />
    //         </div>
    //         <div className={cx("block-right")}>
    //           <div className={cx("block-container")}>
    //             {/* Call files here */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default RegisterScreen;
