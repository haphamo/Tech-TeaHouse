import React from 'react';
import { 
  Section,
  Headline1,
  Headline2,
  ValueSection,
  Value, 
  Body,
  IconImg } from './OurValues.css'

import { Storyp } from "../OurStory/css"
import { data } from "../OurValues/data"


export default function OurValues( props ) {

  const matchPageName = data => data.pageName === props.pageName
  const cardData = data.find(matchPageName)
  
  // need a conditional, not all pages have icons

  console.log('cardData',cardData)
  
  const hasIcons = function() {
    cardData.icons ? true : false
  }
  // create handleIconData function
  
  const handleIconData = function(){
    let test = cardData.icons.map(value => {
      return(
        <Value key={value.headline}>
          {value.src && <IconImg classname={value.src} src={value.src} alt={value.src}/>}
          {value.headline && <Headline2>{value.headline}</Headline2>}
          {value.desc && <Body>{value.desc}</Body>}
          {value.headerTwo && <Headline2>{value.headerTwo}</Headline2>}
      </Value>
      )
    })
    return test
  }
  
  // const allValues = cardData.icons.map(value => {
  //     return(
  //       <Value key={value.headline}>
  //         {value.src && <IconImg classname={value.src} src={value.src} alt={value.src}/>}
  //         {value.headline && <Headline2>{value.headline}</Headline2>}
  //         {value.desc && <Body>{value.desc}</Body>}
  //         {value.headerTwo && <Headline2>{value.headerTwo}</Headline2>}
  //     </Value>
  //     )
  // })

  
  return (
    <Section>
      {cardData.headerOne && <Headline1>{cardData.headerOne}</Headline1>}
      {cardData.headerTwo && <Headline2>{cardData.headerTwo}</Headline2>}
      {cardData.body && <Storyp>{cardData.body}</Storyp>}
      {hasIcons && <h5>test</h5>}
      {hasIcons && <ValueSection>
      {handleIconData()}
        
      </ValueSection>}
    </Section>
  )
}
