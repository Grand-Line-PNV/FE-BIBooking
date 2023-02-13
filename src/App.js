import "./App.css";
import { Provider } from "react-redux";
import store from "./redux";
import AllProfileScreen from "./view/pages/Influencers/profile/AllProfileScreen";


function App() {
  return <Provider store={store}>
  <AllProfileScreen/>
  </Provider>;
}

export default App;
