import React from 'react';
import { CausesSection, CausesPhoto, CausesTextSection, CausesH1, CausesH2, CausesP } from './css';
import { Causes } from './data';

const CausesWeChampion = () => {
	return (
		<CausesSection>
			<CausesPhoto alt="Tech Teahouse members at a women in tech workshop" />
			<CausesTextSection>
				<CausesH1>{Causes.headline}</CausesH1>
				<CausesH2>{Causes.headline2}</CausesH2>
				<CausesP>{Causes.point1}</CausesP>
				<CausesP>{Causes.point2}</CausesP>
				<CausesP>{Causes.point3}</CausesP>
			</CausesTextSection>
		</CausesSection>
	);
};

export default CausesWeChampion;
