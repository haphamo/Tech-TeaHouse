import styled from 'styled-components';
import { H2 } from '../../theme/typography';

const TeamTitle = styled(H2)`
  margin: 0;
`;

const TeamDiv = styled.div`
	@media (min-width: 770px) {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		padding-top: 60px;
		flex-wrap: wrap;
	}

	@media (max-width: 769px) {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		padding-top: 60px;
	}
`;

const TeamPhoto = styled.img`
	height: 250px;
	width: 250px;
	border: 1px solid black;
	border-radius: 50%;
	object-fit: cover;
`;

const TeamName = styled.p`
text-align: center;
font-family: 'Rubik', sans-serif;
font-weight: medium;
color: #333333
padding-top: 5px;
padding-bottom: 60px;`;

const TeamLinkedIn = styled.a`
	color: black;
	text-decoration: none;
`;

export { TeamTitle, TeamDiv, TeamPhoto, TeamName, TeamLinkedIn };
