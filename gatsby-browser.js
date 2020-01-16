/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// require("normalize.css/normalize.css")
require('./src/globalStyles.css');
const React = require('react');
const { Helmet, HelmetProvider } = require('react-helmet-async');

let helmetContext = {};

exports.wrapRootElement = ({ element }) => {
	return (
		<HelmetProvider context={helmetContext}>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Tech Teahouse</title>
				<meta
					name="description"
					content="A tech group that promotes accessibility and diversity in technology"
				/>
				<link href="https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css?family=Karla&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css?family=PT+Serif&display=swap" rel="stylesheet" />
			</Helmet>
			{element}
		</HelmetProvider>
	);
};
