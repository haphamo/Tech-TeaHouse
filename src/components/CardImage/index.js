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
    icon
  } = props
  return (
    <CardSection>
      <Wrapper>
        <CardPhoto src={photo} alt={alt} />
        <CardTextSection>
          <CardH2>{headline}</CardH2>
          <H3>{headlineTwo} <img style={{paddingLeft: '2rem'}} height='50px' alt='slack' src={icon}></img></H3>
          <CardP>{pointOne}</CardP>
          <CardP>{pointTwo}</CardP>
          <CardP>{pointThree}</CardP>
          <button>Apply to join !</button>
        </CardTextSection>
      </Wrapper>
    </CardSection>
  )
}

export default CardImage
