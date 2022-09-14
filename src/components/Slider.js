import React from "react";
import styled from "styled-components";
import iconPrev from "../images/icon-previous.svg";
import iconNext from "../images/icon-next.svg";

export const Slider = (props) => {
  return (
    <SliderWrapper>
      <SliderContainer>
        <SliderImg
          src={props.imageChanger()}
          opacity={props.opacity}
        ></SliderImg>
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
      <ImageOptionContainer>
        <ImageOption
          src={props.imageThumbnails[0]}
          ref={props.imageThumbnailsRef[0]}
          onClick={props.handleSelectedIndex}
        ></ImageOption>
        <ImageOption
          src={props.imageThumbnails[1]}
          ref={props.imageThumbnailsRef[1]}
          onClick={props.handleSelectedIndex}
        ></ImageOption>
        <ImageOption
          src={props.imageThumbnails[2]}
          ref={props.imageThumbnailsRef[2]}
          onClick={props.handleSelectedIndex}
        ></ImageOption>
        <ImageOption
          src={props.imageThumbnails[3]}
          ref={props.imageThumbnailsRef[3]}
          onClick={props.handleSelectedIndex}
        ></ImageOption>
      </ImageOptionContainer>
    </SliderWrapper>
  );
};
const SliderWrapper = styled.div`
  @media (min-width: 1200px) {
    height: 100%;
    padding: 2em;
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    overflow: hidden;
    row-gap: 3vh;
  }
`;
const SliderContainer = styled.div`
  @media (min-width: 1200px) {
    width: 80%;
  }
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  margin: auto;
  img {
    width: 100%;
  }
`;

const SliderImg = styled.img`
  opacity: ${(props) => props.opacity};
  transition: 1000ms ease-in-out opacity;
  @media (min-width: 1200px) {
    border-radius: 10px;
  }
`;
const ControlsContainer = styled.div`
  @media (min-width: 1200px) {
    display: none;
  }
  pointer-events: none;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    position: relative;
    width: 15%;
    padding: 2em;
    margin: 1em;
    height: 100%;
    pointer-events: all;
    z-index: 99;
    border-radius: 50%;
    z-index: 9;
  }
  img {
    scale: 0.8;
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

const ImageOptionContainer = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
  width: 80%;
  cursor: pointer;
  height: 20%;
  margin: auto;
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  justify-content: space-between;
`;
const ImageOption = styled.img`
  width: 100%;
  border-radius: 5px;
`;
