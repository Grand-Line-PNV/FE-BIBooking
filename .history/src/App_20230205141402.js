import "./App.css";
import { Provider } from "react-redux";
import store from "./redux";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "./components/Button/Button";
import PersonalInformation from 

const cx = classNames.bind();

function App() {
  return (
    <Provider store={store}>
      <PersonalInformation />
    </Provider>
  );
}

export default App;
