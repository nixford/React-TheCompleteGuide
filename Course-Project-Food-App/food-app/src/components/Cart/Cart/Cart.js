import { useContext, useState } from "react";
import CartContext from "../../../store/cart-context";

import Modal from "../../UI-General/Modal/Modal";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = (userData) => {
    console.log("userData: ", userData);

    fetch(
      "https://foodapp-13bc4-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
      }
    );
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((ci) => (
        <CartItem
          key={ci.id}
          name={ci.name}
          amount={ci.amount}
          price={ci.price}
          onRemove={cartItemRemoveHandler.bind(null, ci.id)}
          onAdd={cartItemAddHandler.bind(null, ci)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onCloseCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout
          onCancel={props.onCloseCart}
          onSubmitOrder={submitOrderHandler}
        />
      )}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
