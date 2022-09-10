import React from "react";
import styled from "styled-components";

export const Text = (props) => {
  return (
    <>
      <TextContainer>
        <span>SNEAKERS COMPANY</span>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer
        </p>
      </TextContainer>
      <PriceContainer>
        <div>
          <Price>$125.00</Price>
          <Discount>50%</Discount>
        </div>
        <PrevPrice>$250.00</PrevPrice>
      </PriceContainer>
    </>
  );
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4em 7em;
  span {
    font-size: 2rem;
    color: hsl(26, 100%, 55%);
    font-weight: 700;
    margin-bottom: 1em;
  }
  h1 {
    font-size: 5rem;
    margin-bottom: 0.5em;
  }
  p {
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.5em;
    opacity: 75%;
  }
`;
const PriceContainer = styled.div`
  padding: 1em 7em;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Price = styled.span`
  font-size: 5rem;
  font-weight: 700;
  margin-right: 0.5em;
`;

const Discount = styled.span`
  padding: 0.5em;
  font-size: 3rem;
  background-color: #fff0e2;
  color: hsl(26, 100%, 55%);
  font-weight: 700;
  border-radius: 0.5em;
`;

const PrevPrice = styled.span`
  font-size: 2rem;
  justify-self: flex-end;
  opacity: 75%;
  text-decoration: line-through;
`;
