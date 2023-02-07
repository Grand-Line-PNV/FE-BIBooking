import "./App.css";
import { Provider } from "react-redux";
import store from "./redux";
import classNames from "classnames/bind";
import ProfileScreen from "./view/pages/Influencers/ProfileScreen";

const cx = classNames.bind();

function App() {
  return <Provider store={store}>
  <ProfileScreen/>
  </Provider>;
}

export default App;
