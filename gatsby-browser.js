/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const { Helmet, HelmetProvider } = require("react-helmet-async")

let helmetContext = {}

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
      </Helmet>
      {element}
    </HelmetProvider>
  )
}
