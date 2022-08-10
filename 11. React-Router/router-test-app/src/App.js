import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import Welkome from "./views/Welkome";
import Products from "./views/Products";
import ProductDetails from "./views/ProductDetail";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div>
      <Header />
      <main>
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
          {/*dynamic raute - /:... for transfaring the data after the colom */}
          <Route path="/products/:productName">
            <ProductDetails />
          </Route>
          {/*Example for not-found page*/}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
