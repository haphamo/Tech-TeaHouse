import React from "react"
import Layout from "../components/layout"
import OurValues from "../components/OurValues/OurValues"
import Founders from "../components/Founders"
import OurStory from "../components/OurStory"
import CollageGrid from "../components/CollageGrid"
// Refer to src/Header/data for the types with corresponding object to pass to layout.
const IndexPage = () => (
  <Layout pageName="landing-page">
    <OurValues />
    <Founders />
    <OurStory />
    <CollageGrid />
  </Layout>
)

export default IndexPage
