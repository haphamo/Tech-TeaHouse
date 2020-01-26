import styled from "styled-components"
import { Link } from "gatsby"
import { colors } from "../../theme/constants"
import { breakpoints } from "../../theme/constants"

const { tablet } = breakpoints
const { violet, white } = colors

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  color: ${white};
  background-color: ${violet};

  padding: 30px;

  @media screen and (min-width: ${tablet}px) {
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

  @media screen and (min-width: ${tablet}px) {
    justify-content: flex-start;
    text-align: left;
    padding: 0;
  }
`

export const StyledFooterMiddle = styled.div`
  text-align: center;
  order: 2;
  border-top: 1px solid ${white};
  padding-top: 14px;

  @media screen and (min-width: ${tablet}px) {
    order: 0;
    border-top: none;
    padding: 0;
  }
`

export const StyledFooterRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-top: 1px solid ${white};

  @media screen and (min-width: ${tablet}px) {
    border: none;
  }
`

export const FooterLink = styled(Link)`
  text-decoration: underline;
  color: ${white};
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

  @media screen and (min-width: ${tablet}px) {
    justify-content: flex-start;
  }
`

export const NavModalParagraph = styled.p`
  text-decoration: underline;
  cursor: pointer;
`

export const SocialParagraph = styled.p`
  margin-top: 0;
  text-align: center;

  @media screen and (min-width: ${tablet}px) {
    text-align: left;
  }
`
