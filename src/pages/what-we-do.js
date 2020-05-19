import React from 'react';
import Layout from '../components/layout';
import CardLayout from '../components/CardLayout/CardLayout';
import CardImage from '../components/CardImage';
import { FollowUs } from '../components/CardImage/data';
import Calendar from '../components/Calendar';

export default function WhatWeDo() {
	return (
		<Layout pageName="what-we-do">
			<CardLayout pageName="what-we-do" />
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
			<Calendar />
		</Layout>
	);
}
