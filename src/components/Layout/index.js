import React from "react"
import styled from "styled-components"

import Header from "../Header"
import data from "../Header/data"
import { string, object } from "prop-types"
import Nav from "./../Nav"
import Footer from "./../footer"

const Content = styled.div`
  flex: 1 0 auto;
`
function Layout({ children, pageName }) {
  const matchPageName = data => data.pageName === pageName
  const headerData = data.find(matchPageName)

  return (
    <>
      <Content>
        <header>
          {/* Put Navigation component here */}
          <Nav />
          <Header headerData={headerData} />
        </header>
        <main>{children}</main>
      </Content>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: object.isRequired,
  pageName: string.isRequired,
}

export default Layout
