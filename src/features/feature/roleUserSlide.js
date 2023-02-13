import { createSlice } from "@reduxjs/toolkit";

const roleUserSlice = createSlice({
  name: "roleUser",
  initialState: {
    brand: {},
    influencer: {},
    role: 1,
  },
  reducers: {
    setRole: (state, actions) => {
      state.role = actions.payload;
    },
  },
});
export const { setRole } = roleUserSlice.actions;
export const roleSelector = (state) => state.roleUser.role;
export default roleUserSlice;
