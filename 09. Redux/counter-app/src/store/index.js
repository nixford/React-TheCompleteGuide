import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const countReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    // RULE - never directly mutate existing state - like "state.counter++", but always return new object:
    return {
      counter: state.counter + 1,
      // despite no changes to "showCounter" here, we need to set it also,
      // because if not set up, the "Redux" will not be able to return it
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      // despite no changes to "showCounter" here, we need to set it also,
      // because if not set up, the "Redux" will not be able to return it
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.value,
      // despite no changes to "showCounter" here, we need to set it also,
      // because if not set up, the "Redux" will not be able to return it
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      // The same like "showCounter" - the "counter" is not changed here but it is necessary to be added
      counter: state.counter,
    };
  }
  return state;
};

const store = createStore(countReducer);

export default store;
