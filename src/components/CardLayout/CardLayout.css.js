import styled from "styled-components"
import { colors } from "../../theme/constants"

const { grey } = colors

const Section = styled.div`
  background: ${grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.75rem 0 3.75rem 0;

`

const Headline1 = styled.header`
	font-family: 'Rubik', sans-serif;
	color: #255957;
	font-size: 3.5rem;
	font-weight: bold;
	text-align: center;
`;
const Headline2 = styled.header`
  font-family: 'Rubik', sans-serif;
  font-weight: medium;
  font-size: 1.75rem;
  color: #333333
	padding: 1rem 0 3rem 0;
	text-align: center;
`;

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
`;
const Body = styled.div`
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  font-weight: regular;
  line-height: 2rem;
  color: #333333
  text-align: center;
  padding: 1rem 2rem 5rem 2rem;`

const IconImg = styled.img`
	height: 8rem;`;
  

export { Section, Headline1, Headline2, ValueSection, Value, Body, IconImg }
