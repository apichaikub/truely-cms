import React from 'react'
import { CTextarea, CInvalidFeedback } from '@coreui/react'
import { Controller } from 'react-hook-form'

const BaseInput = ({ invalidMessage = null, ...rest }) => (
  <>
    <Controller as={CTextarea} {...rest} />      
    <CInvalidFeedback>{invalidMessage}</CInvalidFeedback>
  </>
)
export default BaseInput