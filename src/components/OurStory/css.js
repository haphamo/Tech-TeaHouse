import styled from "styled-components"
import { H2 } from "../../theme/typography"

const StorySection = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
  background: #f5f5f5;
`

const Storyh1 = styled(H2)`
  margin: 0;
`

const Storydiv = styled.div`
  @media (min-width: 770px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`

const Storyp = styled.p`
font-family: 'Karla', sans-serif;
font-size: 16px;
font-weight: regular;
line-height: 30px;
color: #333333
text-align: center;
padding: 20px 50px 0px 50px`

export { StorySection, Storyh1, Storydiv, Storyp }
