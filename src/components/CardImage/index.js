import React from "react"
import { H3 } from "../../theme/typography"
import {
  CardSection,
  CardPhoto,
  CardTextSection,
  CardH2,
  CardP,
  ApplyButton,
  Wrapper,
} from "./css"
import { colors } from "../../theme/constants"


const CardImage = props => {
  const {
    alt,
    headline,
    headlineTwo,
    pointOne,
    pointTwo,
    pointThree,
    photo,
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
          <ApplyButton>Apply to join !</ApplyButton>
        </CardTextSection>
      </Wrapper>
    </CardSection>
  )
}

export default CardImage
