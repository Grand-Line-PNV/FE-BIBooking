import "./App.css";
import { Provider } from "react-redux";
import store from "./redux";
import classNames from "classnames/bind";
import LoginScreen from "./view/pages/Auth/Login/LoginScreen";


const cx = classNames.bind();

function App() {
  return (
    <Provider store={store}>
      <LoginScreen></LoginScreen>
    </Provider>
  );
}

export default App;
