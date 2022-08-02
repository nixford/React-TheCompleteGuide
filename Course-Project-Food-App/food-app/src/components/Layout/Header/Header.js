import React from "react";

import CartButton from "../CartButton/CartButton";
import mealsImg from '../../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="Food table" />
      </div>
    </React.Fragment>
  )
}

export default Header;