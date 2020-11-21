import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StoreItem from "./StoreItem";

const ItemGrid = () => {
  const [items, setItems] = useState([]);
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    fetch("/allitems")
      .then((res) => res.json())
      .then((data) => setItems([...data.data]))
      .catch((err) => console.log(err));

    fetch("/companies")
      .then((res) => res.json())
      .then((data) => {
        setSellers([...data.data]);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      {items &&
        sellers &&
        items.map((item) => {
          return <StoreItem key={item.id} item={{ ...item }} />;
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
