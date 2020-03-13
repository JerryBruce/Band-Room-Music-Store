import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "react-redux";
import { Provider } from "react-redux";
import handleMenu from "./redux/reducers";

import App from "./components/App";

const store = createStore(handleMenu);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
