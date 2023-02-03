import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
	reducer: {
	},
});

export type RootStateType = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
export default Store;