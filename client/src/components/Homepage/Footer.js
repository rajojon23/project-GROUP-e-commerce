import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      FOOTER
      <div>
        <InfoContainer>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Directions</li>
          <li>Blog</li>
        </InfoContainer>
      </div>
      <div>
        <InfoContainer>
          <li>Promotions</li>
          <li>Partners</li>
          <li>Careers</li>
          <li>FAQs</li>
        </InfoContainer>
      </div>
      <div>
        <InfoContainer>
          <li>Shipping</li>
          <li>Returns</li>
          <li>Policy</li>
          <li>Newsletter</li>
        </InfoContainer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: footer;
  display: flex;
  flex-direction: row;
`;

const InfoContainer = styled.div`
  list-style: none;
`;

export default Footer;
