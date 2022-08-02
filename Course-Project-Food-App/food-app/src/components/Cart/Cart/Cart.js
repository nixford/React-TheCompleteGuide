import Modal from "../../UI-General/Modal/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
        { id: "c2", name: "Pizza", amount: 1, price: 10.99 },
        { id: "c3", name: "Chicken", amount: 1, price: 9.99 },
      ].map((ci) => (
        <li>{ci.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
