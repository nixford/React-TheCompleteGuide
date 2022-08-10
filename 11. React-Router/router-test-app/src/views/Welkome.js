import React from "react";

import { Route, useHistory } from "react-router-dom";

const Welkome = () => {
  const history = useHistory();
  const goToSortedProductsHandler = () => {
    history.push("/products?sort=ascending");
  };
  return (
    <section>
      <h1>The Welkome Page</h1>
      {/*Example for nested route*/}
      <Route path="/welkome/new-user">
        <p>Welkome, new user!</p>
      </Route>
      <br />
      <button onClick={goToSortedProductsHandler}>
        Sort Products - example for query params
      </button>
    </section>
  );
};

export default Welkome;
