import React from 'react';
import { TeamTitle, TeamDiv, TeamPhoto, TeamName, TeamLinkedIn } from './styles.css.js';
import { TeamHeadline, FoundersProfile, TeamProfile } from './data';

const Team = () => {
	const FoundersData = FoundersProfile.map((data) => {
		return (
			<div key={data.name}>
				<TeamPhoto src={data.photo} />
				<TeamName>
					<TeamLinkedIn href={data.profile} alt={data.name} target="_blank">
						{data.name}
					</TeamLinkedIn>
				</TeamName>
			</div>
		);
	});

	const TeamData = TeamProfile.map((data) => {
		return (
			<div key={data.name}>
				<TeamPhoto src={data.photo} />
				<TeamName>
					<TeamLinkedIn href={data.profile} alt={data.name} target="_blank">
						{data.name}
					</TeamLinkedIn>
				</TeamName>
			</div>
		);
	});

	return (
		<section>
			<TeamDiv>
				<TeamTitle>{TeamHeadline.headline}</TeamTitle>
			</TeamDiv>
			<TeamDiv>{FoundersData}</TeamDiv>
			<TeamDiv>{TeamData}</TeamDiv>
		</section>
	);
};

export default Team;
