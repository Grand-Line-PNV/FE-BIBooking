//HomePage
import Home from '../view/pages/Home/Home';
//layouts
import RegisterLayout from '../layout/registerLayout/index';
import EditProfileLayout from '../layout/EditProfileLayout';
import Confirmation from '../view/pages/Auth/ForgotPassword/Confirmation';
import ForgotPassword from '../view/pages/Auth/ForgotPassword/ForgotPassword';
import NewPassword from '../view/pages/Auth/ForgotPassword/NewPassword';
//pages
import LoginScreen from '../view/pages/Auth/Login/LoginScreen';
import RegisterScreen from '../view/pages/Auth/Register/RegisterScreen';
import ProfileScreen from "../view/pages/Brands/Profile/ProfileScreen";
import AllProfileScreen from '../view/pages/Influencers/profile/AllProfileScreen';
import EditProfile from '../view/pages/Influencers/Setting/profile/EditProfile';
import EditSocialMedia from '../view/pages/Influencers/Setting/profile/EditSocialMedia';
import EditFollowerRate from '../view/pages/Influencers/Setting/profile/EditFollowerRate';
// Brand's Campaign
import CreateCampaignLayout from '../layout/formLayout';
import CreateCampaign from '../view/pages/Brands/Campaign/CreateScreen';
// error
import Error from '../view/pages/Error';
import EditServices from '../view/pages/Influencers/Setting/profile/EditServices';
//public routes
const publicRoutes = [{
    path: '/register',
    component: RegisterScreen,
    layout:RegisterLayout
}, {
    path: '/login',
    component: LoginScreen,
    layout:RegisterLayout

},
{
    path: '/home',
    component: Home,
}
, {
    path: 'brand/profile',
    component: ProfileScreen,
    layout:CreateCampaignLayout,
},
{
    path: 'influencer/profile',
    component: AllProfileScreen
},
{
    path: 'influencer/setting/edit-profile',
    component: EditProfile,
    layout:EditProfileLayout
},
{
    path: '/forgot-password',
    component: ForgotPassword,
    layout:RegisterLayout
},{
    path: '/verification',
    component: Confirmation,
    layout:RegisterLayout
}
,{
    path: '/new-password',
    component: NewPassword,
    layout:RegisterLayout
},{
    path: '/error',
    component: Error,
    // layout:RegisterLayout
},
{
    path: '/influencer/setting/edit-profile/social-media',
    component:EditSocialMedia,
    layout:EditProfileLayout
},
{
    path:'/influencer/setting/edit-profile/followr-rate',
    component:EditFollowerRate,
    layout:EditProfileLayout
},{
    path:'/influencer/setting/edit-profile/services',
    component:EditServices,
    layout:EditProfileLayout
},{
    path:'/brand/campaign/create',
    component:CreateCampaign,
    layout:CreateCampaignLayout,
}
]

const privateRoutes = [{

}]

export {publicRoutes, privateRoutes}