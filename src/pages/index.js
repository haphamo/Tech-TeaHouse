import React from 'react';
import Layout from '../components/layout';
import OurValues from '../components/OurValues/OurValues';
import Founders from '../components/Founders';
import Causes from '../components/Causes';
import OurStory from '../components/OurStory';
import ImageGallery from '../components/ImageGallery';
// Refer to src/Header/data for the types with corresponding object to pass to layout.
const IndexPage = () => (
	<Layout pageName="landing-page">
		<OurValues />
		<Founders />
		<Causes />
		<OurStory />
		<ImageGallery />
	</Layout>
);

export default IndexPage;
