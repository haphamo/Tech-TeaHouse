import React from 'react';
import Layout from '../components/layout';
import CardLayout from '../components/CardLayout/CardLayout';
import CardImage from '../components/CardImage';
import { Causes, FollowUs } from '../components/CardImage/data';
import ImageGallery from '../components/ImageGallery';

// Refer to src/Header/data for the types with corresponding object to pass to layout.
const IndexPage = () => {
	return (
		<Layout pageName="landing-page">
			<CardImage
				photo={FollowUs.photo}
				alt={FollowUs.alt}
				headline={FollowUs.headline}
				headlineTwo={FollowUs.headlineTwo}
				pointOne={FollowUs.pointOne}
				pointTwo={FollowUs.pointTwo}
				buttonText={FollowUs.buttonText}
				buttonLink={FollowUs.buttonLink}
			/>
			<CardLayout pageName="landing-page" />
			<CardImage
				photo={Causes.photo}
				alt={Causes.alt}
				headline={Causes.headline}
				headlineTwo={Causes.headlineTwo}
				pointOne={Causes.pointOne}
				pointTwo={Causes.pointTwo}
				pointThree={Causes.pointThree}
			/>
			<ImageGallery />
		</Layout>
	);
};

export default IndexPage;
