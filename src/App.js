import "./App.css";
import { Provider } from "react-redux";
import store from "./redux";
import RegisterScreen from "./view/pages/Auth/Register/RegisterScreen";

function App() {
  return (
    <Provider store={store}>
    <RegisterScreen/>
    </Provider>
  );
}

export default App;
