import styled from 'styled-components';

const Foundersh1 = styled.header`
	position: center;
	font-family: 'Rubik', sans-serif;
	color: #255957;
	font-size: 56px;
	font-weight: bold;
`;

const Foundersdiv = styled.div`
	@media (min-width: 770px) {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		padding-top: 60px;
	}

	@media (max-width: 769px) {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		padding-top: 60px;
	}
`;

const Foundersimg = styled.img`
	height: 250px;
	width: 250px;
	border: 1px solid black;
	border-radius: 50%;
`;

const Foundersp = styled.p`
text-align: center;
font-family: 'Rubik', sans-serif;
font-weight: medium;
color: #333333
padding-top: 5px;
padding-bottom: 60px;`;

const Foundersa = styled.a`
	color: black;
	text-decoration: none;
`;

export { Foundersh1, Foundersdiv, Foundersimg, Foundersp, Foundersa };
