import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Setting up the redux store - similar to React Context API provider

import "./index.css";
import App from "./App";
//import store from "./store/index"; // Setting up the redux store - the store needs to be imported
import store from "../src/store/index-reduxjs-toolkit-example";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Setting up the redux store with the "store" property
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
