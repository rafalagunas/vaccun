import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Components/Home";
import "antd/dist/antd.css";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
