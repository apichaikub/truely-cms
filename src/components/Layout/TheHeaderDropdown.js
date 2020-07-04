import React from 'react'
import { useDispatch } from 'react-redux'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CImg } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { authActions } from '../../store/actions'

const TheHeaderDropdown = () => {
  const dispatch = useDispatch()

  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'https://upload.wikimedia.org/wikipedia/commons/b/b4/Wikipe-tan_avatar.png'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={() => dispatch(authActions.logout())}>
          <CIcon name="cil-lock-locked" className="mfe-2" /> 
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown