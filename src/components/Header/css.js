import styled from "styled-components"
import { Link } from "gatsby"
import { H3 } from "../../theme/typography"
import { breakpoints } from "../../theme/constants"

const { desktop } = breakpoints

export const HeaderSection = styled.section`
  display: flex;
  align-items: center;

  background-image: ${({ pageName, image }) =>
    pageName === "get-in-touch" ? null : `url('${image}')`};
  background-position: center center;
  background-size: cover;

  min-height: ${({ pageName }) =>
    pageName === "get-in-touch" ? "60vh" : `100vh`};
  padding: 5%;

  @media screen and (min-width: 769px) {
    padding: 0;
    min-height: ${({ pageName }) =>
      pageName === "get-in-touch" ? "400px" : `600px`};

    background-image: ${({ pageName, image }) =>
      pageName === "get-in-touch"
        ? null
        : `linear-gradient(
        108deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 50%,
        transparent 50%
      ),
    url('${image}')`};
  }

  @media screen and (min-width: ${desktop}px) {
    background-image: ${({ pageName, image }) =>
      pageName === "get-in-touch"
        ? null
        : `linear-gradient(
        108deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 46%,
        transparent 46%
      ),
    url('${image}')`};
  }
`

export const HeaderContent = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 32px 5%;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 769px) {
    background-color: transparent;
    text-align: ${({ pageName }) =>
      pageName === "get-in-touch" ? "center" : "left"};
    width: ${({ pageName }) => (pageName === "get-in-touch" ? "100%" : "50%")};
    padding: 0;
    padding-left: ${({ pageName }) =>
      pageName === "get-in-touch" ? "0" : "50px"};
    align-items: ${({ pageName }) =>
      pageName === "get-in-touch" ? "center" : "flex-start"};
  }
`

export const HeaderH3 = styled(H3)`
  margin-bottom: 20px;
  margin-top: 0;

  @media screen and (min-width: 769px) {
    width: ${({ pageName }) => (pageName === "get-in-touch" ? "100%" : "85%")};
  }
`

export const P = styled.p`
  letter-spacing: -0.015em;
  line-height: 30px;

  margin-bottom: 32px;
  margin-top: 0;

  @media screen and (min-width: 769px) {
    width: 80%;
    margin-bottom: ${({ pageName }) =>
      pageName === "get-in-touch" ? "0" : "48px"};
  }
`

export const HeaderLink = styled(Link)`
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  line-height: 20px;

  padding: 16px 26px;

  background: #255957;
  border-radius: 6px;
  color: #fff;

  cursor: pointer;
`
