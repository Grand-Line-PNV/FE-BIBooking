import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

const register = createEntityAdapter();

//Slice (nhóm các state theo chức năng)
const registerSlice = createSlice({
  name: 'register',
  initialState: register.getInitialState(),
  reducers: {
    addAll: register.addMany,
    removeAll: register.removeAll,
    addOne: register.addOne,
    updateOne: register.updateOne,
    removeOne: register.removeOne,
  },
});

export const registerSelectors = register.getSelectors(state => state.register);
// Action là 1 hàm trả về object dạng {type, payload}
export const {reducer, actions: registerAction} = registerSlice;
export default reducer;
