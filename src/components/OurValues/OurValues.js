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

export default function OurValues() {
  return (
    <CommunityValuesSection>
      <Headline1>Our Values</Headline1>
      <Headline2>An Inclusive Toronto-based Tech Community</Headline2>
      <ValueSection>
        <Value>
          <IconImg classname={"icon"} src={inclusivityImg} alt="inclusivity"/>
          <Headline2>Inclusivity</Headline2>
          <Body>We are an inclusive tech community that cares for our member's professional development</Body>
        </Value>
        <Value>
          <img className={"icon"} style={{height: "116px"}}src={communityImg} alt="inclusivity"/>
          <Headline2>Community</Headline2>
          <Body>We connect members to upcoming tech events in the city.</Body>
        </Value>
        <Value>
          <img className={"icon"} style={{height: "116px"}}src={developmentImg} alt="inclusivity"/>
          <Headline2>Development</Headline2>
          <Body>We organize workshops that empower members for their professional development.</Body>
        </Value>
      </ValueSection>
    </CommunityValuesSection>
  )
}