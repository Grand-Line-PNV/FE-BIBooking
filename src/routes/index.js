//layouts
import { HeaderOnly,RegisterLayout} from '../layout';
import Confirmation from '../view/pages/Auth/ForgotPassword/EmailConfirmation';
import ForgotPassword from '../view/pages/Auth/ForgotPassword/ForgotPassword';
import NewPassword from '../view/pages/Auth/ForgotPassword/NewPassword';
//pages
import LoginScreen from '../view/pages/Auth/Login/LoginScreen';
import RegisterScreen from '../view/pages/Auth/Register/RegisterScreen';
import ProfileScreen from "../view/pages/Brands/Profile/ProfileScreen";
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

}, {
    path: 'brand/profile',
    component: ProfileScreen
},{
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