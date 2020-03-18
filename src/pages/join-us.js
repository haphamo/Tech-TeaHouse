import React from "react"
import Layout from "../components/layout"
import CardLayout from "../components/CardLayout/CardLayout";
import CardImage from '../components/CardImage';
import { Event } from '../components/CardImage/data';
export default function JoinUs() {
  return (
  <Layout pageName='join-us'>

    <CardImage
				photo={Event.photo}
				alt={Event.alt}
				headline={Event.headline}
				headlineTwo={Event.headlineTwo}
				pointOne={Event.pointOne}
				pointTwo={Event.pointTwo}
        pointThree={Event.pointThree}
        icon={Event.icon}
			/>
      <CardLayout pageName='join-us'/>
  </Layout>

  )
}