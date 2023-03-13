//HomePage
import Home from "../view/pages/Home/Home";
//layouts
import RegisterLayout from "../layout/RegisterLayout/index";
import EditProfileLayout from "../layout/EditProfileLayout";
import Confirmation from "../view/pages/Auth/ForgotPassword/Confirmation";
import ForgotPassword from "../view/pages/Auth/ForgotPassword/ForgotPassword";
import NewPassword from "../view/pages/Auth/ForgotPassword/NewPassword";
//pages
import LoginScreen from "../view/pages/Auth/Login/LoginScreen";
import RegisterScreen from "../view/pages/Auth/Register/RegisterScreen";
import ProfileScreen from "../view/pages/Brands/Profile/ProfileScreen";
import AllProfileScreen from "../view/pages/Influencers/profile/AllProfileScreen";
import EditProfile from "../view/pages/Influencers/Setting/profile/EditProfile";
import EditSocialMedia from "../view/pages/Influencers/Setting/profile/EditSocialMedia";
import EditFollowerRate from "../view/pages/Influencers/Setting/profile/EditFollowerRate";
import UpdateInfo from "../view/pages/Influencers/Setting/updateProfile/UpdateInfo";
// Influencer's Campaign
import CampaignInfluencer from "../view/pages/Influencers/campaign/Campaign";
// Brand's Campaign
import CampaignBrand from "../view/pages/Brands/Campaign/Campaign";
import CreateCampaignLayout from "../layout/formLayout";
import CreateCampaign from "../view/pages/Brands/Campaign/CreateScreen";
import UpdateCampaign from "../view/pages/Brands/Campaign/UpdateScreen";
// error
import Error from "../view/pages/Error";
import EditServices from "../view/pages/Influencers/Setting/profile/EditServices";
// Task
import TaskLayout from "../layout/TaskLayout";
import Applying from "../view/pages/Influencers/task/Applying";
import Doing from "../view/pages/Influencers/task/Doing";
import Waiting from "../view/pages/Influencers/task/Waiting";
import UpdateProfileLayout from "../layout/UpdateProfileLayout";
import UpdateSocialMedia from "../view/pages/Influencers/Setting/updateProfile/UpdateSocialMedia";
import UpdateAudienceData from "../view/pages/Influencers/Setting/updateProfile/updateAudienceData";
import UpdateServices from "../view/pages/Influencers/Setting/updateProfile/UpdateServices";
//public routes
const publicRoutes = [
  {
    path: "/register",
    component: RegisterScreen,
    layout: RegisterLayout,
  },
  {
    path: "/login",
    component: LoginScreen,
    layout: RegisterLayout,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "influencer/profile",
    component: AllProfileScreen,
  },
  {
    path: "influencer/setting/edit-profile",
    component: EditProfile,
    layout: EditProfileLayout,
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    layout: RegisterLayout,
  },
  {
    path: "/verification",
    component: Confirmation,
    layout: RegisterLayout,
  },
  {
    path: "/new-password",
    component: NewPassword,
    layout: RegisterLayout,
  },
  {
    path: "/error",
    component: Error,
    // layout:RegisterLayout
  },
  {
    path: "/influencer/setting/edit-profile/social-media",
    component: EditSocialMedia,
    layout: EditProfileLayout,
  },
  {
    path: "/influencer/setting/edit-profile/followr-rate",
    component: EditFollowerRate,
    layout: EditProfileLayout,
  },
  {
    path: "/influencer/setting/edit-profile/services",
    component: EditServices,
    layout: EditProfileLayout,
  },
  {
    path: "/influencer/task/applying",
    component: Applying,
    layout: TaskLayout,
  },
  {
    path: "/influencer/task/doing",
    component: Doing,
    layout: TaskLayout,
  },
  {
    path: "/influencer/task/waiting",
    component: Waiting,
    layout: TaskLayout,
  },
  {
    path: "/influencer/campaign",
    component: CampaignInfluencer,
  },
  {
    path: "brand/profile",
    component: ProfileScreen,
    layout: CreateCampaignLayout,
  },
  {
    path: "/brand/campaign/create",
    component: CreateCampaign,
    layout: CreateCampaignLayout,
  },
  {
    path: "/brand/campaign",
    component: CampaignBrand,
  },
  {
    path:"/influencer/setting/update-profile",
    component: UpdateInfo,
    layout:UpdateProfileLayout
  }
  ,
  {
    path:"/influencer/setting/update-profile/social-media",
    component: UpdateSocialMedia,
    layout:UpdateProfileLayout
  }
  ,
  {
    path:"/influencer/setting/update-profile/audience-data",
    component: UpdateAudienceData,
    layout:UpdateProfileLayout
  }
  ,
  {
    path:"/influencer/setting/update-profile/services",
    component: UpdateServices,
    layout:UpdateProfileLayout
  }
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
