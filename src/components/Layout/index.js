import React from "react"
import Header from "../Header"
import data from "../Header/data"
import { string, object } from "prop-types"

function Layout({ children, type }) {
  console.log("hello")

  const headerData = data.find(data => data.type === type)

  return (
    <>
      <header>
        {/* Put Navigation component here */}
        <Header headerData={headerData} />
      </header>
      {children}
      {/* PLACE FOOTER HERE */}
    </>
  )
}

Layout.propTypes = {
  children: object.isRequired,
  type: string.isRequired,
}

export default Layout
