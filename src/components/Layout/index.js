import React from "react"
import Header from "../Header"
import data from "../Header/data"
import { string, object } from "prop-types"
import Nav from "./../Nav"
import Footer from "./../footer"

function Layout({ children, pageName }) {
  const headerData = data.find(data => data.pageName === pageName)

  return (
    <>
      <header>
        {/* Put Navigation component here */}
        <Nav />
        <Header headerData={headerData} />
      </header>
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: object.isRequired,
  pageName: string.isRequired,
}

export default Layout