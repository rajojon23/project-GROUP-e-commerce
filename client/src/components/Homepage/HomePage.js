import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ItemGrid from "./ItemGrid";
import Footer from "./Footer";
// This is the structure that could work for the homepage

const HomePage = () => {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <ItemGridWrapper>
        <ItemGrid />
      </ItemGridWrapper>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header header header header header header "
    "sidebar  main main main main main"
    "footer footer footer footer footer footer";
  grid-template-columns: 300px auto;
  height: 100vh;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 20px;
`;

export default HomePage;
