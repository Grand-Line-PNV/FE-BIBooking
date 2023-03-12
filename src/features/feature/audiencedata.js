import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

const audienceData = createEntityAdapter();

//Slice (nhóm các state theo chức năng)
const audienceDataSlice = createSlice({
  name: 'audienceData',
  initialState: audienceData.getInitialState(),
  reducers: {
    addAll: audienceData.addMany,
    removeAll: audienceData.removeAll,
    addOne: audienceData.addOne,
    updateOne: audienceData.updateOne,
    removeOne: audienceData.removeOne,
  },
});

export const registerSelectors = audienceData.getSelectors(state => state.audienceData);
// Action là 1 hàm trả về object dạng {type, payload}
export const {reducer, actions: audienceDataAction} = audienceDataSlice;
export default reducer;
