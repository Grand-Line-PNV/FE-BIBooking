import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./ShowCampaignStyles.module.scss";
import Button from "../../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import PreLoader from "../../preLoader/PreLoader";
import UpdateCampaign from "../../../view/pages/Brands/Campaign/UpdateScreen";
import Modal from "react-modal";

const cx = classNames.bind(styles);
const customStyles = {
  content: {
    top: "45%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    // paddingTop: "200px",
    transform: "translate(-50%, -50%)",
    maxHeight: '100%', // giới hạn chiều cao của modal
  },
  mobileContent: {
    maxHeight: 'calc(100vh - 80px)', // giới hạn chiều cao của modal trên màn hình di động
    overflowY: 'scroll', // cho phép cuộn
  },
};

Modal.setAppElement("#root");

const ShowCampaignBrand = ({ data, handleDelete, isLoading, setIsLoading, fetchData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filteredItems, setFilteredItems] = useState(data);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // const handleOpenModal = () => {
  //   setShowModal(true);
  // };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleUpdateForm = (campaignId) => {
    setShowUpdateForm(!showUpdateForm);
  };

  useEffect(() => {
    setFilteredItems(data);
    setIsLoading(false);
  }, [data]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // if (data.length === 0) {
  //   <PreLoader />;
  // }
  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <>
          <div className={cx("create-campaign")}>
            <Button outline={true} to="/brand/campaign/create">
              <FontAwesomeIcon icon={faPlusCircle} /> New Campaign
            </Button>
          </div>
          <ul className={cx("featured-car-list")}>
            {filteredItems.map((item) => (
              <li key={item.id}>
                <div className={cx("featured-car-card")}>
                  <figure className={cx("card-banner", "slider")}>
                    {item.files.map((file, index) => (
                      <div
                        className={
                          index === activeIndex ? "slide active" : "slide"
                        }
                        key={file.id}
                      >
                        <img
                          src={file.url}
                          loading="lazy"
                          width={440}
                          height={300}
                        />
                      </div>
                    ))}
                  </figure>
                  <div className={cx("card-content")}>
                    <div className={cx("card-title-wrapper")}>
                      <h3 className={cx("h3", "card-title")}>
                        <a href="#">{item.name}</a>
                      </h3>
                    </div>
                    <ul className={cx("card-list")}>
                      <li className={cx("card-list-item")}>
                        <span>bởi</span>
                        <span className={cx("card-item-text")}>Shopee</span>
                      </li>
                      <li className={cx("card-list-item")}>
                        <FontAwesomeIcon icon={faCalendar} />
                        <span className={cx("card-item-text")}>
                          {item.started_date}
                        </span>
                      </li>
                    </ul>
                    <div className={cx("card-campaign-wrapper")}>
                      <div className={cx("card-social")}>
                        <ul className={cx("list-icons")}>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon
                                className={cx("fa")}
                                icon={faFacebookSquare}
                              />
                            </a>{" "}
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon
                                className={cx("fa")}
                                icon={faYoutube}
                              />
                            </a>{" "}
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon
                                className={cx("fa")}
                                icon={faInstagram}
                              />
                            </a>{" "}
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon
                                className={cx("fa")}
                                icon={faTiktok}
                              />
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <Button
                          primary={true}
                          onClick={() =>
                            setSelectedItemId(item.id, setShowModal(true), document.body.style.overflow = "hidden",)
                          }
                        >
                          Update
                        </Button>
                        {selectedItemId === item.id && (
                          <Modal
                            isOpen={showModal}
                            onRequestClose={handleCloseModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                          >
                            <UpdateCampaign
                              campaignId={item.id}
                              campaignData={item}
                              fetchData={fetchData}
                              onClose={() =>
                                setSelectedItemId(null, setShowModal(false), document.body.style.overflow = "auto",)
                              }
                            />
                          </Modal>
                        )}
                        <Button
                          primary={true}
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
export default ShowCampaignBrand;
