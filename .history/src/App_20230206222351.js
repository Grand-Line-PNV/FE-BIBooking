import "./App.css";
import { Provider } from "react-redux";
import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <LoginSc
    </Provider>
  );
}

export default App;
