import React from "react"
import Layout from "../components/layout"
import ImageGallery from "../components/ImageGallery"
import CardLayout from "../components/CardLayout/CardLayout"

export default function WhatWeDo() {
  return (
    <Layout pageName="what-we-do">
      <CardLayout pageName="what-we-do" />
      <ImageGallery />
    </Layout>
  )
}
