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
        </CardTextSection>
      </Wrapper>
    </CardSection>
  )
}

export default CardImage
