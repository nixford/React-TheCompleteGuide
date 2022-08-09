import { Route } from "react-router-dom";

import Welkome from "./components/Welkome";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Route path="/welkome">
        <Welkome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
