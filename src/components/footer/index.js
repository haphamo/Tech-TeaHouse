import React from "react"
import styled from "styled-components"

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #4b4e6d;
`

const StyledFooterLeft = styled.div`
  display: flex;
`

const StyledFooterMiddle = styled.div`
  display: flex;
`

const StyledFooterRight = styled.div`
  display: flex;
`

const index = () => {
  return (
    <StyledFooter>
      <StyledFooterLeft>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </StyledFooterLeft>
      <StyledFooterMiddle>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </StyledFooterMiddle>
      <StyledFooterRight>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </StyledFooterRight>
    </StyledFooter>
  )
}

export default index
