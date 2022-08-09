import { Route } from "react-router-dom";

import Header from "./components/Header";
import Welkome from "./views/Welkome";
import Products from "./views/Products";

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
      </main>
    </div>
  );
}

export default App;
