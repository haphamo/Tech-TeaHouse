import React from "react"
import Header from "../Header"
import data from "../Header/data"
import { string, object } from "prop-types"

function Layout({ children, pageName }) {
  const headerData = data.find(data => data.pageName === pageName)

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
