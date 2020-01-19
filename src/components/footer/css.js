import styled from "styled-components"
import { Link } from "gatsby"

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
`
