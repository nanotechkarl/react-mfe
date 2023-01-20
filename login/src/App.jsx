import React from "react";
import ReactDOM from "react-dom";

import LoginForm from "./components/form/LoginForm";
import { StoreProvider } from "store/store";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <StoreProvider>
    <div className="container">library</div>
    <div>
      <LoginForm />
    </div>
  </StoreProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
