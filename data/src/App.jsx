import React from "react";
import ReactDOM from "react-dom";
import FetchData from "./components/FetchData";
import { StoreProvider } from "store/store";

import "./index.css";

const App = () => (
  <StoreProvider>
    <div className="container">library</div>
    <FetchData/>
  </StoreProvider>
 
);
ReactDOM.render(<App />, document.getElementById("app"));
