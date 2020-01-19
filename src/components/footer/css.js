import styled from "styled-components"
import { Link } from "gatsby"
import SVG from "react-inlinesvg"
export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  background-color: #4b4e6d;
  padding: 74px 81px;
  font-weight: normal;
  font-family: "Karla";
  font-size: 1rem;
`

export const StyledFooterLeft = styled.div`
  display: flex;

  li {
    list-style: none;
  }
`

export const StyledFooterMiddle = styled.div`
  text-align: center;
`

export const StyledFooterRight = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterLink = styled(Link)`
  text-decoration: underline;
  color: #fff;
  cursor: pointer;
`

export const UL = styled.ul`
  padding: 0;
  margin: 0;
`

export const NavItem = styled.li`
  margin-bottom: 16px;
`
export const SocialIconList = styled(UL)`
  display: flex;
`

export const SocialIconItem = styled.li`
  &:not(:last-child) {
    margin-right: 40px;
  }

  border: 1px solid white;
  border-radius: 50%;
  display: block;
  height: 40px;
  width: 40px;
  display: flex;
  padding: 0;
`

export const SocialLink = styled.a`
  display: block;
  margin: auto;
`

export const StyledSVG = styled(SVG)`
  fill: white;
  width: 20px;
  height: auto;
  display: block;
`

export const SocialParagraph = styled.p`
  margin-top: 0;
`
