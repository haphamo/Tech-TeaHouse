import React from 'react';
import { Foundersh1, Foundersdiv, Foundersimg, Foundersp, Foundersa } from './styles.css.js';
import { FoundersProfile, FoundersTitle } from './data';

const Founders = () => {
	const foundersData = FoundersProfile.map((data) => {
		return (
			<div key={data.name}>
				<Foundersimg src={data.photo} />
				<Foundersp>
					<Foundersa href={data.profile} target="_blank">
						{data.name}
					</Foundersa>
				</Foundersp>
			</div>
		);
	});

	return (
		<div>
			<Foundersdiv>
				<Foundersh1>{FoundersTitle.headline}</Foundersh1>
			</Foundersdiv>
			<Foundersdiv>{foundersData}</Foundersdiv>
		</div>
	);
};

export default Founders;
