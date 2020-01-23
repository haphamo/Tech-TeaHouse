import React from "react"
import { Link } from "gatsby"
import logo from "../../images/Logo.png"

import { CTALink } from "../../theme/components"

import {
  StyleNav,
  StyledNavBrand,
  StyleNavLinks,
  NavListItem,
  NavLink,
} from "./css"

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
