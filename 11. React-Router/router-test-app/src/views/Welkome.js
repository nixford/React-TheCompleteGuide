import React from "react";

import { Route } from "react-router-dom";

const Welkome = () => {
  return (
    <section>
      <h1>The Welkome Page</h1>
      {/*Example for nested route*/}
      <Route path="/welkome/new-user">
        <p>Welkome, new user!</p>
      </Route>
    </section>
  );
};

export default Welkome;
