import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggle(state) {
      return {
        cartIsVisible: !state.cartIsVisible,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
