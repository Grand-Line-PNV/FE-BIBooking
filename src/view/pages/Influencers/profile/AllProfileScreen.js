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
const cx = classNames.bind(styles);

const AllProfileScreen = () => {
  let {id} = useParams();
  // const accountId = 2;
  const [info, setInfo] = useState();
  const [social, setSocial] = useState();
  const [audienceData, setAudienceData] = useState();
  const [service, setService] = useState();
  const [file, setFile] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();

  const getData = async () => {
    const result = await infoInfluencer(id);
    setInfo(result.data.data.credential);
    setSocial(result.data.data.social_info);
    setAudienceData(result.data.data.audience_data);
    setService(result.data.data.services);
    setFile(result.data.data.files);
    setEmail(result.data.data.email);
    setUsername(result.data.data.username)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {info ? (
        <>
          <Intro info={info} file={file} username={username}/>
          <Infor info={info} email={email}/>
          <SocialMedia social={social} />
          <GenderRatio audienceData={audienceData} />
          <MyServices service={service} />
          <CampaignJoined />
          <Feedback />
        </>
      ) : (
        <div
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            padding: "150px",
          }}
        >
          <span>You need create profile</span>
          <Button
            primary={true}
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
