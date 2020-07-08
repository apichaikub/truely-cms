import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={true}>
      <div>
        <span className="ml-1">
          &copy;
          Copyright 2020
          Truely
          - All Rights Reserved
        </span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Developed by</span>
        Apichai (Chai) Densamute
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
