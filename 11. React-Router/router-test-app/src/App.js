import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import Welkome from "./views/Welkome";
import Products from "./views/Products";
import ProductDetails from "./views/ProductDetail";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/">
            <Redirect to="/welkome" />
          </Route>
          <Route path="/welkome">
            <Welkome />
          </Route>
          {/*exact keyword prevents the route to match all other routes starting with "/products" */}
          <Route path="/products" exact>
            <Products />
          </Route>
          {/*dynamic raute - /:... for transfaring the data after the colom */}
          <Route path="/products/:productName">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
