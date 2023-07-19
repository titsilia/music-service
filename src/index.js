import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import global from "./global.module.css";
import Container from "./container";

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container />
    </BrowserRouter>
  </React.StrictMode>
);
