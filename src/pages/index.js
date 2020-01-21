import React from 'react';
import Layout from '../components/layout';
import OurValues from '../components/OurValues/OurValues';
import CardImage from '../components/CardImage';
import { Causes, Event } from '../components/CardImage/data';

// Refer to src/Header/data for the types with corresponding object to pass to layout.
const IndexPage = () => {
	return (
		<Layout pageName="landing-page">
			<CardImage
				photo={Event.photo}
				alt={Event.alt}
				headline={Event.headline}
				headlineTwo={Event.headlineTwo}
				pointOne={Event.pointOne}
				pointTwo={Event.pointTwo}
				pointThree={Event.pointThree}
			/>
			<OurValues />
			<CardImage
				photo={Causes.photo}
				alt={Causes.alt}
				headline={Causes.headline}
				headlineTwo={Causes.headlineTwo}
				pointOne={Causes.pointOne}
				pointTwo={Causes.pointTwo}
				pointThree={Causes.pointThree}
			/>
		</Layout>
	);
};

export default IndexPage;
