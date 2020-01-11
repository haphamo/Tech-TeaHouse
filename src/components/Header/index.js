import React from "react"
import { HeaderSection, H1, H2, P, Button, HeaderContent } from "./css"
import { object } from "prop-types"

function Header({ headerData }) {
  const {
    headerOneContent,
    headerTwoContent,
    paragraphContent,
    buttonContent,
  } = headerData
  return (
    <HeaderSection>
      <HeaderContent>
        <H1>{headerOneContent}</H1>
        {headerTwoContent && <H2>{headerTwoContent} </H2>}
        {paragraphContent && <P>{paragraphContent}</P>}
        {buttonContent && <Button>{buttonContent}</Button>}
      </HeaderContent>
    </HeaderSection>
  )
}

Header.propTypes = {
  headerData: object.isRequired,
}

export default Header
