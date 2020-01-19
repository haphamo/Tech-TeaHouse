import styled from "styled-components"
import { Link } from "gatsby"
import SVG from "react-inlinesvg"

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  background-color: #4b4e6d;
  padding: 30px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 74px 81px;
  }
`

export const StyledFooterLeft = styled.div`
  display: flex;
  text-align: center;
  padding-bottom: 14px;

  justify-content: center;
  li {
    list-style: none;
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    text-align: left;
    padding: 0;
  }
`

export const StyledFooterMiddle = styled.div`
  text-align: center;
  order: 2;
  border-top: 1px solid white;
  padding-top: 14px;
  @media screen and (min-width: 768px) {
    order: 0;
    border-top: none;
    padding: 0;
  }
`

export const StyledFooterRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-top: 1px solid white;

  @media screen and (min-width: 768px) {
    border: none;
  }
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
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
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

export const NavModalParagraph = styled.p`
  text-decoration: underline;
  cursor: pointer;
`

export const SocialParagraph = styled.p`
  margin-top: 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`