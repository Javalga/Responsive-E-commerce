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
      <AddToCartBtn onClick={props.handleSelectedItems}>
        Add to cart
      </AddToCartBtn>
    </UnitControlsContainer>
  );
};

const UnitControlsContainer = styled.div`
  @media (min-width: 1200px) {
    padding: 0;
    margin-top: 10em;
    flex-direction: row;
    align-items: center;
    padding: 0;
  }
  margin-top: 5em;
  width: 100%;
  display: flex;
  padding: 0;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5em;
    @media (min-width: 1200px) {
      width: 25%;
      margin-bottom: 0em;
    }
    img {
      width: 5%;
      cursor: pointer;
      @media (min-width: 1200px) {
        width: 10%;
      }
    }
    span {
      font-size: 3em;
      font-weight: 700;
    }
  }
`;

const AddToCartBtn = styled.button`
  @media (min-width: 1200px) {
    width: 50%;
    margin-bottom: 0;
    padding: 1.5em 5em;
    font-size: 1.5rem;
  }
  cursor: pointer;
  padding: 1.5em;
  width: 100%;
  margin: auto;
  font-size: 2rem;
  background-color: #ff7d1b;
  border: 0;
  border-radius: 0.3em;
  color: white;
  font-weight: 700;
  margin-bottom: 5em;
  -webkit-box-shadow: -1px 27px 29px -20px rgba(0, 0, 0, 0.49);
  -moz-box-shadow: -1px 27px 29px -20px rgba(0, 0, 0, 0.49);
  box-shadow: -1px 27px 29px -20px rgba(0, 0, 0, 0.49);
`;
