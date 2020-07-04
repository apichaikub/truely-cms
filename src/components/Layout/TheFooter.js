import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
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
        <a href="https://apichai.me" target="_blank" rel="noopener noreferrer">Apichai (Chai) Densamute</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
