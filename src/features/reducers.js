import { combineReducers } from "@reduxjs/toolkit";
import author from "./feature/author";
import { registerAction } from "./feature/register";
import roleUserSlice from "./feature/roleUserSlide";
import influencer from './feature/influencer';
import social from './feature/social';

//Redux state is typically organized into "slices", defined by the reducers that are passed to combineReducers
export const allReducers = combineReducers({
  author: author,
  roleUser: roleUserSlice.reducer,
  register:registerAction,
  influencer:influencer,
  social:social,

});
