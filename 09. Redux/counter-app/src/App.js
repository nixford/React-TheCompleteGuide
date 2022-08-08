import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import Counter from "./components/Counter/Counter";
import UserProFile from "./components/UseProfile/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProFile />}
      <Counter />
    </Fragment>
  );
}

export default App;
