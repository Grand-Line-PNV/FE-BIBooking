import "./App.css";
import { Provider } from "react-redux";
import store from "./redux";
import LoginScreen from "./";

function App() {
  return (
    <Provider store={store}>
      <LoginScreen/>
    </Provider>
  );
}

export default App;
