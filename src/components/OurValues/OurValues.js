import React from 'react';
import { 
  CommunityValuesSection,
  Headline1,
  Headline2,
  ValueSection,
  Value, 
  Body,
  IconImg } from './OurValues.css'

import { data } from './data'

export default function OurValues() {
  const allValues = data.map(value => {
    return(
      <Value key={value.headline}>
        <IconImg classname={value.headline} src={value.src} alt={value.headline}/>
        <Headline2>{value.headline}</Headline2>
        <Body>{value.desc}</Body>
    </Value>
    )
  })
  return (
    <CommunityValuesSection>
      <Headline1>Our Values</Headline1>
      <Headline2>An Inclusive Toronto-based Tech Community</Headline2>
      <ValueSection>
        {allValues}
      </ValueSection>
    </CommunityValuesSection>
  )
}