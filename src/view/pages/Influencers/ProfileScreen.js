import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
import ProfileIntro from "./ProfileIntro";
import ProfileInfor from "./ProfileInfor";
import ProfileSocialMedia from "./ProfileSocialMedia";
import ProfileGenderRatio from "./ProfileGenderRatio";
import ProfileMyServices from "./ProfileMyServices";
// const cx = classNames.bind(styles);
const ProfileScreen = () => {
  return (
    <div>
      <ProfileIntro/>
      <ProfileInfor/>
      <ProfileSocialMedia/>
      <ProfileGenderRatio/>
      <ProfileMyServices/>
    </div>
  );
};
export default ProfileScreen;
