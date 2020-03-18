import styled from "styled-components"
import { colors } from "./constants"

const { primaryGreen, lightBlack } = colors

export const H1 = styled.h1`
  font-family: "Rubik", sans-serif;
  font-weight: 900;
  margin-bottom: 20px;
  margin-top: 0;
  color: ${primaryGreen};
  font-size: 3rem;

  @media screen and (min-width: 769px) {
    font-size: 3.5rem;
  }
`

export const H2 = styled.h2`
  font-family: "Rubik", sans-serif;
  font-weight: 900;
  color: ${primaryGreen};
  font-size: 2.5rem;
  text-align: center;
  padding: 0 2rem;

  @media screen and (min-width: 769px) {
    font-size: 3.5rem;
    padding: 0;
  }
`

export const H3 = styled.h3`
  font-family: "Rubik", sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  color: ${lightBlack};
  display: flex;
  align-items: center;
`
