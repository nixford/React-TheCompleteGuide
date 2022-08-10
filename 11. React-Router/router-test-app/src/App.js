import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Welkome from "./views/Welkome";
import Products from "./views/Products";
import ProductDetails from "./views/ProductDetail";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Route path="/welkome">
          <Welkome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        {/*dynamic raute - /:... for transfaring the data after the colom */}
        <Route path="/product-detail/:productName">
          <ProductDetails />
        </Route>
      </main>
    </div>
  );
}

export default App;
