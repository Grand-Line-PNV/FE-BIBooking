import classNames from "classnames/bind";
import styles from "./ProfileStyles.module.scss";
import ProfileIntro from "./ProfileIntro";
import ProfileInfor from "./ProfileInfor";
import ProfileSocialMedia from "./ProfileSocialMedia";
// const cx = classNames.bind(styles);
const ProfileScreen = () => {
  return (
    <div>
      <ProfileIntro/>
      <ProfileInfor/>
      <ProfileSocialMedia/>
    </div>
  );
};
export default ProfileScreen;
