import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setFilters: (state, action) => {
      state.categoryId = action.payload.categoryId;
    },
  },
});

export const { setCategoryId } = counterSlice.actions;

export default counterSlice.reducer;
