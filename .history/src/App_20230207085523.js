import "./App.css";
import { Provider } from "react-redux";
import store from "./redux";
import LoginScreen from "./view/pages/Auth/Login/LoginScreen";
import Auth from "./view/pages/Auth";

function App() {
  return (
    <Provider store={store}>
      <LoginScreen/>
    </Provider>
  );
}

export default App;
