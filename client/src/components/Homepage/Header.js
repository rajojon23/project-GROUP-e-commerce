import React from "react";
import styled from "styled-components";
import bannerImg from "../../assets/banner-watch.jpg";
import { Icon } from "react-icons-kit";
import { ic_shopping_cart } from "react-icons-kit/md/ic_shopping_cart";
// This will be the header. We could have the title and a picture as a banner

const Header = () => {
  return (
    <Wrapper>
      <Top>
        <Title>STORE NAME</Title>
        <Icon icon={ic_shopping_cart} size={32} className="icon" />
      </Top>

      <Banner alt="store-banner" src={bannerImg} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: header;
  margin: 0;

  .icon {
    position: absolute;
    top: 5px;
    right: 20px;
    cursor: pointer;
  }
`;

const Top = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100vw;
  height: 6em;
  position: relative;
`;

const Banner = styled.img`
  width: 100vw;
  height: 300px;
`;

const Title = styled.h1`
  font-family: fr;
`;

export default Header;
