import React from "react"
import { StoryInfo, StoryTitle } from "./data"
import { StorySection, Storyh1, Storydiv, Storyp } from "./css.js"

const OurStory = () => {
  const { desc, point1, point2, point3 } = StoryInfo
  const { headline } = StoryTitle
  return (
    <StorySection>
      <Storydiv>
        <Storyh1>{headline}</Storyh1>
      </Storydiv>
      <Storyp>{desc}</Storyp>
      <Storyp>{point1}</Storyp>
      <Storyp>{point2}</Storyp>
      <Storyp>{point3}</Storyp>
    </StorySection>
  )
}

export default OurStory
