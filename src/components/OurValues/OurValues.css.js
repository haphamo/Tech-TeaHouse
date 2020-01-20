// Styling for the "Our Values" section on the landing page
// If you want to change  text, go to the data.js file

import styled from 'styled-components';

const Section = styled.div`
	background: #f5f5f5;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 3.75rem;
`;

const Headline1 = styled.header`
	font-family: 'Rubik', sans-serif;
	color: #255957;
	font-size: 3.5rem;
	font-weight: bold;
`;
const Headline2 = styled.header`
  font-family: 'Rubik', sans-serif;
  font-weight: medium;
  font-size: 1.75rem;
  color: #333333
  padding-top: 1rem;
`;
const ValueSection = styled.div`
	display: flex;
	flex-direction: row;
	padding-top: 5rem;

	@media screen and (max-width: 769px) {
		flex-direction: column;
	}
`;

const Value = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	letter-spacing: -0.015em;
`;
const Body = styled.div`
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  font-weight: regular;
  line-height: 2rem;
  color: #333333
  text-align: center;
  padding: 1rem 2rem 5rem 2rem;`;

const IconImg = styled.img`
	height: 8rem;`;
	

export { Section, Headline1, Headline2, ValueSection, Value, Body, IconImg };
