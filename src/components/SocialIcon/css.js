import styled from "styled-components"
import SVG from "react-inlinesvg"
import { colors } from "../../theme/constants"

const { white } = colors

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
  fill: ${white};
  width: 20px;
  height: auto;
  display: block;
`
