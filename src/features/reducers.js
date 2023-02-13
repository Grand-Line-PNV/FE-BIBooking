import { combineReducers } from "@reduxjs/toolkit";
import author from "./feature/author";
import roleUserSlice from "./feature/roleUserSlide";

//Redux state is typically organized into "slices", defined by the reducers that are passed to combineReducers
export const allReducers = combineReducers({
  author: author,
  roleUser: roleUserSlice.reducer,
});
