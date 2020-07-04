import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CCreateElement, CSidebar, CSidebarBrand, CSidebarNav, CSidebarNavDivider, CSidebarNavTitle, CSidebarMinimizer, CSidebarNavDropdown, CSidebarNavItem } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import navigation from './_nav' // sidebar nav config
import { sidebarActions } from '../../store/actions'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const uiState = useSelector(state => state.ui)

  // handler function
  const handleMinimizeChange = (value = false) => {
    dispatch(sidebarActions.toggleMinimize(!value))
  }

  return (
    <CSidebar
      { ...uiState.sidebar }
      onMinimizeChange={handleMinimizeChange}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative-large"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="logo-negative-small"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
