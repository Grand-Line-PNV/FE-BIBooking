import { configureStore } from "@reduxjs/toolkit";

const rootStore = configureStore({
	reducer: {
		posts: PostsReducer,
		auth: AuthReducer,
		wishList: WishListReducer,
	},
});

export type RootStateType = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
export default rootStore