import React from 'react';
//importing images
import Jen from '../../images/headshot-jen.jpg';
import Therese from '../../images/headshot-therese.jpg';
import Ruiting from '../../images/headshot-ruiting.jpg';
//import CSS
import './styles.css';

const FoundersIndexPage = () => (
	<div>
		<div class="Founders-div">
			<h1 id="Founders-h1">The Founders</h1>
		</div>
		<div class="Founders-div">
			<div>
				<img class="Founders-img" src={Jen} alt="Jen" />
				<a href="https://www.linkedin.com/in/jenfbeltran/">
					<p class="Founders-p">Jen Beltran</p>
				</a>
			</div>
			<div>
				<img class="Founders-img" src={Therese} alt="Therese" />
				<a href="https://www.linkedin.com/in/thereseowusu/">
					<p class="Founders-p">Therese Owusu</p>
				</a>
			</div>
			<div>
				<img class="Founders-img" src={Ruiting} alt="Ruiting" />
				<a href="https://www.linkedin.com/in/ruitingli/">
					<p class="Founders-p">Ruiting Li</p>
				</a>
			</div>
		</div>
	</div>
);

export default FoundersIndexPage;
