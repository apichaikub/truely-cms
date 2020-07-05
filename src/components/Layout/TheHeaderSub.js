import React from 'react'
import { CSubheader, CBreadcrumbRouter } from '@coreui/react'
import routes from './_breadcrumb'

const TheHeaderSub = () => {
  
  return (
    <CSubheader className="px-3 justify-content-between">
      <CBreadcrumbRouter 
        className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
        routes={routes} 
      />
    </CSubheader>
  )
}

export default TheHeaderSub