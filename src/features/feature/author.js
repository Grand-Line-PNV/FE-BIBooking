import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

const author = createEntityAdapter();

//Slice (nhóm các state theo chức năng)
const authorSlice = createSlice({
  name: 'author',
  initialState: author.getInitialState(),
  reducers: {
    addAll: author.addMany,
    removeAll: author.removeAll,
    addOne: author.addOne,
    updateOne: author.updateOne,
    removeOne: author.removeOne,
  },
});

export const authorSelectors = author.getSelectors(state => state.author);
// Action là 1 hàm trả về object dạng {type, payload}
export const {reducer, actions: authorAction} = authorSlice;
export default reducer;
