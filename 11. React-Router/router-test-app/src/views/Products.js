import React from "react";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";

const Products = () => {
  const history = useHistory();

  const doneHandler = () => {
    history.push("/welkome");
  };

  return (
    <section>
      <h1>Products</h1>
      <section>
        <div>
          <Link to="/products/Book">Book</Link>
        </div>
        <div>
          <Link to="/products/Carpet">Carpet</Link>
        </div>
        <div>
          <Link to="/products/Online Course">Online Course</Link>
        </div>
      </section>
      <br />
      <button onClick={doneHandler}>Done-programatic-navigation</button>
    </section>
  );
};

export default Products;
