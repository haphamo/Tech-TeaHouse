import React from 'react';
import Layout from '../components/layout';
import OurStory from '../components/OurStory';
import Founders from '../components/Founders';

export default function WhoWeAre() {
	return (
		<Layout pageName="who-we-are">
			<OurStory />
			<Founders />
		</Layout>
	);
}
