import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StoreItem from "./StoreItem";

import Pagination from "react-js-pagination";

import { useDispatch } from "react-redux";
import { addItem } from "../../actions";

const ItemGrid = () => {
  const [items, setItems] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [activePage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("/allitems")
      .then((res) => res.json())
      .then((data) => setItems([...data.data]))
      .catch((err) => console.log(err));

    fetch("/companies")
      .then((res) => res.json())
      .then((data) => {
        setSellers([...data.data]);
        // console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const todosPerPage = 15;

  const indexOfLastTodo = activePage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = items.slice(indexOfFirstTodo, indexOfLastTodo);

  // console.log(currentTodos);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber);
  };
  console.log({ items });

  return (
    <Wrapper>
      {items &&
        sellers &&
        currentTodos.map((item) => {
          const company = sellers.find(
            (seller) => seller._id === item.companyId
          );
          return (
            <StoreItem key={item.id} item={{ ...item }} company={company} />
          );
        })}
      <div>
        <div className="pagination">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={15}
            totalItemsCount={items.length}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 20px;
`;
export default ItemGrid;
