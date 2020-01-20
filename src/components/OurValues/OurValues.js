import React from 'react';
import { 
  Section,
  Headline1,
  Headline2,
  ValueSection,
  Value, 
  Body,
  IconImg } from './OurValues.css'

import { data } from "../OurValues/data"

export default function OurValues( props ) {

  const matchPageName = data => data.pageName === props.pageName
  const cardData = data.find(matchPageName)
  console.log('cardData',cardData)
  // need a conditional, not all pages have icons
  const allValues = cardData.icons.map(value => {
      return(
        <Value key={value.headline}>
          <IconImg classname={value.headline} src={value.src} alt={value.headline}/>
          <Headline2>{value.headline}</Headline2>
          <Body>{value.desc}</Body>
      </Value>
      )
  })
  
  return (
    <Section>
      {cardData.headerOne && <Headline1>{cardData.headerOne}</Headline1>}
      {cardData.headerTwo && <Headline2>{cardData.headerTwo}</Headline2>}
      {cardData.body && <h5>{cardData.body}</h5>}
      {cardData.icons && <ValueSection>
        {allValues}
      </ValueSection>}
    </Section>
  )
}
