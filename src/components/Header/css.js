import styled from "styled-components"
import headerImage from "../../images/womenintech-8.jpg"

export const HeaderSection = styled.section`
  min-height: 600px;
  background-image: linear-gradient(
      108deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 50%,
      transparent 50%
    ),
    url('${headerImage}');
    background-position: center center;
  background-size: cover;

  display: flex;
  align-items: center;

  @media screen and (min-width: 1200px) {
     background-image: linear-gradient(
      108deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 45%,
      transparent 45%
    ),
    url('${headerImage}');
  }
 `

export const HeaderContent = styled.div`
  width: 50%;
  padding-left: 50px;
`

export const H1 = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 20px;
  color: #255957;
`

export const H2 = styled.h2`
  font-family: "Rubik", sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 20px;

  width: 80%;

  color: #33333;
`

export const P = styled.p`
  font-family: "Karla", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 30px;
  letter-spacing: -0.015em;
  color: rgba(51, 51, 51, 0.8);

  width: 75%;

  margin-bottom: 50px;
`

export const Button = styled.button`
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 20px;

  padding: 16px 26px;

  background: #255957;
  border-radius: 6px;
  color: #fff;
`
