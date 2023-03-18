import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

const social = createEntityAdapter();

//Slice (nhóm các state theo chức năng)
const socialSlice = createSlice({
  name: 'social',
  initialState: social.getInitialState(),
  reducers: {
    addAll: social.addMany,
    removeAll: social.removeAll,
    addOne: social.addOne,
    updateOne: social.updateOne,
    removeOne: social.removeOne,
  },
});

export const registerSelectors = social.getSelectors(state => state.social);
// Action là 1 hàm trả về object dạng {type, payload}
export const {reducer, actions: socialAction} = socialSlice;
export default reducer;
