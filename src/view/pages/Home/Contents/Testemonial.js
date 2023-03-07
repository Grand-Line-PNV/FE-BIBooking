import classNames from "classnames/bind";
import styles from "./HomeStyles.module.scss";
import Button from "../../../../components/Button/Button";
import { HeroImg, HeroBlock1, HeroBlock2 } from "../../../../assets/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testemonial.css";
import { dataDigitalBestSeller } from "./data";

const cx = classNames.bind(styles);
const Testemonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section className={cx("testemonial")}>
        <div className={cx("container")}>
          <div className={cx("boxed")}>
            <h2 className={cx("testemonial-heading", "heading-small")}>
              TESTEMONIALS
            </h2>
            <h2 className={cx("same-heading")}>
              What The People Thinks About Us
            </h2>
          </div>
          <Slider {...settings}>
            {dataDigitalBestSeller.map((item) => (
                <div
                  className={cx("testemonial-item")}
                  style={{ width: "1000px !important" }}
                >
                  <div className={cx("testemonial-top")}>
                    <div className={cx("testemonial-info")}>
                      <div className={cx("testemonial-avatar")}>
                        <img
                          src={item.linkImg}
                          alt=""
                        />
                      </div>
                      <div className={cx("testemonial-content")}>
                        <h3 className={cx("testemonial-name")}>{item.name}</h3>
                        <span className={cx("testemonial-address")}>{item.address}</span>
                      </div>
                    </div>
                  </div>
                  <div className={cx("text", "testemonial-desc")}>
                    {item.descriptions}
                  </div>
                </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};
export default Testemonial;
