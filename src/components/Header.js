import React from "react";
import styled from "styled-components";
import iconMenu from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import iconCart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";

export const Header = (props) => {
  return (
    <HeaderContainer>
      <LeftWrapper>
        <IconMenu
          src={iconMenu}
          onClick={props.handleMenuVisibility}
        ></IconMenu>
        <Logo src={logo}></Logo>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </LeftWrapper>
      <RightWrapper>
        <IconCart
          src={iconCart}
          ref={props.cartIconRef}
          onClick={props.handleCartVisibility}
        ></IconCart>
        <Avatar src={avatar}></Avatar>
      </RightWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  min-width: 100%;
  padding: 2em 4em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1200px){
    padding: 4em;
    margin-bottom: 7em;
    border-bottom: 2px solid #eee;
  }
`;
const LeftWrapper = styled.div`
  @media (min-width: 1200px){
    width: 20%;
  }
  position: relative;
  display: flex;
  width: 35%;
  align-items: center;
  justify-content: space-between;
  img{
    cursor: pointer;
  }
  ul{
    @media (max-width: 1200px){
      display: none;
    }
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    li{
      cursor: pointer;
      margin-left: 2em;
      font-size: 2rem;
      color: hsl(219, 9%, 45%);
      &:hover{
        &:before{
          content: '';
          position: absolute;
          bottom: 0;
          height: 4px;
        }
      }
    }
  }
`;
const RightWrapper = styled.div`
@media (min-width: 1200px) {
  justify-content: flex-end;
}
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: space-between;
`;
const IconMenu = styled.img`
   @media (min-width: 1200px) {
    display: none;
  }
`;

const Logo = styled.img``;

const IconCart = styled.img`
   @media (min-width: 1200px) {
    margin-right: 2em;
  }
  max-width: 50px;
  cursor: pointer;
`;
const Avatar = styled.img`
  max-width: 50px;
`;
