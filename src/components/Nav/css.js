import styled from "styled-components"
import { Link } from "gatsby"

import { colors } from "../../theme/constants"

const { paragraphBlack, grey } = colors

export const StyleNav = styled.nav`
  display: flex;
  align-items: center;

  background: ${grey};

  box-shadow: 0px 10px 12px -4px rgba(0, 0, 0, 0.75);
  z-index: 10;

  margin-bottom: 20px;
  padding: 20px 30px;
`

export const StyledNavBrand = styled.div`
  margin-right: auto;

  img {
    width: auto;
    height: 30px;
    display: block;
  }
`

export const StyleNavLinks = styled.ul`
  display: flex;
  // justify-content: space-between;
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;
`

export const NavListItem = styled.li`
  padding: 0;
  margin-right: 55px;
  font-size: 1.1rem;
`

export const NavLink = styled(Link)`
  color: ${paragraphBlack};
`
