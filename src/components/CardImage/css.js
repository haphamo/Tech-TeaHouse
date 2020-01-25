import styled from "styled-components"
import { breakpoints } from "../../theme/constants"
const CardSection = styled.section`
  background-color: #ffffff;
  position: relative;
  display: flex;

  @media screen and (min-width: ${breakpoints.tablet}px) {
    padding: 5rem 1.25rem 8rem 1.25rem;
  }
`

const CardPhoto = styled.img`
  @media (min-width: 850px) {
    height: 550px;
    width: 850px;
    position: absolute;
  }

  @media (max-width: 849px) {
    height: 100%;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`

const CardTextSection = styled.div`
  @media (min-width: 1025px) {
    background-color: #ffffff;
    position: relative;
    height: 500px;
    width: 700px;
    margin-left: 32rem;
    margin-right: 6.25rem;
    transform: translateY(1.5rem);
    padding: 3rem;
  }

  @media (min-width: 850px) and (max-width: 1024px) {
    background-color: #ffffff;
    position: relative;
    height: 500px;
    width: 700px;
    margin-left: 13rem;
    padding: 1rem;
    transform: translateY(1.5rem);
  }

  @media (max-width: 849px) {
    background: rgba(255, 255, 255, 0.75);
    padding: 3rem 0.5rem;
    text-align: center;
  }
`

const CardH2 = styled.h2`
  font-family: "Rubik", sans-serif;
  color: #255957;
  font-size: 3.5rem;
  margin-top: 0;
`

const CardH3 = styled.h3`
  font-family: "Rubik", sans-serif;
  font-size: 1.75rem;
  color: #333333;
`

const CardP = styled.p`
  font-family: "Karla", sans-serif;
  font-size: 1rem;
  font-weight: regular;
  line-height: 2rem;
  color: #333333;
`

const Wrapper = styled.div`
  margin: auto;
`
export {
  CardSection,
  CardPhoto,
  CardTextSection,
  CardH2,
  CardH3,
  CardP,
  Wrapper,
}
