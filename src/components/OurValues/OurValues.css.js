// Styling for the "Our Values" section on the landing page
// If you want to change  text, go to the data.js file

import styled from 'styled-components';

const CommunityValuesSection = styled.div`
	background: #f5f5f5;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 60px;
`;

const Headline1 = styled.header`
	font-family: 'Rubik', sans-serif;
	color: #255957;
	font-size: 56px;
	font-weight: bold;
`;
const Headline2 = styled.header`
font-family: 'Rubik', sans-serif;
font-weight: medium;
font-size: 28px;
color: #333333
padding-top: 10px;
`;
const ValueSection = styled.div`
	display: flex;
	flex-direction: row;
	padding-top: 60px;

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
line-height: 30px;
color: #333333
text-align: center;
padding: 19px 20px 86px 20px;`;

const IconImg = styled.img`height: 116px;`;

export { CommunityValuesSection, Headline1, Headline2, ValueSection, Value, Body, IconImg };
