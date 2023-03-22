import styles from "./formLayout.module.scss";
import classNames from "classnames/bind";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const cx = classNames.bind(styles);

export default function CreateCampaignLayout({ children }) {
  return (
    <>
      <Header />
      <section className={cx("form", "animation")}>
        <div className={cx("container")}>
          <div className={cx("form-container")}>{children}</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
