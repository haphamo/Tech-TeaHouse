import React from 'react';
import Layout from '../components/layout';
import ImageGallery from '../components/ImageGallery';

import OurValues from "../components/OurValues/OurValues"


export default function WhatWeDo() {
	return (
		<Layout pageName="what-we-do">
        <OurValues pageName="what-we-do"/>
			<ImageGallery />
		</Layout>
	);
}
