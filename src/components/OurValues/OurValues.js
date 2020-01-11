import React from 'react';
import styled from 'styled-components';
import inclusivityImg from '../../../src/images/22-web_essential-512.png'
import communityImg from '../../../src/images/iconfinder_05-web_essential_3401825.svg'
import developmentImg from '../../../src/images/iconfinder_27-web_essential_3401845.svg'



const CommunityValuesSection = styled.div`;
background: #F5F5F5;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 60px;`

const Headline1 = styled.header`
font-family: 'Rubik', sans-serif;
color: #255957;
font-size: 56px;
font-weight: bold;
`
const Headline2 = styled.header`
font-family: 'Rubik', sans-serif;
font-weight: medium;
font-size: 28px;
color: #333333
padding-top: 20px;

`
const ValueSection = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
padding-top: 60px;
`

const Value = styled.div`
display: flex;
flex-direction: column;
align-items: center;
letter-spacing: -0.015em;
`
const Body = styled.div`
font-family: 'Karla', sans-serif;
font-size: 16px;
font-weight: regular;
line-height: 30px;
color: #333333
text-align: center;
padding: 19px 0px 86px 0px;`

export default function OurValues() {
  return (
    
    <CommunityValuesSection>
      <Headline1>Our Values</Headline1>
      <Headline2>An Inclusive Toronto-based Tech Community</Headline2>
      <ValueSection>
        <Value>
          <img style={{height: "116px"}}src={inclusivityImg} alt="inclusivity"/>
          <Headline2>Inclusivity</Headline2>
          <Body>We are an inclusive tech community that cares for our member's professional development</Body>
        </Value>
        <Value>
          <img style={{height: "116px"}}src={communityImg} alt="inclusivity"/>
          <Headline2>Community</Headline2>
          <Body>We connect members to upcoming tech events in the city.</Body>
        </Value>
        <Value>
          <img style={{height: "116px"}}src={developmentImg} alt="inclusivity"/>
          <Headline2>Development</Headline2>
          <Body>We organize workshops that empower members for their professional development.</Body>
        </Value>
      </ValueSection>
    </CommunityValuesSection>
    
  )
}