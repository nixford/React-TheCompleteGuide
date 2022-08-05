// importing Redux
const redux = require("redux");

// Standart JS function that receives 2 parameters - the Old State + Dipathced action
// Returns a new state object (pure functions with the same inputs produces always the same outputs)
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    // returns the new state
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "substract") {
    // returns the new state
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// creates store
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  // getState() is method available on the store and it provides the latest state after update
  const latestState = store.getState();
  console.log(latestState);
};

// subscribe() method make Redux aware of the counterSubscriber() function
// and tells the counterSubscriber() function should be executed whenever our state changes
store.subscribe(counterSubscriber);

// Action - it is needed to activate reducer
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "substract" });
