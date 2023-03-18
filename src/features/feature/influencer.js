import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

const influencer = createEntityAdapter();

//Slice (nhóm các state theo chức năng)
const influencerSlice = createSlice({
  name: 'influencer',
  initialState: influencer.getInitialState(),
  reducers: {
    addAll: influencer.addMany,
    removeAll: influencer.removeAll,
    addOne: influencer.addOne,
    updateOne: influencer.updateOne,
    removeOne: influencer.removeOne,
  },
});

export const registerSelectors = influencer.getSelectors(state => state.influencer);
// Action là 1 hàm trả về object dạng {type, payload}
export const {reducer, actions: influencerAction} = influencerSlice;
export default reducer;
