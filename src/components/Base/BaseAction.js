import React from 'react'
import { CRow } from '@coreui/react'
import './BaseAction.scss'

const BaseAction = ({ children, className }) => {
  return (
    <CRow
      className=
      {`
        base-action
        justify-content-end
        bg-gray-200
        py-4
        px-3
        ml-0
        mr-0
        mt-4
        ${className}
      `}
    >
      { children }
    </CRow>
  )
}

export default BaseAction