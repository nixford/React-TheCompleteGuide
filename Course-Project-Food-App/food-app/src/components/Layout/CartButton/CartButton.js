import { useContext, useEffect, useState } from "react";

import CartIcon from "../../Cart/CartIcon/CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../../store/cart-context";

const CartButton = (props) => {
  const [isBtnBump, setBtnBump] = useState(false);
  const cartCtx = useContext(CartContext); // The useContext expects CartContext, but not CartProvider

  const cartItemsCount = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${isBtnBump ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnBump(true);

    const timeIntervalID = setTimeout(() => {
      setBtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timeIntervalID);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onActivate}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default CartButton;
