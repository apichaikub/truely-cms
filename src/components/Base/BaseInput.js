import React from 'react'
import { CInput, CInvalidFeedback } from '@coreui/react'
import { Controller } from 'react-hook-form'

const BaseInput = ({ invalidMessage = null, ...rest }) => (
  <>
    <Controller as={CInput} {...rest} />      
    <CInvalidFeedback>{invalidMessage}</CInvalidFeedback>
  </>
)
export default BaseInput