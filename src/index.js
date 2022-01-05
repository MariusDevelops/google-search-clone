import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import App from "./App";
import { ResultContextProvider } from "./contexts/ResultContextProvider";

ReactDOM.render(
  <ResultContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ResultContextProvider>,
  document.getElementById("root")
);
