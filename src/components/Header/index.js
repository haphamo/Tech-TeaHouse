import React from "react"
import { HeaderSection, H1, H2, P, HeaderContent, HeaderLink } from "./css"
import { object } from "prop-types"

function Header({ headerData }) {
  const {
    headerOneContent,
    headerTwoContent,
    paragraphContent,
    buttonContent,
    type,
  } = headerData
  return (
    <HeaderSection type={type}>
      <HeaderContent>
        <H1>{headerOneContent}</H1>
        {headerTwoContent && <H2>{headerTwoContent} </H2>}
        {paragraphContent && <P>{paragraphContent}</P>}
        {buttonContent && (
          <HeaderLink to="sponsor-us">{buttonContent}</HeaderLink>
        )}
      </HeaderContent>
    </HeaderSection>
  )
}

Header.propTypes = {
  headerData: object.isRequired,
}

export default Header
