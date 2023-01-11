import { createSlice } from "@reduxjs/toolkit";

const initData = {
  imgs: [],
};

const photoSlice = createSlice({
  name: "photo",
  initialState: initData,
  reducers: {
    uploadPhoto(state, action) {
      state.imgs = [action.payload, ...state.imgs];
    },
  },
});

export const { uploadPhoto } = photoSlice.actions;
export default photoSlice.reducer;
