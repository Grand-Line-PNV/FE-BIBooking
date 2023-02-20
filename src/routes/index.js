//HomePage
import Home from '../view/pages/Home/Home';
//layouts
import { HeaderOnly,RegisterLayout} from '../layout';
import Confirmation from '../view/pages/Auth/ForgotPassword/EmailConfirmation';
import ForgotPassword from '../view/pages/Auth/ForgotPassword/ForgotPassword';
import NewPassword from '../view/pages/Auth/ForgotPassword/NewPassword';
//pages
import LoginScreen from '../view/pages/Auth/Login/LoginScreen';
import RegisterScreen from '../view/pages/Auth/Register/RegisterScreen';
import ProfileScreen from "../view/pages/Brands/Profile/ProfileScreen";
import AllProfileScreen from '../view/pages/Influencers/profile/AllProfileScreen';
import SettingScreen from '../view/pages/Influencers/Setting/ProfileSettingScreen';
// error
import Error from '../view/pages/Error';
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
    path: 'influencer/Setting',
    component: SettingScreen
},
{
    path: '/forgot-password',
    component: ForgotPassword,
    layout:RegisterLayout
},{
    path: '/email-confirmation',
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
}
]

const privateRoutes = [{

}]

export {publicRoutes, privateRoutes}