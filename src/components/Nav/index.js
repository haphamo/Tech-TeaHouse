import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../../images/Logo.png"

import { CTALink } from "../../theme/components"
import { colors } from "../../theme/constants"

const { paragraphBlack, grey } = colors

const StyleNav = styled.nav`
  display: flex;
  align-items: center;

  background: ${grey};

  box-shadow: 0px 10px 12px -4px rgba(0, 0, 0, 0.75);
  z-index: 10;

  margin-bottom: 20px;
  padding: 20px 30px;
`

const StyledNavBrand = styled.div`
  margin-right: auto;

  img {
    width: auto;
    height: 30px;
    display: block;
  }
`

const StyleNavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;
`

const NavListItem = styled.li`
  padding: 0;
  margin-right: 55px;
  font-size: 1.1rem;
`

const NavLink = styled(Link)`
  color: ${paragraphBlack};
`

const Nav = () => {
  return (
    <StyleNav>
      <StyledNavBrand>
        <Link to="/" aria-label="Click to navigate to homepage">
          <img src={logo} alt="Tech Teahouse Logo" />
        </Link>
      </StyledNavBrand>
      <StyleNavLinks>
        <NavListItem>
          <NavLink to="/">Home</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="/who-we-are">Who We Are</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="/what-we-do">What We Do</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="/get-in-touch">Get In Touch</NavLink>
        </NavListItem>
        <CTALink to="/sponsor-us">Become a Partner!</CTALink>
      </StyleNavLinks>
    </StyleNav>
  )
}

export default Nav
