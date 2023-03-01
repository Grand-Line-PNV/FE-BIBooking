import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Default } from "./layout";
import { Fragment } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./features/store";

// import ProfileScreen from './view/pages/Brands/Profile/ProfileScreen';
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <div className="App">
            <Routes>
              {publicRoutes.map((route, index) => {
                let Layout = Default;

                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }

                const Page = route.component;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
            </Routes>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
