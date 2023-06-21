import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

export const homeSlice = createSlice({
  name: 'homeslice',
  initialState,
  reducers: {
    getAllPosts: (state,{payload}) => {
      state.name = payload;
    },
  },
});

export const {getAllPosts} = homeSlice.actions
export default homeSlice.reducer
