import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      return {
        isAuthenticated: true,
      };
    },
    logout(state) {
      return {
        isAuthenticated: false,
      };
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
