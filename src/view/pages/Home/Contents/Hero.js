import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./HomeStyles.module.scss";
import Button from "../../../../components/Button/Button";
import { HeroImg, HeroBlock1 } from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";
import { dataDigitalBestSeller } from "./data";
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);
const Hero = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);
  return (
    <div>
      <section className={cx("hero")}>
        <div className={cx("container")}>
          <div className={cx("hero-container")}>
            <div className={cx("content")}>
              <h2 className={cx("hero-heading")}>
                A platform to connect Influencers with Brands.
              </h2>
              <div className={cx("hero-desc")}>
                <p className={cx("hero-text", "text", "text-medium")}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
                <div className={cx("hero-btn")}>
                  <Button primary={true} className={cx("hero-button")}>
                    Get Started <FontAwesomeIcon icon={faHandPointRight} />
                  </Button>
                  <Button
                    primary={true}
                    className={cx("icon-play")}
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </Button>
                  <p className={cx("hero-text-small", "text", "text-medium")}>Watch Our Video</p>
                </div>
              </div>
            </div>
            <div className={cx("hero-image")}>
              <div className={cx("hero-background", "HeroBlock1")}>
                <img src={HeroBlock1} alt="" />
              </div>
              <div className={cx("hero-background", "hero-group")}>
                <p className={cx("text", "text-medium")}>
                  <b>Our Creative Team</b>
                </p>
                <div className={cx("hero-group-img")}>
                  {dataDigitalBestSeller.map((item) => (
                    <img src={item.linkImg} alt="" />
                  ))}
                </div>
              </div>
              <div className={cx("hero-background", "HeroImg")}>
                <img src={HeroImg} alt="HeroImg.png" border="0" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
