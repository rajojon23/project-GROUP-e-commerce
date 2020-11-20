import Cart from "./Cart/Cart";


import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./Homepage/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <HomePage />
      </Wrapper>
    </BrowserRouter>
  );
}

const Wrapper = styled.div``;
export default App;
