import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CHeader, CToggler, CHeaderNav } from '@coreui/react'
import { sidebarActions } from '../../store/actions'
import storage from '../../storages'
import TheHeaderDropdown from './TheHeaderDropdown'
import TheHeaderSub from './TheHeaderSub'

const TheHeader = () => {
  const dispatch = useDispatch()
  const uiState = useSelector(state => state.ui)

  // handler function
  const handleClickToggle = () => {
    const toggleShow = !uiState.sidebar.show
    dispatch(sidebarActions.toggleShow(toggleShow))
    storage.setSidebarShow(toggleShow)
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

      <TheHeaderSub/>
    </CHeader>
  )
}

export default TheHeader
