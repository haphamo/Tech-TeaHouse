import React from 'react';
import { SocialIconItem, SocialLink, StyledSVG } from './css';

function SocialIcon({ linkTo, ariaLabel, icon }) {
	return (
		<SocialIconItem>
			<SocialLink href={linkTo} aria-label={ariaLabel} target="_blank">
				<StyledSVG src={icon} />
			</SocialLink>
		</SocialIconItem>
	);
}

export default SocialIcon;
