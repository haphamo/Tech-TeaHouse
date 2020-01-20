import React from "react"
import { HeaderSection, HeaderH3, P, HeaderContent, HeaderLink } from "./css"
import { object } from "prop-types"
import { H1 } from "../../theme/typography"
import { CTALink } from "../../theme/components"

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
        {headerTwoContent && (
          <HeaderH3 pageName={pageName}>{headerTwoContent} </HeaderH3>
        )}
        {paragraphContent && <P pageName={pageName}>{paragraphContent}</P>}
        {buttonContent && (
          <CTALink variant="primary" to="/sponsor-us">
            {buttonContent}
          </CTALink>
        )}
      </HeaderContent>
    </HeaderSection>
  )
}

Header.propTypes = {
  headerData: object.isRequired,
}

export default Header
