import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {},
});

export default cartSlice;
