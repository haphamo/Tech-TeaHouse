import React from 'react';
import styled from 'styled-components';



const Headline1 = styled.header`
font-family: 'Rubik', sans-serif;
color: #255957;
font-size: 56px;
font-weight: bold;
`

const CommunityValuesSection = styled.section`;
background: #F5F5F5;`


export default function OurValues() {
  return (
    
    <CommunityValuesSection>
      <Headline1>Our Values</Headline1>
      {/* <h4>An Inclusive Toronto-based Tech Community</h4> */}

    </CommunityValuesSection>
    
  )
}