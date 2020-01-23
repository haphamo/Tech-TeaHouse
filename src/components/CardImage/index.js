import React from "react"
import {
  CardSection,
  CardPhoto,
  CardTextSection,
  CardH2,
  CardH3,
  CardP,
  Wrapper,
} from "./css"

const CardImage = props => {
  return (
    <CardSection>
      <Wrapper>
        <CardPhoto src={props.photo} alt={props.alt} />
        <CardTextSection>
          <CardH2>{props.headline}</CardH2>
          <CardH3>{props.headlineTwo}</CardH3>
          <CardP>{props.pointOne}</CardP>
          <CardP>{props.pointTwo}</CardP>
          <CardP>{props.pointThree}</CardP>
        </CardTextSection>
      </Wrapper>
    </CardSection>
  )
}

export default CardImage
