import React from 'react';
import { StoryInfo, StoryTitle } from './data';
import { StorySection, Storyh1, Storydiv, Storyp } from './css.js';

const OurStory = () => {
	return (
		<StorySection>
			<Storydiv>
				<Storyh1>{StoryTitle.headline}</Storyh1>
			</Storydiv>
			<Storyp>{StoryInfo.desc}</Storyp>
			<Storyp>{StoryInfo.point1}</Storyp>
			<Storyp>{StoryInfo.point2}</Storyp>
			<Storyp>{StoryInfo.point3}</Storyp>
		</StorySection>
	);
};

export default OurStory;
