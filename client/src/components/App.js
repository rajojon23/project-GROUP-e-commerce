import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./Homepage/HomePage";

import Cart from "./Cart/Cart";

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch('/bacon')
      .then(res => res.json())
      .then(data => setBacon(data));
  }, []);

  return <div>

    <Cart />

  </div>;
}



export default App;
