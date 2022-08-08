// Better to use "createSlice" (more powerfull) than "createReducer"
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // Althow it is allowed (there is another package - "Immer" which takes care the state not to be mutated directly) it is better not to mutate
      // for example perpouses:
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

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

// Example for implementing one createSlices
// const store = configureStore({
//   reducer: counterSlice.reducer,
// });

// Example for implementing many createSlices (instead "reducer: counterSlice.reducer")
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    // producte: usersSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
