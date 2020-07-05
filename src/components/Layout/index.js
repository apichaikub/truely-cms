import React from 'react'
import { CContainer } from '@coreui/react'
import TheHeader from './TheHeader'
import TheSidebar from './TheSidebar'
import TheFooter from './TheFooter'

const Layout = ({ children: Content }) => {
  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <main className="c-main">
            <CContainer fluid>
              { Content }
            </CContainer>
          </main>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default Layout