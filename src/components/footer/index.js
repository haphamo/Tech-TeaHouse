import React from "react"
import useModal from "../../hooks/useModal"
import Modal from "../Modal"
import SocialIcon from "../SocialIcon"
import { socialMedia } from "./data"
import CommunityGuidelines from "../CommunityGuidelines"
import {
  StyledFooter,
  StyledFooterLeft,
  StyledFooterMiddle,
  StyledFooterRight,
  NavItem,
  FooterLink,
  SocialIconList,
  SocialParagraph,
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
          {socialMedia.map(social => {
            const { ariaLabel, icon, linkTo, id } = social
            return (
              <SocialIcon
                key={id}
                icon={icon}
                linkTo={linkTo}
                ariaLabel={ariaLabel}
              />
            )
          })}
        </SocialIconList>
      </StyledFooterRight>

      {isOpen && (
        <Modal closeModal={closeModal}>
          <CommunityGuidelines />
        </Modal>
      )}
    </StyledFooter>
  )
}

export default Footer
