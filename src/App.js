import "./App.css";
import { Provider } from "react-redux";
import store from "./redux";
import LoginScreen from "./view/pages/Auth/Login/LoginScreen";
import RegisterScreen from "./view/pages/Auth/Register/RegisterScreen";
import ForgotPassword from "./view/pages/Auth/ForgotPassword/ForgotPassword";
function App() {
  return (
    <Provider store={store}>
    <LoginScreen/>
    <RegisterScreen/>
      <ForgotPassword/>
    </Provider>
  );
}

export default App;
