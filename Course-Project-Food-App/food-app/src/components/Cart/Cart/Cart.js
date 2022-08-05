import { useContext, useState } from "react";
import CartContext from "../../../store/cart-context";

import Modal from "../../UI-General/Modal/Modal";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setisSubmitting] = useState(false);
  const [orderMessage, setOrderMessage] = useState(null);

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

  const submitOrderHandler = async (userData) => {
    console.log("userData: ", userData);
    setOrderMessage(
      <h3 className={classes["successfull-message"]}>Loading...</h3>
    );
    const response = await fetch(
      "https://foodapp-13bc4-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
      }
    );

    if (!response.ok) {
      setOrderMessage(
        <div>
          <h3 className={classes["error-message"]}>Something went wrong...</h3>
          <div className={classes.actions}>
            <button type="button" onClick={props.onCloseCart}>
              Close
            </button>
          </div>
        </div>
      );
      return;
    }

    setOrderMessage(
      <div>
        <h3 className={classes["successfull-message"]}>
          Your order is successfull...
        </h3>
        <div className={classes.actions}>
          <button type="button" onClick={props.onCloseCart}>
            Close
          </button>
        </div>
      </div>
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
          orderMessage={orderMessage}
          isSubmitting={isSubmitting}
        />
      )}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
