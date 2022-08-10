import React from "react";

import { Link } from "react-router-dom";

const Products = () => {
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
    </section>
  );
};

export default Products;
