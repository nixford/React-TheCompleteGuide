// Receiving value from redux store
import { useSelector, useDispatch } from "react-redux";

//Example for importing counter actions - redux-toolkit
import { counterActions } from "../../store/index-reduxjs-toolkit-example";

import classes from "./Counter.module.css";

const Counter = () => {
  // Receiving value from redux store - the value is reactive
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  // OPTION 1 - UPDATING WITH ACTION WITHOUT CARRYING VALUE
  // Updating value in redux store with simple action, without carrying value
  // dispatch is a function
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch is receiving object with key "type" and value, which is equal as the value in the store
    // dispatch({ type: "increment" });

    // Example for dispatching actions with redux-toolkit
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    // dispatch is receiving object with key "type" and value, which is equal as the value in the store
    // dispatch({ type: "decrement" });

    // Example for dispatching actions with redux-toolkit
    dispatch(counterActions.decrement());
  };

  // OPTION 2 - UPDATING WITH ACTION WITH INPUT VALUE
  const increaseHandler = () => {
    // dispatch({ type: "increase", value: 5 });

    dispatch(counterActions.increase(5)); // extract in store: { type: 'UNIQUE_VALUE', payload: 5 }
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });

    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increment by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
