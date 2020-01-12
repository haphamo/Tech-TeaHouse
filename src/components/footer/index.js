import React from "react"
import styled from "styled-components"
import insta from "../../images/instagram.png"
import twitter from "../../images/twitter.png"
import linkedin from "../../images/linkedin.png"
import { Link } from "gatsby"

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
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Community Guidelines</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
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
            <img src={insta} alt="instagram link" />
          </li>
          <li>
            <img src={twitter} alt="twitter link" />
          </li>
          <li>
            <img src={linkedin} alt="Linkedin link" />
          </li>
        </ul>
      </StyledFooterRight>
    </StyledFooter>
  )
}

export default index
