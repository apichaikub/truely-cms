import React from 'react'
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
          { Content }
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default Layout