import React from 'react';
import { 
  Section,
  Headline1,
  Headline2,
  ValueSection,
  Value, 
  Body,
  IconImg,
  Inititives, } from './OurValues.css'

import { Storyp } from "../OurStory/css"
import { data } from "../OurValues/data"


export default function OurValues( props ) {
  // Took a similar approach to how Header component is being rendered buy using the pageName to match the data
  const matchPageName = data => data.pageName === props.pageName
  const cardData = data.find(matchPageName)

  // a function to determine if the card has icons
  const hasIcons = function() {
    if(cardData.icons) {
      return true
    }
    return false
  }
  
  console.log(hasIcons())
  // if hasIcons is true then this function maps through icons to return the JSX for the component
  const handleIconData = function(){
    let allIcons = cardData.icons.map(value => {
      return(
        <Value key={value.headline}>
          {value.src && <IconImg classname={value.src} src={value.src} alt={value.src}/>}
          {value.headline && <Headline2>{value.headline}</Headline2>}
          {value.desc && <Body>{value.desc}</Body>}
          {value.headerTwo && <Headline2>{value.headerTwo}</Headline2>}
          {value.initiatives && <Inititives><h5>{value.initiatives}</h5></Inititives>}
      </Value>
      )
    })
    return allIcons
  }

  
  return (
    <Section>
      {cardData.headerOne && <Headline1>{cardData.headerOne}</Headline1>}
      {cardData.headerTwo && <Headline2>{cardData.headerTwo}</Headline2>}
      {cardData.body && <Storyp>{cardData.body}</Storyp>}
      {hasIcons() && <ValueSection>
                    {handleIconData()}
                  </ValueSection>} 
    </Section>
  )
}
