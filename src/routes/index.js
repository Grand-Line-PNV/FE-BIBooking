//HomePage
import Home from "../view/pages/Home/Home";
import AboutUs from "../view/pages/Home/AboutUs";
//layouts
import RegisterLayout from "../layout/RegisterLayout/index";
import EditProfileLayout from "../layout/EditProfileLayout";
import Confirmation from "../view/pages/Auth/ForgotPassword/Confirmation";
import ForgotPassword from "../view/pages/Auth/ForgotPassword/ForgotPassword";
import NewPassword from "../view/pages/Auth/ForgotPassword/NewPassword";
import UpdateProfileLayout from "../layout/UpdateProfileLayout";
//pages
import LoginScreen from "../view/pages/Auth/Login/LoginScreen";
import RegisterScreen from "../view/pages/Auth/Register/RegisterScreen";
import AllProfileScreen from "../view/pages/Influencers/profile/AllProfileScreen";
import EditProfile from "../view/pages/Influencers/Setting/profile/EditProfile";
import EditSocialMedia from "../view/pages/Influencers/Setting/profile/EditSocialMedia";
import EditFollowerRate from "../view/pages/Influencers/Setting/profile/EditFollowerRate";
// Influencer's Campaign
import CampaignInfluencer from "../view/pages/Influencers/campaign/Campaign";
import DetailCampaignInfluencer from "../view/pages/Influencers/campaign/content/DetailsCampaign";
// Brand's Campaign
import CampaignBrand from "../view/pages/Brands/Campaign/Campaign";
import CreateCampaignLayout from "../layout/formLayout";
import CreateCampaign from "../view/pages/Brands/Campaign/CreateScreen";
import UpdateCampaign from "../view/pages/Brands/Campaign/UpdateScreen";
// Brand's profile and setting and layout
import InforBandLayout from "../layout/InforBandLayout";
import ProfileSetingBrand from "../view/pages/Brands/Profile/seting/Profile";
import ProfileBrand from "../view/pages/Brands/Profile/ProfileBrand";
import CreateBrands from "../view/pages/Brands/Profile/CreateBrands";
import UpdateBrands from "../view/pages/Brands/Profile/UpdateBrands";
// Brand's Booking History
import BookingHistoryLayout from "../layout/BookingHistoryLayout";
import BookingHistory from "../view/pages/Brands/bookingHistory/BookingHistory";
import DetailsBrand from "../view/pages/Brands/bookingHistory/Detail";
import PaymentFormScreen from "../view/pages/Payment/PaymentScreen";
// error
import Error from "../view/pages/Error";
import EditServices from "../view/pages/Influencers/Setting/profile/EditServices";
// Task Influencers
import TaskLayout from "../layout/TaskLayout";
import DetailsInfluencer from "../view/pages/Influencers/task/Detail";
import SubmitTask from "../view/pages/Influencers/task/SubmitTask";
import Notify from "../view/notifications/Notify";
//payment page
import PaymentScreen from "../view/pages/Payment/PaymentScreen";
//influencer update profile
import {
  UpdateInfo,
  UpdateServices,
  UpdateSocialMedia,
  UpdateAudience,
} from "../view/pages/Influencers/Setting/updateProfile";
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
    path: "/About us",
    component: AboutUs,
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
    path: "/:error",
    component: Error,
    // layout:RegisterLayout
  },
  {
    path: "/brand/:error",
    component: Error,
    // layout:RegisterLayout
  },
  {
    path: "/influencer/:error",
    component: Error,
    // layout:RegisterLayout
  },
  {
    path: "/influencer/setting/edit-profile/social-media",
    component: EditSocialMedia,
    layout: EditProfileLayout,
  },
  {
    path: "/influencer/setting/edit-profile/audience-data",
    component: EditFollowerRate,
    layout: EditProfileLayout,
  },
  {
    path: "/influencer/setting/edit-profile/services",
    component: EditServices,
    layout: EditProfileLayout,
  },
  {
    path: "/influencer/task",
    component: TaskLayout,
  },
  {
    path: "/influencer/task/submit-task",
    component: SubmitTask,
  },
  {
    path: "/influencer/booking-history-detail/:id",
    component: DetailsInfluencer,
  },
  {
    path: "/influencer/campaign",
    component: CampaignInfluencer,
  },
  {
    path: "/influencer/campaign/:id",
    component: DetailCampaignInfluencer,
  },
  {
    path: "brand/seting/profile",
    component: ProfileSetingBrand,
    layout: InforBandLayout,
  },
  {
    path: "brand/profile",
    component: ProfileBrand,
    layout: InforBandLayout,
  },
  {
    path: "brand/profile/create",
    component: CreateBrands,
    layout: InforBandLayout,
  },
  {
    path: "brand/profile/:id",
    component: UpdateBrands,
    layout: InforBandLayout,
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
    path: "/brand/campaign/:id",
    component: UpdateCampaign,
  },
  {
    path: "/brand/notify",
    component: Notify,
  },
  {
    path: "/brand/booking-history",
    component: BookingHistoryLayout,
  },
  {
    path: "/brand/booking-history-detail/:id",
    component: DetailsBrand,
  },
  {
    path: "/brand/booking/payment",
    component: PaymentFormScreen,
  },
  {
    path: "/influencer/setting/update-profile",
    component: UpdateInfo,
    layout: UpdateProfileLayout,
  },
  {
    path: "/influencer/setting/update-profile/social-media",
    component: UpdateSocialMedia,
    layout: UpdateProfileLayout,
  },
  {
    path: "/influencer/setting/update-profile/audience-data",
    component: UpdateAudience,
    layout: UpdateProfileLayout,
  },
  {
    path: "/influencer/setting/update-profile/services",
    component: UpdateServices,
    layout: UpdateProfileLayout,
  },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
