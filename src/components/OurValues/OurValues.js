import React from 'react';
import { 
  CommunityValuesSection,
  Headline1,
  Headline2,
  ValueSection,
  Value, 
  Body,
  IconImg } from './OurValues.css'
import inclusivityImg from '../../../src/images/22-web_essential-512.png'
import communityImg from '../../../src/images/iconfinder_05-web_essential_3401825.svg'
import developmentImg from '../../../src/images/iconfinder_27-web_essential_3401845.svg'

let fixtures = [
  { src: inclusivityImg,
    headline: "Inclusivity",
    desc: "We are an inclusive tech community that cares for our member's professional development" },
  { src: communityImg,
    headline: "Community",
    desc: "We are an inclusive tech community that cares for our member's professional development" },
  { src: developmentImg,
    headline: "Development",
    desc: "We are an inclusive tech community that cares for our member's professional development" }
]


export default function OurValues() {
  const allValues = fixtures.map(value => {
    return(
      <Value key={value.headline}>
        <IconImg classname={"icon"} src={value.src} alt={value.headline}/>
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