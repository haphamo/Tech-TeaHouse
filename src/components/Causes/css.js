import styled from 'styled-components';
import EventPhoto from '../../images/womenintech-6.jpg';

const CausesSection = styled.section`
	@media (min-width: 850px) {
		background-color: #ffffff;
	}

	@media (max-width: 849px) {
		background-image: url(${EventPhoto});
		background-position: center center;
		background-size: cover;
	}
`;

const CausesPhoto = styled.section`
	@media (min-width: 850px) {
		background-image: url(${EventPhoto});
		background-size: cover;
		position: relative;
		height: 500px;
		width: 800px;
		left: 5rem;
		top: 6rem;
	}
`;

const CausesTextSection = styled.section`
	@media (min-width: 1025px) {
		background-color: #ffffff;
		position: relative;
		height: 450px;
		width: 700px;
		margin-left: 32rem;
		top: -11rem;
		margin-top: -12.5rem;
		margin-bottom: -2.5rem;
		padding: 3rem;
	}

	@media (min-width: 850px) and (max-width: 1024px) {
		background-color: #ffffff;
		position: relative;
		height: 450px;
		width: 700px;
		margin-left: auto;
		top: -11rem;
		margin-top: -12.5rem;
		margin-bottom: -2.5rem;
		padding: 3rem;
	}

	@media (max-width: 849px) {
		background: rgba(255, 255, 255, 0.75);
		padding: 3rem;
		text-align: center;
	}
`;

const CausesH1 = styled.header`
	position: center;
	font-family: 'Rubik', sans-serif;
	color: #255957;
	font-size: 56px;
	font-weight: bold;
`;

const CausesH2 = styled.header`
font-family: 'Rubik', sans-serif;
font-weight: medium;
font-size: 28px;
color: #333333
padding-top: 1rem;
`;

const CausesP = styled.p`
	font-family: 'Karla', sans-serif;
	font-size: 16px;
	font-weight: regular;
	line-height: 2rem;
	color: #333333;
`;

export { CausesSection, CausesPhoto, CausesTextSection, CausesH1, CausesH2, CausesP };
