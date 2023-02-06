import "./App.css";
import { Provider } from "react-redux";
import store from "./redux";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "./components/Button/Button";
import PersonalInformation from "../src/view/pages/Influencers/PersonalInformation/index";
import Auth from "./view/pages/";

const cx = classNames.bind();

function App() {
  return (
    <Provider store={store}>
      <Auth />
    </Provider>
  );
}

export default App;
