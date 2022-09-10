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
        <IconMenu src={iconMenu}></IconMenu>
        <Logo src={logo}></Logo>
      </LeftWrapper>
      <RightWrapper>
        <IconCart src={iconCart}></IconCart>
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
`;
const LeftWrapper = styled.div`
  display: flex;
  width: 35%;
  align-items: center;
  justify-content: space-between;
`
const RightWrapper = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: space-between;
`
const IconMenu = styled.img``;

const Logo = styled.img`
`;

const IconCart = styled.img`
  max-width: 50px;
`;
const Avatar = styled.img`
  max-width: 50px;
`;
