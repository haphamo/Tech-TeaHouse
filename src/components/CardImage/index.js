import React from 'react';
import { CardSection, CardPhoto, CardTextSection, CardH2, CardH3, CardP } from './css';

const CardImage = (props) => {
	return (
		<CardSection>
			<CardPhoto src={props.photo} alt={props.alt} />
			<CardTextSection>
				<CardH2>{props.headline}</CardH2>
				<CardH3>{props.headlineTwo}</CardH3>
				<CardP>{props.pointOne}</CardP>
				<CardP>{props.pointTwo}</CardP>
				<CardP>{props.pointThree}</CardP>
			</CardTextSection>
		</CardSection>
	);
};

export default CardImage;
