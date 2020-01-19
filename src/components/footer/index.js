import React from "react"
import insta from "../../images/instagram.png"
import twitter from "../../images/twitter.png"
import linkedin from "../../images/linkedin.png"
import {
  StyledFooter,
  StyledFooterLeft,
  StyledFooterMiddle,
  StyledFooterRight,
  UL,
  NavItem,
  FooterLink,
  SocialIconList,
  SocialIconItem,
} from "./css"

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterLeft>
        <UL>
          <NavItem>
            <FooterLink to="/">Home</FooterLink>
          </NavItem>
          <NavItem>
            <FooterLink to="/">Community Guidelines</FooterLink>
          </NavItem>
          <NavItem>
            <FooterLink to="/">Contact</FooterLink>
          </NavItem>
        </UL>
      </StyledFooterLeft>
      <StyledFooterMiddle>
        <p>Copyright TechTeahouse 2020</p>
      </StyledFooterMiddle>
      <StyledFooterRight>
        <p>Connect With Us</p>
        <SocialIconList>
          <SocialIconItem>
            <img src={insta} alt="instagram link" />
          </SocialIconItem>
          <SocialIconItem>
            <img src={twitter} alt="twitter link" />
          </SocialIconItem>
          <SocialIconItem>
            <img src={linkedin} alt="Linkedin link" />
          </SocialIconItem>
        </SocialIconList>
      </StyledFooterRight>
    </StyledFooter>
  )
}

export default Footer
