import "./App.css";
import { Provider } from "react-redux";
import store from "./redux";
import PersonalInformation from "./view/pages/Influencers/PersonalInformation/index";
import LoginScreen from "../src/view/pages/Auth/Login/LoginScreen";

function App() {
  return (
    <Provider store={store}>
      <PersonalInformation />
      {/* <RegisterScreen /> */}
    </Provider>
  );
}

export default App;
