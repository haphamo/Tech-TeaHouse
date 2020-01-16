import React from "react"
import styled from "styled-components"
import logo from "../../images/Logo.png"
import { Link } from "gatsby"
import "./styles.css"

const StyleNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
`

const StyledNavBrand = styled.div`
  diplay: flex;
  padding-left: 2rem;
  img {
    width: 215px;
    height: 25px;
  }
`

const StyleNavLinks = styled.ul`
  display: flex;
  list-style: none;

  li {
    display: inline;
    padding-left: 2rem;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: grey;
    text-decoration: none;
  }
`
const StyledNavButton = styled.button`
  background-color: #255957;
  color: #ffffff;
  font-weight: bold;
  margin-left: 2rem;
  border-radius: 6px;
  margin-top: 0;
  width: 195px;
  height: 55px;
  font-family: Rubik;
  font-style: normal;
  font-size: 17px;
  text-align: center;
  margin-right: 2rem;

  &:hover {
    background-color: #ffffff;
    color: #255957;
  }
`

const index = () => {
  return (
    <StyleNav>
      <StyledNavBrand>
        <Link to="#">
          <img src={logo} alt="Tech Teahouse Logo" />
        </Link>
      </StyledNavBrand>
      <StyleNavLinks>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="">Who We Are</Link>
        </li>
        <li>
          <Link to="">What We Do</Link>
        </li>
        <li>
          <Link to="">Get In Touch</Link>
        </li>
        <StyledNavButton>Become a Partner!</StyledNavButton>
      </StyleNavLinks>
    </StyleNav>
  )
}

export default index
