import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";
import createStore from "./createStore";

const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
    <App store={store} history={history} />,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
