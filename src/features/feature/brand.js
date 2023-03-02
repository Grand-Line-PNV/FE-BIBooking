import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

const brand = createEntityAdapter();

//Slice (nhóm các state theo chức năng)
const brandSlice = createSlice({
  name: 'brand',
  initialState: brand.getInitialState(),
  reducers: {
    addAll: brand.addMany,
    removeAll: brand.removeAll,
    addOne: brand.addOne,
    updateOne: brand.updateOne,
    removeOne: brand.removeOne,
  },
});

export const registerSelectors = brand.getSelectors(state => state.brand);
// Action là 1 hàm trả về object dạng {type, payload}
export const {reducer, actions: brandAction} = brandSlice;
export default reducer;
