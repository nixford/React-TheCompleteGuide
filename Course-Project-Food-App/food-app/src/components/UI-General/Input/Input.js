import React from "react";
import classes from "./Input.module.css";

// In order Input component to be able to take refs in MealItemForm
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
