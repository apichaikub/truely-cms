import React from 'react'
import { CHeader, CToggler, CHeaderNav } from '@coreui/react'
import TheHeaderDropdown from './TheHeaderDropdown'

const TheHeader = () => {
  const toggleSidebar = () => {
    console.log('toggleSidebar')
  }

  const toggleSidebarMobile = () => {
    console.log('toggleSidebarMobile')
  }

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />

      <CHeaderNav className="ml-auto px-3">
        <TheHeaderDropdown/>
      </CHeaderNav>
    </CHeader>
  )
}

export default TheHeader
