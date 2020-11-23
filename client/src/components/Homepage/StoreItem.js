import React from "react";
import styled from "styled-components";
import { addItem } from "../../actions";
import { useDispatch } from "react-redux";

const StoreItem = ({ item, company }) => {
  const {
    id,
    name,
    price,
    bodyLocation,
    category,
    image,
    numInStock,
    companyId,
  } = item;

  const { id: companyIdNum, name: companyName, url, country } = company;

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ImageWrapper>
        <Image alt="item" src={image} />
      </ImageWrapper>
      <Title>{name}</Title>
      <p>{companyName}</p>
      {numInStock === 0 ? (
        <>
          <p>Out of stock</p>
          <BtnWrapper>
            <Add
              disabled
              onClick={() => dispatch(addItem({ id, name, price, image }))}
            >
              {" "}
              Out of Stock{" "}
            </Add>
          </BtnWrapper>
        </>
      ) : (
        <>
          <p>{numInStock} left in stock</p>
          <BtnWrapper>
            <Add
              onClick={() =>
                dispatch(addItem({ id, name, price, image, numInStock }))
              }
            >
              {" "}
              Add to Cart {price}{" "}
            </Add>
          </BtnWrapper>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 16px;
  background: #fff;
  box-shadow: 3px 2.8px 2.2px rgba(0, 0, 0, 0.07),
    3px 6.7px 5.3px rgba(0, 0, 0, 0.05), 3px 12.5px 10px rgba(0, 0, 0, 0.042),
    3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
    3px 41.8px 33.4px rgba(0, 0, 0, 0.028), 3px 100px 80px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  text-align: center;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 12px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  align-self: center;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 600;
  color: black;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  :hover {
    color: red;
  }
`;

const Add = styled.button`
  position: relative;
  display: block;
  width: 100%;
  border-radius: 12px;
  background: black;
  color: white;
  border: none;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default StoreItem;
