import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";

import ItemGrid from "./ItemGrid";
import Footer from "./Footer";
// This is the structure that could work for the homepage

const HomePage = () => {
  const [filter, setFilter] = useState([
    "Entertainment",
    "Fitness",
    "Medical",
    "Lifestyle",
  ]);
  const [entCheched, setEntChecked] = useState(true);
  const [fitCheched, setFitChecked] = useState(true);
  const [medCheched, setMedChecked] = useState(true);
  const [lifeCheched, setLifeChecked] = useState(true);

  const handleFilter = (e, catTarget, setCatTarget) => {
    const cat = e.target.value;

    if (catTarget === false) {
      if (!filter.includes(cat)) {
        setFilter([...filter, cat]);
      } else if (filter.includes(cat)) {
        setFilter([...filter]);
      }
    } else if (catTarget === true) {
      const newF = filter.filter((i) => i !== cat);
      setFilter([...newF]);
    }
    setCatTarget(!catTarget);
  };
  return (
    <Wrapper>
      <Header />
      <Category>
        Category:
        <label>
          <input
            type="checkbox"
            name="category"
            value="Entertainment"
            onChange={(e) => handleFilter(e, entCheched, setEntChecked)}
            checked={entCheched}
          />
          Entertainment
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="Fitness"
            onChange={(e) => handleFilter(e, fitCheched, setFitChecked)}
            checked={fitCheched}
          />
          Fitness
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="Lifestyle"
            onChange={(e) => handleFilter(e, lifeCheched, setLifeChecked)}
            checked={lifeCheched}
          />
          Lifestyle
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="Medical"
            onChange={(e) => handleFilter(e, medCheched, setMedChecked)}
            checked={medCheched}
          />
          Medical
        </label>
      </Category>
      <ItemGridWrapper>
        <ItemGrid filter={filter} />
      </ItemGridWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
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

const FooterWrapper = styled.footer`
  grid-area: footer;
  padding: 16px 20px;
`;
const Category = styled.div`
  display: flex;
  flex-direction: column;
`;
export default HomePage;
