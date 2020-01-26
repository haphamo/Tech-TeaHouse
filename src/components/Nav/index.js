import React from "react"
import { Link } from "gatsby"
import logo from "../../images/Logo.png"

import { CTALink } from "../../theme/components"
import { breakpoints } from "../../theme/constants"
import useWindoWidth from "../../hooks/useWindowWidth"

import {
  StyleNav,
  StyledNavBrand,
  StyleNavLinks,
  NavListItem,
  NavLink,
  CheckboxInput,
  CheckboxLabel,
  MobileNavIcon,
  NavElement,
} from "./css"

const Nav = () => {
  const { desktop } = breakpoints
  const { windowWidth } = useWindoWidth()
  return (
    <>
      <CheckboxLabel htmlFor="mobile-nav-icon">
        <MobileNavIcon />
      </CheckboxLabel>
      <CheckboxInput
        type="checkbox"
        id="mobile-nav-icon"
        name="mobile-nav-icon"
      />

      <StyleNav id="#nav">
        <StyledNavBrand id="icon">
          <Link to="/" aria-label="Click to navigate to homepage">
            <img src={logo} alt="Tech Teahouse Logo" />
          </Link>
        </StyledNavBrand>
        <NavElement>
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
            {windowWidth > desktop ? (
              <CTALink to="/sponsor-us">Become a Partner!</CTALink>
            ) : (
              <NavListItem>
                <NavLink to="/sponsor-us">Become a Partner</NavLink>
              </NavListItem>
            )}
          </StyleNavLinks>
        </NavElement>
      </StyleNav>
    </>
  )
}

export default Nav
