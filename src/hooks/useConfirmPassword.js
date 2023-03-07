import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const confirmPassword = createEntityAdapter();

const confirmPasswordSlice = createSlice({
  name: 'confirmPassword',
  initialState: confirmPassword.getInitialState(),
  reducers: {
    addAll: confirmPassword.addMany,
    removeAll: confirmPassword.removeAll,
    addOne: confirmPassword.addOne,
    updateOne: confirmPassword.updateOne,
    removeOne: confirmPassword.removeOne,
  },
});

export const confirmPasswordSelectors = confirmPassword.getSelectors(state => state.confirmPassword);

export const { reducer, actions: confirmPasswordAction } = confirmPasswordSlice;

export default reducer;
