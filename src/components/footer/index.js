import React from "react"
import useModal from "../../hooks/useModal"
import Modal from "../Modal"
import insta from "../../images/instagram.svg"
import twitter from "../../images/twitter.svg"
import linkedin from "../../images/linkedin2.svg"
import {
  StyledFooter,
  StyledFooterLeft,
  StyledFooterMiddle,
  StyledFooterRight,
  NavItem,
  FooterLink,
  SocialIconList,
  SocialIconItem,
  StyledSVG,
  SocialParagraph,
  SocialLink,
  UL,
  NavModalParagraph,
} from "./css"

const Footer = () => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <StyledFooter>
      <StyledFooterLeft>
        <UL>
          <NavItem>
            <FooterLink to="/">Home</FooterLink>
          </NavItem>
          <NavItem>
            <NavModalParagraph onClick={openModal}>
              Community Guidelines
            </NavModalParagraph>
          </NavItem>
          <NavItem>
            <FooterLink to="/get-in-touch">Contact</FooterLink>
          </NavItem>
        </UL>
      </StyledFooterLeft>
      <StyledFooterMiddle>
        <p>Copyright TechTeahouse 2020</p>
      </StyledFooterMiddle>
      <StyledFooterRight>
        <SocialParagraph>Connect With Us</SocialParagraph>
        <SocialIconList>
          <SocialIconItem>
            <SocialLink
              href="https://www.linkedin.com/company/techteahouse/"
              aria-label="Visit Tech Teahouse linked in page"
            >
              <StyledSVG src={linkedin} />
            </SocialLink>
          </SocialIconItem>
          <SocialIconItem>
            <SocialLink
              href="https://twitter.com/TechTeahouse"
              aria-label="Visit Tech Teahouse twitter page"
            >
              <StyledSVG src={twitter} />
            </SocialLink>
          </SocialIconItem>
          <SocialIconItem>
            <SocialLink
              href="https://www.linkedin.com/company/techteahouse/"
              aria-label="Visit Tech Teahouse instagram page"
            >
              <StyledSVG src={insta} />
            </SocialLink>
          </SocialIconItem>
        </SocialIconList>
      </StyledFooterRight>
      {isOpen && (
        <Modal closeModal={closeModal}>
          <h2>Modal</h2>
        </Modal>
      )}
    </StyledFooter>
  )
}

export default Footer
