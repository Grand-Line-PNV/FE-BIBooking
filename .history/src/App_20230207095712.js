import "./App.css";
import { Provider } from "react-redux";
import store from "./redux";
import LoginScreen from "./view/pages/Auth/Login/LoginScreen";
import Auth from "./view/pages/Auth";
import RegisterScreen from "./view/pages/Auth/Register/RegisterScreen";

function App() {
  return (
    <Provider store={store}>
      {/* <RegisterScreen /> */}
      {/* <LoginScreen /> */}
    </Provider>
  );
}

export default App;
