import Intro from "./Intro";
import Infor from "./Infor";
import SocialMedia from "./SocialMedia";
import GenderRatio from "./GenderRatio";
import MyServices from "./MyServices";
import CampaignJoined from "./CampaignJoined";
import Feedback from "./Feedback";
import { useState } from "react";
import { infoInfluencer } from "../../../../api/influencer";
import Button from "../../../../components/Button/Button";
import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
import { useEffect } from "react";
import { computeHeadingLevel } from "@testing-library/react";
import { useParams } from "react-router";
import PreLoader from "../../../../components/preLoader/PreLoader";
const cx = classNames.bind(styles);

const AllProfileScreen = () => {
  let { id } = useParams();
  const [info, setInfo] = useState();
  const [social, setSocial] = useState();
  const [audienceData, setAudienceData] = useState();
  const [service, setService] = useState();
  const [file, setFile] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [booking, setBooking] = useState();
  const [feedback, setFeedback] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const result = await infoInfluencer(id);
    console.log(result.data);
    setInfo(result.data.data.credential);
    setSocial(result.data.data.social_info);
    setAudienceData(result.data.data.audience_data);
    setService(result.data.data.services);
    setFile(result.data.data.files);
    setEmail(result.data.data.email);
    setUsername(result.data.data.username);
    setFeedback(result.data.data.feedbacks);
    setBooking(result.data.data.bookings);
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {isLoading ? <PreLoader /> : <></>}
      {info ? (
        <>
          <Intro info={info} file={file} username={username} />
          <Infor info={info} email={email} />
          <SocialMedia social={social} />
          <GenderRatio audienceData={audienceData} />
          <MyServices service={service} />
          <CampaignJoined booking={booking} />
          <Feedback feedback={feedback} booking={booking} />
        </>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "20px",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
            height: "100vh"
          }}
        >
          <span className={cx("heading-small")}>You need create profile</span>
          <Button
            primary={true}
            large={true}
            className={cx("intro-button")}
            to="/influencer/setting/create-profile"
          >
            Create Profile
          </Button>
        </div>
      )}
    </div>
  );
};
export default AllProfileScreen;
