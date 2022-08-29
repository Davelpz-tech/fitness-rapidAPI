import React from "react";
import reactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
