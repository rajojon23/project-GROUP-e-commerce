import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bannerImg from "../../assets/banner-watch.jpg";
import { Icon } from "react-icons-kit";
import { ic_shopping_cart } from "react-icons-kit/md/ic_shopping_cart";
import { NavLink } from "react-router-dom";
import { ic_attach_money } from "react-icons-kit/md/ic_attach_money";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../../reducers";

// This will be the header. We could have the title and a picture as a banner

const Header = () => {
  const [numInCart, setNumInCart] = useState("");

  const storeItems = useSelector(getStoreItemArray);

  useEffect(() => {
    if (storeItems.length !== 0) {
      setNumInCart(storeItems.length);
    }
  }, [storeItems]);

  return (
    <Wrapper>
      <Top>
        <Title>
          <div style={{ color: "red" }}>
            <Icon icon={ic_attach_money} size={40} />
          </div>
          Gucci Mane
          <div>
            <Icon icon={ic_attach_money} size={40} />
          </div>
        </Title>
        <div>
          <NavLink to="/cart">
            <div>{numInCart}</div>
            <Icon icon={ic_shopping_cart} size={40} className="icon" />
          </NavLink>
        </div>
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
    top: 25%;
    right: 20px;
    cursor: pointer;
    color: #000;
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
  height: 400px;
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  display: flex;
  color: red;
`;

export default Header;
