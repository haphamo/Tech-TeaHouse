import styled from "styled-components"

export const Grid = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 5vw);
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &.position-bottom {
    object-position: center bottom;
  }

  &.position-center {
    object-position: center center;
  }
`

export const PicOne = styled.li`
  grid-row: 1/6;
  grid-column: 1/4;
`
export const PicTwo = styled.li`
  grid-row: 1/6;
  grid-column: 4/8;
`
export const PicThree = styled.li`
  grid-row: 1/5;
  grid-column: 8/10;
  z-index: 1;
`
export const PicFour = styled.li`
  grid-row: 6/-1;
  grid-column: 1/6;
`
export const PicFive = styled.li`
  grid-column: 6/8;
  grid-row: 6/-1;
`

export const PicSix = styled.li`
  grid-column: 8/-1;
  grid-row: 5/-1;
`
export const PicSeven = styled.li`
  grid-column: 10/-1;
  grid-row: 1/5;
`
export const BannerPic = styled.li`
  height: 35vw;
  z-index: 10;
`
