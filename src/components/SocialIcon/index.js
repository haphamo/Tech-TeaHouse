import React from "react"
import { SocialIconItem, SocialLink, StyledSVG } from "./css"
function SocialIcon({ linkTo, ariaLabel, icon }) {
  return (
    <SocialIconItem>
      <SocialLink href={linkTo} aria-label={ariaLabel}>
        <StyledSVG src={icon} />
      </SocialLink>
    </SocialIconItem>
  )
}

export default SocialIcon
