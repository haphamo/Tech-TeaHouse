import React from 'react';
import Layout from '../components/layout';
import OurValues from '../components/OurValues/OurValues';
import Causes from '../components/Causes';

// Refer to src/Header/data for the types with corresponding object to pass to layout.
const IndexPage = () => (
	<Layout pageName="landing-page">
		<OurValues />
		<Causes />
	</Layout>
);

export default IndexPage;
