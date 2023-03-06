//HomePage
import Home from '../view/pages/Home/Home';
//layouts
import {RegisterLayout} from '../layout';
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
import CreateCampaignLayout from '../layout/CreateCampaign';
import CreateInformation from '../view/pages/Brands/Campaign/Infomation';
import CreateDescription from '../view/pages/Brands/Campaign/Description';
import CreateResponsibility from '../view/pages/Brands/Campaign/Responsibility';
import CreatePrice from '../view/pages/Brands/Campaign/Price';
// error
import Error from '../view/pages/Error';
import EditServices from '../view/pages/Influencers/Setting/profile/EditServices';
// Task
import TaskLayout from '../layout/TaskLayout';
import Applying from '../view/pages/Influencers/task/Applying';
import Doing from '../view/pages/Influencers/task/Doing';
import Waiting from '../view/pages/Influencers/task/Waiting';
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
    component: ProfileScreen
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
},
{
    path: '/brand/campaign/information',
    component:CreateInformation,
    layout:CreateCampaignLayout
},
{
    path:'/brand/campaign/description',
    component:CreateDescription,
    layout:CreateCampaignLayout
},{
    path:'/brand/campaign/responsibility',
    component:CreateResponsibility,
    layout:CreateCampaignLayout

},{
    path:'/brand/campaign/price',
    component:CreatePrice,
    layout:CreateCampaignLayout
},
// {
//     path:'/notify',
//     component:Notify
// }
,{
    path:'/influencer/task/applying',
    component:Applying,
    layout:TaskLayout

},{
    path:'/influencer/task/doing',
    component:Doing,
    layout:TaskLayout

},{
    path:'/influencer/task/waiting',
    component:Waiting,
    layout:TaskLayout

},
]

const privateRoutes = [{

}]

export {publicRoutes, privateRoutes}