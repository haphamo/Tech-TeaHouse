import React from 'react';
import Layout from '../components/layout';
import OurStory from '../components/OurStory';
import Team from '../components/Team';
import CardLayout from '../components/CardLayout/CardLayout';

export default function WhoWeAre() {
	return (
		<Layout pageName="who-we-are">
			<CardLayout pageName="who-we-are" />
			<OurStory />
			<Team />
		</Layout>
	);
}
