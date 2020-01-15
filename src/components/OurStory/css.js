import styled from 'styled-components';

const StorySection = styled.div`
	background: #f5f5f5;
	padding-top: 60px;
	padding-bottom: 60px;
`;

const Storyh1 = styled.header`
	position: center;
	font-family: 'Rubik', sans-serif;
	color: #255957;
	font-size: 56px;
	font-weight: bold;
`;

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
`;

const Storyp = styled.p`
font-family: 'Karla', sans-serif;
font-size: 16px;
font-weight: regular;
line-height: 30px;
color: #333333
text-align: center;
padding: 20px 50px 0px 50px`;

export { StorySection, Storyh1, Storydiv, Storyp };
