import "./App.css";
import { Provider } from "react-redux";
import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <LoginScreen/>
    </Provider>
  );
}

export default App;
