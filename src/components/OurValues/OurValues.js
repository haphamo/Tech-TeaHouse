import React from 'react';
import { 
  Section,
  Headline1,
  Headline2,
  ValueSection,
  Value, 
  Body,
  IconImg } from './OurValues.css'

import { valuesData, titleData } from './data'

export default function OurValues() {
  const allValues = valuesData.map(value => {
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
      <Headline1>{titleData.headline1}</Headline1>
      <Headline2>{titleData.headline2}</Headline2>
      <ValueSection>
        {allValues}
      </ValueSection>
    </Section>
  )
}