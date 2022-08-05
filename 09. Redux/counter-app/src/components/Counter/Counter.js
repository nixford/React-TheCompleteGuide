// Receiving value from redux store
import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  // Receiving value from redux store - the value is reactive
  const counter = useSelector((state) => state.counter);

  // Updating value in redux store
  // dispatch is a function
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch is receiving object with key "type" and value, which is equal as the value in the store
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    // dispatch is receiving object with key "type" and value, which is equal as the value in the store
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
