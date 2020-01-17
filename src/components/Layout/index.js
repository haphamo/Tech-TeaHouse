import React from "react"
import Header from "../Header"
import data from "../Header/data"
import { string, object } from "prop-types"
import Nav from "./../Nav"
import Footer from "./../footer"

function Layout({ children, pageName }) {
  const matchPageName = data => data.pageName === pageName
  const headerData = data.find(matchPageName)

  return (
    <>
      <header>
        {/* Put Navigation component here */}
        <Nav />
        <Header headerData={headerData} />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: object.isRequired,
  pageName: string.isRequired,
}

export default Layout
