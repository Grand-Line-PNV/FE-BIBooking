import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persist from "./persist";
import { allReducers } from "./reducers";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      ignoredActionPaths: [],
    },
  }),
];

// eslint-disable-next-line no-undef
// if (__DEV__) {
//   middleware.push(logger);
// }

const persistWraperReducer = persistReducer(persist, allReducers);
// khởi tạo một store bằng hàm  configureStore
//sẽ mặc định thiết lập cho phép sử dụng redux devtool để debug
//và theo dõi quá trình cập nhật state cũng như thiết lập sẵn một số middleware.
export const store = configureStore({
  reducer: persistWraperReducer,
  middleware,
});

export const persistor = persistStore(store);
