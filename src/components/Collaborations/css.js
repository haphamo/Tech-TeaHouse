import styled from 'styled-components';
import { H2 } from '../../theme/typography';

const CollabTitle = styled(H2)`
  margin: 0;
`;

const Collabdiv = styled.div`
	@media (min-width: 770px) {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		padding: 60px 0 60px 0;
	}

	@media (max-width: 769px) {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		padding: 60px 0 60px 0;
	}
`;

const Collabimg = styled.img`
	height: 100%;
	width: 275px;
`;

export { CollabTitle, Collabdiv, Collabimg };
