import React from 'react';
import Layout from '../components/layout';
import CardLayout from '../components/CardLayout/CardLayout';
import Collaborations from '../components/Collaborations';

export default function SponsorUs() {
	return (
		<Layout pageName="sponsor-us">
			<CardLayout pageName="sponsor-us" />
			<Collaborations />
		</Layout>
	);
}
