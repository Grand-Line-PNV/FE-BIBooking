import "./App.css";
import { Provider } from "react-redux";
import store from "./redux";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <Provider store={store}>
      <DefaultLayout />
    </Provider>
  );
}

export default App;
