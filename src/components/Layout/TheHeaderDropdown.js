import React from 'react'
import { useDispatch } from 'react-redux'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CImg } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { authActions } from '../../store/actions'
import avatar from'../../assets/images/circle-icons-profile.svg';

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
            src={avatar}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu placement="bottom-end">
        <CDropdownItem onClick={() => dispatch(authActions.logout())}>
          <CIcon name="cil-lock-locked" className="mfe-2" /> 
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
