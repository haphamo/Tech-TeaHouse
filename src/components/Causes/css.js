import styled from 'styled-components';
import EventPhoto from '../../images/womenintech-6.jpg';

const CausesSection = styled.section`
	@media (min-width: 850px) {
		background-color: #ffffff;
		position: relative;
		padding: 5rem 1.25rem 8rem 1.25rem;
	}

	@media (max-width: 849px) {
		background-image: url(${EventPhoto});
		background-position: center center;
		background-size: cover;
	}
`;

const CausesImg = styled.section`
	@media (min-width: 850px) {
		background-image: url(${EventPhoto});
		background-size: cover;
		height: 500px;
		width: 800px;
		position: absolute;
	}
`;

const CausesTextSection = styled.section`
	@media (min-width: 1025px) {
		background-color: #ffffff;
		position: relative;
		height: 450px;
		width: 700px;
		margin-left: 32rem;
		padding: 3rem;
		transform: translateY(1.5rem);
	}

	@media (min-width: 850px) and (max-width: 1024px) {
		background-color: #ffffff;
		position: relative;
		height: 450px;
		width: 700px;
		margin-left: 13rem;
		padding: 3rem;
		transform: translateY(1.5rem);
	}

	@media (max-width: 849px) {
		background: rgba(255, 255, 255, 0.75);
		padding: 3rem;
		text-align: center;
	}
`;

const CausesH2 = styled.h2`
	font-family: 'Rubik', sans-serif;
	color: #255957;
	font-size: 3.5rem;
	font-weight: bold;
`;

const CausesH3 = styled.h3`
	font-family: 'Rubik', sans-serif;
	font-weight: medium;
	font-size: 1.75rem;
	color: #333333;
	padding-top: 1rem;
`;

const CausesP = styled.p`
	font-family: 'Karla', sans-serif;
	font-size: 1rem;
	font-weight: regular;
	line-height: 2rem;
	color: #333333;
`;

export { CausesSection, CausesImg, CausesTextSection, CausesH2, CausesH3, CausesP };
