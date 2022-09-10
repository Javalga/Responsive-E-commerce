import React from "react";
import styled from "styled-components";
import iconPrev from "../images/icon-previous.svg";
import iconNext from "../images/icon-next.svg";

export const Slider = (props) => {
  return (
    <SliderContainer>
      <img src={props.imageChanger()}></img>
      <ControlsContainer>
        <div>
          <img
            src={iconPrev}
            ref={props.previousRef}
            onClick={props.handleSelectedIndex}
          ></img>
        </div>
        <div>
          <img
            src={iconNext}
            ref={props.nextRef}
            onClick={props.handleSelectedIndex}
          ></img>
        </div>
      </ControlsContainer>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  img {
    width: 100%;
  }
`;
const ControlsContainer = styled.div`
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div{
    position: relative;
    width: 15%;
    padding: 2em;
    margin: 1em;
    height: 77%;
    pointer-events: all;
    z-index: 99;
    background-color: white;
    border-radius: 50%;
    z-index: 9;
  }
  img {
    scale: .5;
    aspect-ratio: 1/1;
    z-index: 99;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;
