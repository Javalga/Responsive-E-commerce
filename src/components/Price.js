import React from "react";
import styled from "styled-components";

export const Price = (props) => {
  return (
    <PriceContainer>
      <div>
        <PriceNumber>$125.00</PriceNumber>
        <Discount>50%</Discount>
      </div>
      <PrevPrice>$250.00</PrevPrice>
    </PriceContainer>
  );
};

const PriceContainer = styled.div`
  @media (min-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0;
  }
  margin-top: 5em;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  div:first-child {
    display: flex;
    align-items: center;
    @media (min-width: 1200px) {
      width: 100%;
    }
  }
`;

const PriceNumber = styled.span`
    @media (min-width: 1200px) {
      font-size: 5rem;
    }
    font-size: 4rem;
  font-weight: 700;
  margin-right: 0.5em;
`;

const Discount = styled.span`
  padding: 0.5em;
  font-size: 2rem;
  background-color: #fff0e2;
  color: hsl(26, 100%, 55%);
  font-weight: 700;
  border-radius: 0.5em;
`;

const PrevPrice = styled.span`
  font-size: 2rem;
  opacity: 75%;
  text-decoration: line-through;
`;
