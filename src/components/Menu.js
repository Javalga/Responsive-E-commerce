import React from "react";
import styled from "styled-components";
import iconClose from '../images/icon-close.svg'

export const Menu = (props) => {
  if(props.menuVisibility){
    return (
      <>
        <Black></Black>
        <MenuContainer>
          <img src={iconClose} onClick={props.handleMenuVisibility}></img>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </MenuContainer>
      </>
    );
  }
};
const Black = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999999;
  background-color: black;
  opacity: 60%;
`
const MenuContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 55%;
  background-color: white;
  z-index: 9999999999;
  padding: 3em;
  ul{
    margin-top: 10vh;
    list-style: none;
    li{
      font-size: 2.5rem;
      margin-bottom: 1em;
      font-weight: 700;
    }
  }
`;
