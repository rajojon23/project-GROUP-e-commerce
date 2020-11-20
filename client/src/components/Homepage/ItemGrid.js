import React from "react";
import styled from "styled-components";
import StoreItem from "./StoreItem";
const ItemGrid = () => {
  return (
    <Wrapper>
      Grid with all the items
      <StoreItem />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 20px;
  border: 5px solid red;
`;
export default ItemGrid;
