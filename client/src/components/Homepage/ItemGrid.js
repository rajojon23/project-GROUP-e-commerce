import React from "react";
import styled from "styled-components";
import StoreItem from "./StoreItem";
import { ItemsContext } from "./ItemsContext";

const ItemGrid = () => {
  const { loadingItems, loadingCompanies, items, companies } = React.useContext(
    ItemsContext
  );

  return (
    <Wrapper>
      {loadingItems === "loading" && loadingCompanies === "loading" && (
        <p>...loading</p>
      )}
      {loadingItems === "loaded" &&
        loadingCompanies === "loaded" &&
        items.map((item) => {
          const company = companies.find(
            (brand) => brand._id === item.companyId
          );
          return (
            <StoreItem key={item.id} item={{ ...item }} company={company} />
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 20px;
`;
export default ItemGrid;
