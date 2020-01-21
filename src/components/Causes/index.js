import React from 'react';
import { CausesSection, CausesImg, CausesTextSection, CausesH2, CausesH3, CausesP } from './css';
import { Causes } from './data';

const CausesWeChampion = () => {
	const { headline, headline2, point1, point2, point3 } = Causes;

	return (
		<CausesSection>
			<CausesImg alt="Tech Teahouse members at a women in tech workshop" />
			<CausesTextSection>
				<CausesH2>{headline}</CausesH2>
				<CausesH3>{headline2}</CausesH3>
				<CausesP>{point1}</CausesP>
				<CausesP>{point2}</CausesP>
				<CausesP>{point3}</CausesP>
			</CausesTextSection>
		</CausesSection>
	);
};

export default CausesWeChampion;
