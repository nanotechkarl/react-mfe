import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; //! Bootstrap must also be working in the HOST container

import Navbar from "./components/Navbar";
import { StoreProvider } from "store/store";
const StorePage = React.lazy(() => import("store/StorePage")); // for Page MF rendering use lazy

const App = () => (
  <StoreProvider>
    <BrowserRouter>
      <React.Suspense fallback="Loading">
        <Routes>
          <Route element={<Navbar />}>
            <Route index element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="store" element={<StorePage />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </StoreProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
