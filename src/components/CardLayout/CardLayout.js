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
  SocialLink,
} from "./CardLayout.css"

import { Storyp } from "../OurStory/css"
import { data } from "./data"

export default function OurValues(props) {
  // Took a similar approach to how Header component is being rendered buy using the pageName to match the data
  const matchPageName = data => data.pageName === props.pageName
  const cardData = data.find(matchPageName)

  const { pageName, icons, headerOne, headerTwo, body } = cardData

  // if hasIcons is true then this function maps through icons to return the JSX for the component
  const handleIconData = function() {
    let allIcons = icons.map(value => {
      const { link, headline, desc, headerTwo, src, initiatives, body } = value
      return (
        <Value key={uuid()}>
          {src && (
            <SocialLink href={link} target="_blank">
              <IconImg
                className={src}
                src={src}
                alt={src}
                pageName={pageName}
              />
            </SocialLink>
          )}
          {headline && <Headline2>{headline}</Headline2>}
          {desc && <Body>{desc}</Body>}
          {headerTwo && (
            <Headline2 pageName={pageName}>
              <SocialLink href={link} target="_blank">
                {headerTwo}
              </SocialLink>
            </Headline2>
          )}
          {initiatives && <h4>{initiatives}</h4>}
          {body && <Body>{body}</Body>}
        </Value>
      )
    })
    return allIcons
  }

  return (
    <Section>
      {headerOne && <Headline1>{headerOne}</Headline1>}
      {headerTwo && <Headline2>{headerTwo}</Headline2>}
      {body && <Storyp>{body}</Storyp>}
      {icons && <ValueSection>{handleIconData()}</ValueSection>}
    </Section>
  )
}
