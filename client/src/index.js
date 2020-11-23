import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import App from "./components/App";
import { ItemsProvider } from "./components/Homepage/ItemsContext";

ReactDOM.render(
  <React.StrictMode>
    <ItemsProvider>
      <App />
    </ItemsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
