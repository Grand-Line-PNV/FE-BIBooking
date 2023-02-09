import ProfileIntro from "./ProfileIntro";
import ProfileInfor from "./ProfileInfor";
import ProfileSocialMedia from "./ProfileSocialMedia";
import ProfileGenderRatio from "./ProfileGenderRatio";
import ProfileMyServices from "./ProfileMyServices";
import ProfileCampaignJoined from "./ProfileCampaignJoined";
import ProfileFeedback from "./ProfileFeedback";
const ProfileScreen = () => {
  return (
    <div>
      <ProfileIntro/>
      <ProfileInfor/>
      <ProfileSocialMedia/>
      <ProfileGenderRatio/>
      <ProfileMyServices/>
      <ProfileCampaignJoined/>
      <ProfileFeedback/>
    </div>
  );
};
export default ProfileScreen;
