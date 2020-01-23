import React from 'react';
import Layout from '../components/layout';
import OurStory from '../components/OurStory';
import Founders from '../components/Founders';
import CardLayout from '../components/CardLayout/CardLayout'

export default function WhoWeAre() {
	return (
		<Layout pageName="who-we-are">
			<OurStory />
      <CardLayout pageName="who-we-are" />
			<Founders />
		</Layout>
	);
}
