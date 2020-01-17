import styled from "styled-components"

export const Grid = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(10, 5vw);
    grid-gap: 4px;
    margin-top: 4px;
  }
`

export const Img = styled.img`
  object-fit: cover;
  max-height: 75vw;
  width: 100%;

  &.position-bottom {
    object-position: center bottom;
  }

  &.position-center {
    object-position: center center;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
    max-height: auto;
  }
`

export const PicOne = styled.li`
  @media screen and (min-width: 768px) {
    grid-row: 1/6;
    grid-column: 1/4;
  }
`
export const PicTwo = styled.li`
  @media screen and (min-width: 768px) {
    grid-row: 1/6;
    grid-column: 4/8;
  }
`
export const PicThree = styled.li`
  display: none;

  @media screen and (min-width: 768px) {
    grid-row: 1/5;
    grid-column: 8/10;
    display: block;
  }
`
export const PicFour = styled.li`
  @media screen and (min-width: 768px) {
    grid-row: 6/-1;
    grid-column: 1/6;
  }
`
export const PicFive = styled.li`
  @media screen and (min-width: 768px) {
    grid-column: 6/8;
    grid-row: 6/-1;
  }
`

export const PicSix = styled.li`
  @media screen and (min-width: 768px) {
    grid-column: 8/-1;
    grid-row: 5/-1;
  }
`
export const PicSeven = styled.li`
  @media screen and (min-width: 768px) {
    grid-column: 10/-1;
    grid-row: 1/5;
  }
`
export const BannerPic = styled.li`
  height: 35vw;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const SectionHeader = styled.h2`
  font-family: "Rubik", sans-serif;
  font-weight: 900;
  margin: 3rem 0;
  color: #255957;
  font-size: 2.5rem;
  text-align: center;
  padding: 0 2rem;

  @media screen and (min-width: 769px) {
    font-size: 3.5rem;
    padding: 0;
    margin: 6rem 0;
  }
`
