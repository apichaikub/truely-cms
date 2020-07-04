import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CHeader, CToggler, CHeaderNav } from '@coreui/react'
import TheHeaderDropdown from './TheHeaderDropdown'
import { sidebarActions } from '../../store/actions'

const TheHeader = () => {
  const dispatch = useDispatch()
  const uiState = useSelector(state => state.ui)

  // handler function
  const handleClickToggle = () => {
    dispatch(sidebarActions.toggleShow(!uiState.sidebar.show))
  }

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={handleClickToggle}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={handleClickToggle}
      />

      <CHeaderNav className="ml-auto px-3">
        <TheHeaderDropdown/>
      </CHeaderNav>
    </CHeader>
  )
}

export default TheHeader
