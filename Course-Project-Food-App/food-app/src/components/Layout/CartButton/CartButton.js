import { useContext } from "react";

import CartIcon from "../../Cart/CartIcon/CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../../store/cart-context";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext); // The useContext expects CartContext, but not CartProvider

  const cartItemsCount = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onActivate}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default CartButton;
