import React from "react"
import uuid from "uuid"
import {
  Section,
  Headline1,
  Headline2,
  ValueSection,
  Value,
  Body,
  IconImg,
} from "./CardLayout.css"

import { Storyp } from "../OurStory/css"
import { data } from "./data"

export default function OurValues(props) {
  // Took a similar approach to how Header component is being rendered buy using the pageName to match the data
  const matchPageName = data => data.pageName === props.pageName
  const cardData = data.find(matchPageName)

  const { pageName, icons } = cardData

  // if hasIcons is true then this function maps through icons to return the JSX for the component
  const handleIconData = function() {
    let allIcons = icons.map(value => {
      return (
        <Value key={uuid()}>
          {value.src && (
            <IconImg
              className={value.src}
              src={value.src}
              alt={value.src}
              pageName={pageName}
            />
          )}
          {value.headline && <Headline2>{value.headline}</Headline2>}
          {value.desc && <Body>{value.desc}</Body>}
          {value.headerTwo && (
            <Headline2 pageName={pageName}>{value.headerTwo}</Headline2>
          )}
          {value.initiatives && <h4>{value.initiatives}</h4>}
          {value.body && <Body>{value.body}</Body>}
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
      {cardData.icons && <ValueSection>{handleIconData()}</ValueSection>}
    </Section>
  )
}