import React, { Suspense } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

// This static routing - all JS code will be loaded each time the user navigate
// THE INITIAL BUNDLE IS BIGGER
import Header from "./components/Header/Header";
// import Welkome from "./views/Welkome";
// import Products from "./views/Products";
// import ProductDetails from "./views/ProductDetail";
// import NotFound from "./views/NotFound";

// Example for lazy loading in React (it will load the component after navigation only when it is needed)
// THE INITIAL BUNDLE IS SMALLER
const Welkome = React.lazy(() => import("./views/Welkome"));
const Products = React.lazy(() => import("./views/Products"));
const ProductDetails = React.lazy(() => import("./views/ProductDetail"));
const NotFound = React.lazy(() => import("./views/NotFound"));

function App() {
  return (
    <div>
      <Header />
      <main>
        {/*"Suspense" is needed for lazy loading*/}
        <Suspense fallback={<p>Loading...</p>}>
          {/*take cares to match only one route*/}
          <Switch>
            <Route path="/" exact>
              <Redirect to="/welkome" />
            </Route>
            <Route path="/welkome">
              <Welkome />
            </Route>
            {/*exact keyword prevents the route to match all other routes starting with "/products" */}
            <Route path="/products" exact>
              <Products />
            </Route>
            {/*dynamic raute - /:... for transfaring the data with params - after the colom */}
            <Route path="/products/:productName">
              <ProductDetails />
            </Route>
            {/*Example for not-found page*/}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
