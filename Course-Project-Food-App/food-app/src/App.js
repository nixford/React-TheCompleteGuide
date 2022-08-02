import React, { useState } from "react";

import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals/Meals";
import Cart from "./components/Cart/Cart/Cart";

function App() {
  const [cartIsVisible, setCartVisible] = useState(false);

  const showCartHandler = () => {
    setCartVisible(true);
  };

  const hideCartHandler = () => {
    setCartVisible(false);
  };

  return (
    <CartProvider>
      {cartIsVisible && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
