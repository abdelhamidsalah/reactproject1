import React from "react";
import ReactDOM  from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Provider} from 'react-redux'
import store from "./Redux/Store";


ReactDOM.render(
 <div className="App">
<Provider store={store}>
<App/>
</Provider>
 
 </div>,
 
 
  document.getElementById("root")
)