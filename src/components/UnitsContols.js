import React from "react";
import styled from "styled-components";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";

export const UnitControls = (props) => {
  return (
    <UnitControlsContainer>
      <div>
        <img
          src={iconMinus}
          ref={props.minusRef}
          onClick={props.handleSelectedUnits}
        ></img>
        <span>{props.selectedUnits}</span>
        <img
          src={iconPlus}
          ref={props.plusRef}
          onClick={props.handleSelectedUnits}
        ></img>
      </div>
      <AddToCartBtn>
        Add to cart
      </AddToCartBtn>
    </UnitControlsContainer>
  );
};

const UnitControlsContainer = styled.div`
  margin-top: 4em;
  width: 100%;
  display: flex;
  padding: 0 7em;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5em;
    img {
      width: 8%;
      cursor: pointer;
    }
    span {
      font-size: 3em;
      font-weight: 700;
    }
  }
`;

const AddToCartBtn = styled.button`
  padding: 1em;
  width: 80%;
  margin: auto;
  font-size: 2em;
  background-color: #FF7D1B;
  border: 0;
  border-radius: 1em;
  color: white;
  font-weight: 700;
`;
