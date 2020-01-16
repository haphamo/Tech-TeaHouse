import React from "react"
import { HeaderSection, H1, H2, P, HeaderContent, HeaderLink } from "./css"
import { object } from "prop-types"

function Header({ headerData }) {
  const {
    headerOneContent,
    headerTwoContent,
    paragraphContent,
    buttonContent,
    pageName,
  } = headerData
  return (
    <HeaderSection pageName={pageName}>
      <HeaderContent pageName={pageName}>
        <H1 pageName={pageName}>{headerOneContent}</H1>
        {headerTwoContent && <H2 pageName={pageName}>{headerTwoContent} </H2>}
        {paragraphContent && <P pageName={pageName}>{paragraphContent}</P>}
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
