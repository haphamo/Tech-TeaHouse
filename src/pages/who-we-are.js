import React from "react"
import Layout from "../components/layout"
import OurValues from "../components/OurValues/OurValues";
import OurStory from "../components/OurStory"

export default function WhoWeAre() {
  return (
  <Layout pageName="who-we-are">
    <OurStory />
    <OurValues pageName="who-we-are" />
  </Layout>

  )
}