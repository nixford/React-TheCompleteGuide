import { useDispatch } from "react-redux/es/exports";
import { cartActions } from "../../../store/cart-slice";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, price, quantity, totalPrice, title } = props.item;
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addHandler = () => {
    dispatch(cartActions.addItemToCart({ id, price, totalPrice, title }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
