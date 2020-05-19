import React from 'react';
import Layout from '../components/layout';
import CardImage from '../components/CardImage';

import { Slack } from '../components/CardImage/data';

export default function JoinUs() {
	return (
		<Layout pageName="join-us">
			<CardImage
				photo={Slack.photo}
				alt={Slack.alt}
				headline={Slack.headline}
				headlineTwo={Slack.headlineTwo}
				pointOne={Slack.pointOne}
				pointTwo={Slack.pointTwo}
				pointThree={Slack.pointThree}
				buttonText={Slack.buttonText}
				buttonLink={Slack.buttonLink}
			/>
		</Layout>
	);
}
