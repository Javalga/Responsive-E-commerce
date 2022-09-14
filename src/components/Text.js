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
    </>
  );
};

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1vh;
  span {
    font-size: 2rem;
    color: hsl(26, 100%, 55%);
    font-weight: 700;
    margin-bottom: 1em;
  }
  h1 {
    font-size: 4.5rem;
    margin-bottom: 0.5em;
  }
  p {
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.5em;
    opacity: 75%;
  }

  @media (min-width: 1200px) {
    margin-bottom: 4em;
    height: 60%;
  }
`;
