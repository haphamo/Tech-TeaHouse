import React from "react"
import { string } from "prop-types"
import { SocialIconItem, SocialLink, StyledSVG } from "./css"

function SocialIcon({ linkTo, ariaLabel, icon }) {
  return (
    <SocialIconItem>
      <SocialLink href={linkTo} aria-label={ariaLabel} target="_blank">
        <StyledSVG src={icon} />
      </SocialLink>
    </SocialIconItem>
  )
}

SocialIcon.propTypes = {
  linkTo: string.isRequired,
  ariaLabel: string.isRequired,
  icon: string.isRequired,
}

export default SocialIcon
