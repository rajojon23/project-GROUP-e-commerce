import React from "react";
import styled from "styled-components";
const Sidebar = () => {
  return (
    <Wrapper>
      <Category>
        Category:
        <label>
          <input type="checkbox" />
          Entertainment
        </label>
        <label>
          <input type="checkbox" />
          Fitness
        </label>
        <label>
          <input type="checkbox" />
          Lifestyle
        </label>
        <label>
          <input type="checkbox" />
          Medical
        </label>
      </Category>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 300px;
  grid-area: sidebar;
  padding: 16px 30px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Sidebar;
