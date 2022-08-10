import React, { useState } from "react";

import { useParams, useHistory, Prompt } from "react-router-dom";

const ProductDetails = () => {
  const [isFocused, setFocus] = useState(false);
  const history = useHistory();
  const params = useParams();

  // Example for programmatic navigation
  const doneHandler = async () => {
    await setFocus(false);
    history.push("/welkome");
  };

  const focusHandler = () => {
    setFocus(true);
  };

  return (
    <section>
      <Prompt
        when={isFocused}
        message={(location) =>
          "Are you sure - entered data will not be removed!"
        }
      />
      <h1>Product Details About: {params.productName}</h1>
      <br />
      <form onFocus={focusHandler}>
        <div>
          <label>Author</label>
          <input type="text" id="author" />
        </div>
        <br />
        <button onClick={doneHandler}>Enter-programatic-navigation</button>
      </form>
    </section>
  );
};

export default ProductDetails;
