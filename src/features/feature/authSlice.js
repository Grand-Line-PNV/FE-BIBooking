import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { userLoginApi } from "../../api/feature";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(userLoginApi, { email, password });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//Slice (nhóm các state theo chức năng)
const authSlice  = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.user = null;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
