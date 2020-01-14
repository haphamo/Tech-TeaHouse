import styled from 'styled-components';

const Foundersh1 = styled.header`
	position: center;
	font-color: black;
`;

const Foundersdiv = styled.div`
	@media (min-width: 651px) {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}

	@media (max-width: 650px) {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
`;

const Foundersimg = styled.img`
	height: 250px;
	width: 250px;
	border: 1px solid black;
	border-radius: 50%;
`;

const Foundersp = styled.p`text-align: center;`;

const Foundersa = styled.a`
	color: black;
	text-decoration: none;
`;

export { Foundersh1, Foundersdiv, Foundersimg, Foundersp, Foundersa };
