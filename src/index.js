import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./global.css";

//URIBISTA EL QUE LO LEA

ReactDOM.render(<AppRouter />, document.getElementById("root"));

serviceWorker.unregister();
