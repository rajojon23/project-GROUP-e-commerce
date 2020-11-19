import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./HomePage";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <HomePage />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;

const Wrapper = styled.div``;
