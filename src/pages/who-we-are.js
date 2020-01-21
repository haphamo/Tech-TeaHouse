import React from 'react';
import Layout from '../components/layout';
import OurStory from '../components/OurStory';
import Founders from '../components/Founders';
import OurValues from '../components/OurValues/OurValues'

export default function WhoWeAre() {
	return (
		<Layout pageName="who-we-are">
			<OurStory />
      <OurValues pageName="who-we-are" />
			<Founders />
		</Layout>
	);
}
