import Intro from "./Intro";
import Infor from "./Infor";
import SocialMedia from "./SocialMedia";
import GenderRatio from "./GenderRatio";
import MyServices from "./MyServices";
import CampaignJoined from "./CampaignJoined";
import Feedback from "./Feedback";
const AllProfileScreen = () => {
  return (
    <div>
      <Intro/>
      <Infor/>
      <SocialMedia/>
      <GenderRatio/>
      <MyServices/>
      <CampaignJoined/>
      <Feedback/>
    </div>
  );
};
export default AllProfileScreen;
