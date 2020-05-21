import React from 'react';
import { CollabTitle, Collabdiv, Collabimg } from './css.js';
import { CollabProfileOne, CollabProfileTwo, CollabHeadline } from './data';

const Collab = () => {
	const CollabRowOne = CollabProfileOne.map((data) => {
		return (
			<div key={data.name}>
				<Collabimg src={data.photo} />
			</div>
		);
	});

	const CollabRowTwo = CollabProfileTwo.map((data) => {
		return (
			<div key={data.name}>
				<Collabimg src={data.photo} />
			</div>
		);
	});

	return (
		<section>
			<Collabdiv>
				<CollabTitle>{CollabHeadline.headline}</CollabTitle>
			</Collabdiv>
			<Collabdiv>{CollabRowOne}</Collabdiv>
			<Collabdiv>{CollabRowTwo}</Collabdiv>
		</section>
	);
};

export default Collab;
