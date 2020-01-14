import React from 'react';
//importing images
import Jen from '../../images/headshot-jen.jpg';
import Therese from '../../images/headshot-therese.jpg';
import Ruiting from '../../images/headshot-ruiting.jpg';

import { Foundersh1, Foundersdiv, Foundersimg, Foundersp, Foundersa } from './styles.css.js';

const FoundersIndexPage = () => (
	<div>
		<Foundersdiv>
			<Foundersh1>
				<h1 id="Founders-h1">The Founders</h1>
			</Foundersh1>
		</Foundersdiv>

		<Foundersdiv>
			<div>
				<Foundersimg src={Jen} alt="Jen" />

				<Foundersp>
					<Foundersa target="_blank" href="https://www.linkedin.com/in/jenfbeltran/">
						Jen Beltran
					</Foundersa>
				</Foundersp>
			</div>
			<div>
				<Foundersimg src={Therese} alt="Therese" />

				<Foundersp>
					<Foundersa target="_blank" href="https://www.linkedin.com/in/thereseowusu/">
						Therese Owusu
					</Foundersa>
				</Foundersp>
			</div>
			<div>
				<Foundersimg src={Ruiting} alt="Ruiting" />

				<Foundersp>
					<Foundersa target="_blank" href="https://www.linkedin.com/in/ruitingli/">
						Ruiting Li
					</Foundersa>
				</Foundersp>
			</div>
		</Foundersdiv>
	</div>
);

export default FoundersIndexPage;
