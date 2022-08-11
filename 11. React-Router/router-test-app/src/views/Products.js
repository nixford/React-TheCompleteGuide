import React from "react";

import { Link, useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search).get("sort");

  return (
    <section>
      <h1>Products sorted by {queryParams} order:</h1>
      <section>
        <div>
          {/*"Book" is the dynamic param*/}
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
    </section>
  );
};

export default Products;
