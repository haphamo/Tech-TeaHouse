import styled from "styled-components"
import { colors } from "../../theme/constants"
import { H2, H3 } from "../../theme/typography"
const { grey, lightBlack, primaryGreen } = colors

const Section = styled.section`
  background: ${grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.75rem 0 3.75rem 0;
`

const Headline1 = styled(H2)`
  margin-bottom: 1.5rem;
`
const Headline2 = styled(H3)`
  text-align: center;
  margin: 0;
  color: ${({ pageName }) =>
    pageName === "get-in-touch" ? primaryGreen : lightBlack};
`

const ValueSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  width: 100%;

  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
`

const Value = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 30%;
  padding-bottom: 1rem;
`
const Body = styled.div`
  line-height: 2rem;
  text-align: center;
  padding: 1rem 2rem 5rem 2rem;
`

const IconImg = styled.img`
  height: 8rem;
  margin: ${({ pageName }) =>
    pageName === "get-in-touch" ? "0" : "3.5rem 0 2rem 0"};
`

export { Section, Headline1, Headline2, ValueSection, Value, Body, IconImg }
