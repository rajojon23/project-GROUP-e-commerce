import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StoreItem from "./StoreItem";
import useInfiniteScroll from "./Pagination";

const ItemGrid2 = () => {
  const [items, setItems] = useState(
    Array.from(Array(30).keys(), (n) => n + 1)
  );
  const [sellers, setSellers] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      setItems((prevState) => [
        ...prevState,
        ...Array.from(Array(20).keys(), (n) => n + prevState.length + 1),
      ]);
      setIsFetching(false);
    }, 2000);
  }

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
      <ul>
        {items &&
          sellers &&
          items.map((item) => {
            const company = sellers.find(
              (seller) => seller._id === item.companyId
            );
            return (
              <StoreItem key={item.id} item={{ ...item }} company={company} />
            );
          })}
      </ul>
      {isFetching && "Fetching more list items..."}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 20px;
  border: 5px solid red;
`;
export default ItemGrid2;
