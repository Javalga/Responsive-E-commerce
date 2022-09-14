import React from "react";
import styled from "styled-components";
import iconDelete from "../images/icon-delete.svg";

export const Cart = (props) => {
  console.log(props.cartItem);
  if (props.cartVisibility === true) {
    return (
      <CartContainer>
        <TitleContainer>
          <span>Cart</span>
        </TitleContainer>
        <ItemsContainer>
          <CartItemsContainer display={props.selectedItems ? "flex" : "none"}>
            <CartItemImage src={props.cartItem.image}></CartItemImage>
            <NameAndPrice>
              <p>{props.cartItem.name}</p>
              <p>
                {props.cartItem.price} x {props.cartItem.units}{" "}
                <strong>${props.cartItem.finalPrice}.00</strong>
              </p>
            </NameAndPrice>
            <IconDelete
              src={iconDelete}
              onClick={props.handleDeleteItem}
            ></IconDelete>
          </CartItemsContainer>
          <EmptyCart display={props.selectedItems ? "none" : ""}>
            Your cart is empty
          </EmptyCart>
        </ItemsContainer>
        <CheckoutBtn display={props.selectedItems ? "flex" : "none"}>
          Checkout
        </CheckoutBtn>
      </CartContainer>
    );
  }
};

const CartContainer = styled.div`
  @media (min-width: 1200px) {
    width: 25%;
    margin: 0;
    right: 0;
    left: 70%;
    height: 35%;
    -webkit-box-shadow: 0px 14px 23px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 14px 23px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 14px 23px -6px rgba(0, 0, 0, 0.75);
  }
  position: absolute;
  width: 90%;
  left: 0;
  right: 0;
  top: 13%;
  margin: auto;
  background-color: white;
  z-index: 99999;
  height: 60%;
  border-radius: 2.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 3em;
`;

const TitleContainer = styled.div`
  padding: 2em;
  padding-bottom: 6em;
  height: 25%;
  border-bottom: 3px solid #eee;
  span {
    font-size: 2.5rem;
    font-weight: 700;
    @media (min-width: 1200px) {
      font-size: 2rem;
      align-self: flex-start;
    }
  }
`;

const ItemsContainer = styled.div`
  @media (min-width: 1200px) {
    padding: 2em;
  }
  width: 100%;
  height: 80%;
  padding: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmptyCart = styled.p`
  display: ${(props) => props.display};
  font-size: 2.5rem;
  color: hsl(219, 9%, 45%);
`;

const CartItemsContainer = styled.div`
  align-self: flex-start;
  width: 100%;
  display: ${(props) => props.display};
  justify-content: space-around;
  flex-direction: row;
  p {
    font-size: 2rem;
  }
`;
const CartItemImage = styled.img`
  @media (min-width: 1200px) {
    width: 18%;
  }
  height: 100%;
  width: 20%;
  border-radius: 10px;
`;
const NameAndPrice = styled.div`
  p {
    @media (min-width: 1200px) {
      font-size: 1.8rem;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 2em;
  strong {
    margin-left: 0.5em;
  }
`;

const IconDelete = styled.img`
  width: 5% !important;
  align-self: center;
  cursor: pointer;
`;
const CheckoutBtn = styled.button`
  @media (min-width: 1200px) {
    border-radius: .5em;
    height: 40%;
  }
  width: 80%;
  height: 30%;
  margin: auto;
  display: ${(props) => props.display};
  background-color: #ff7d1b;
  border: 0;
  border-radius: 1em;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: white;
  font-weight: 700;
  cursor: pointer;
`;
