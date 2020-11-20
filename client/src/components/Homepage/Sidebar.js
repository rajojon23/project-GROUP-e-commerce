import React from "react";
import styled from "styled-components";
const Sidebar = () => {
  return (
    <Wrapper>
      Sidebar with features
      <p>Choose by size</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 300px;
  grid-area: sidebar;
  padding: 16px 30px;
`;

export default Sidebar;
