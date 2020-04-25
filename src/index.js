import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/containers/App";
import "tachyons";
import thunkMiddleware from "redux-thunk";
import { searchRobots, requestCountries } from "./reducers";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";

const rootReducer = combineReducers({ searchRobots, requestCountries });

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
