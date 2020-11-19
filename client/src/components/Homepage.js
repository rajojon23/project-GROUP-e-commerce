import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ItemsGrid from "./ItemsGrid";

const HomePage = () => {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <ItemsGrid />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default HomePage;
