import { Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        {/*Swich is not supported in v6 and now we can use "Routes"*/}
        <Routes>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/products" exact element={<Products />}></Route>
          <Route
            path="/products/:productId"
            element={<ProductDetail />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
