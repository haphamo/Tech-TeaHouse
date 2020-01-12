
import React from "react"
import { Link } from "gatsby"
import NavBar from "../components/Nav/index"
import Footer from "../components/footer/index"
import Layout from "../components/layout"
import OurValues from "../components/OurValues/OurValues"


// Refer to src/Header/data for the types with corresponding object to pass to layout.
const IndexPage = () => (


  <Layout type="landing-page">
    <OurValues />
  </Layout>
)


export default IndexPage;
