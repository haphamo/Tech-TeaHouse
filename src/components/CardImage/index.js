import React from "react"
import { H3 } from "../../theme/typography"
import {
  CardSection,
  CardPhoto,
  CardTextSection,
  CardH2,
  CardP,
  Wrapper,
} from "./css"
import { colors } from "../../theme/constants"


const CardImage = props => {
  const buttonStyling = {
    color: colors.white,
    borderRadius: '0.5em',
    backgroundColor: colors.primaryGreen,
    padding: '0.5em 1em 0.5em 1em',
    fontFamily: "Rubik, sans-serif",
    fontWeight: '500',
    lineHeight: '20px',
  }
  const {
    alt,
    headline,
    headlineTwo,
    pointOne,
    pointTwo,
    pointThree,
    photo,
    icon
  } = props
  return (
    <CardSection>
      <Wrapper>
        <CardPhoto src={photo} alt={alt} />
        <CardTextSection>
          <CardH2>{headline}</CardH2>
          <H3>{headlineTwo}</H3>
          <CardP>{pointOne}</CardP>
          <CardP>{pointTwo}</CardP>
          <CardP>{pointThree}</CardP>
          <button style={buttonStyling}>Apply to join !</button>
        </CardTextSection>
      </Wrapper>
    </CardSection>
  )
}

export default CardImage
