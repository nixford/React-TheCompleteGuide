import React from "react";

import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products</h1>
      <section>
        <div>
          <Link to="/product/Book">Book</Link>
        </div>
        <div>
          <Link to="/product/Carpet">Carpet</Link>
        </div>
        <div>
          <Link to="/product/Online Course">Online Course</Link>
        </div>
      </section>
    </section>
  );
};

export default Products;
