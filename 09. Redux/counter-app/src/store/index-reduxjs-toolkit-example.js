// Better to use "createSlice" (more powerfull) than "createReducer"
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      // Althow it is allowed (there is another package - "Immer" which takes care the state not to be mutated directly)
      // but we still must not mutate the state
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// Exaample for implementing many createSlices (instead "reducer: counterSlice.reducer")
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    // orders: ordersSlice.reducer,
    // users: usersSlice.reducer,
  },
});

export default store;
