import React, { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    isNameValid: true,
    isStreetValid: true,
    isPostalValid: true,
    isCityValid: true,
  });
  const nameRef = useRef({});
  const streetRef = useRef({});
  const postalRef = useRef({});
  const cityRef = useRef({});

  const confirmHandler = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const street = streetRef.current.value;
    const postal = postalRef.current.value;
    const city = cityRef.current.value;

    const isFormValid = name && street && postal && city;

    if (isFormValid) {
      props.onSubmitOrder({ name, street, postal, city });
      return;
    }

    setFormInputsValidity({
      isNameValid: name.trim() !== "",
      isStreetValid: street.trim() !== "",
      isPostalValid: postal.trim() !== "",
      isCityValid: city.trim() !== "",
    });
  };

  const formElement = (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameRef} type="text" id="name" />
        {!formInputsValidity.isNameValid && (
          <p className={classes["error-message"]}>Plase enter your name...</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input ref={streetRef} type="text" id="street" />
        {!formInputsValidity.isStreetValid && (
          <p className={classes["error-message"]}>Plase enter street info...</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalRef} type="text" id="postal" />
        {!formInputsValidity.isPostalValid && (
          <p className={classes["error-message"]}>Plase enter postal code...</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input ref={cityRef} type="text" id="city" />
        {!formInputsValidity.isCityValid && (
          <p className={classes["error-message"]}>Plase enter your city...</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );

  return props.orderMessage ? props.orderMessage : formElement;
};

export default Checkout;
