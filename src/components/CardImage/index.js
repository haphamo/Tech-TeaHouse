import React from "react"
import { Link } from "gatsby"
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
  console.log(props.googleForm)
  const {
    alt,
    headline,
    headlineTwo,
    pointOne,
    pointTwo,
    pointThree,
    photo,
    googleForm
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
          <a href={googleForm} target='_blank'><ApplyButton>Apply to join !</ApplyButton></a>
        </CardTextSection>
      </Wrapper>
    </CardSection>
  )
}

export default CardImage
