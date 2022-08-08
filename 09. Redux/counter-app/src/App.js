import { Fragment } from "react";
import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <Fragment>
      <Header />
      <Auth />
      <Counter />
    </Fragment>
  );
}

export default App;
