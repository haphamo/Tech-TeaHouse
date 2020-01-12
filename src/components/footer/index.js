import React from "react"
import styled from "styled-components"
import insta from "../../images/instagram.png"
import twitter from "../../images/twitter.png"
import linkedin from "../../images/linkedin.png"

import ReactSVG from "react-svg"

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  align-items: center;
  background-color: #4b4e6d;
  height: 238px;
`

const StyledFooterLeft = styled.div`
  display: flex;

  li {
    list-style: none;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    color: #ffffff;
  }
`

const StyledFooterMiddle = styled.div`
  display: flex;
`

const StyledFooterRight = styled.div`
  display: flex;
  padding-right: 2rem;
  flex-direction: column;
  

  ul {
    display: inline-flex;
    padding: 0;

  li {
    list-style: none;
    padding-left: 0.5rem;
  }

  img {
    width: 40px;
    height: 40px;
  }
`

const index = () => {
  return (
    <StyledFooter>
      <StyledFooterLeft>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Community Guidelines</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </StyledFooterLeft>
      <StyledFooterMiddle>
        <p>Copyright TechTeahouse 2020</p>
      </StyledFooterMiddle>
      <StyledFooterRight>
        <p>Connect With Us</p>
        <ul>
          <li>
            <img src={insta} alt="" />
          </li>
          <li>
            <img src={twitter} alt="" />
          </li>
          <li>
            <img src={linkedin} alt="" />
          </li>
        </ul>
      </StyledFooterRight>
    </StyledFooter>
  )
}

export default index
