import styled from "styled-components"
import { Link } from "gatsby"

import { colors } from "./constants"
const { primaryGreen, white } = colors

const buttonVariants = variant => {
  switch (variant) {
    case "primary": {
      return `background:${primaryGreen}; color:${white}; border: 2px solid ${primaryGreen}`
    }

    case "secondary": {
      return `background:${white}; color:${primaryGreen}; border: 2px solid ${primaryGreen}`
    }

    default: {
      return `background:${primaryGreen}; color:${white}; border: 2px solid ${primaryGreen}`
    }
  }
}

export const CTALink = styled(Link)`
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  line-height: 20px;

  padding: 16px 26px;

  border-radius: 6px;
  ${({ variant }) => buttonVariants(variant)}

  cursor: pointer;
`

export const Button = styled.button`
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  line-height: 20px;

  padding: 10px 40px;
  border-radius: 6px;
  ${({ variant }) => buttonVariants(variant)}

  cursor: pointer;
`
