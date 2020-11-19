import React from "react";
import styled from "styled-components";
import bannerImg from "../assets/banner-watch.jpg";

// This will be the header. WE will have the title and a picture as a banner

const Header = () => {
  return (
    <Wrapper>
      <Title>STORE NAME</Title>
      <Banner alt="store-banner" src={bannerImg} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
`;

const Banner = styled.img`
  width: 100vw;
  height: 300px;
`;

const Title = styled.h1`
  text-align: center;
`;

export default Header;
