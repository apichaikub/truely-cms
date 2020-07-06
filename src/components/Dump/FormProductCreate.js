import React from 'react'
import {
  CCol,
  CForm,
  CRow,
  CFormGroup,
  CLabel,
  CInput,
  CTextarea,
} from '@coreui/react'
import BaseActionCreate from '../Base/BaseActionCreate'

const FormProductCreate = () => {
  const handleClickCreated = () => {
    console.log('handleClickCreated')
  }

  const handleClickCanceled = () => {
    console.log('handleClickCanceled')
  }

  return (
    <CRow>
      <CCol>
        <CForm action="" method="post">
          <CFormGroup>
            <CLabel htmlFor="nf-name">Product Name</CLabel>
            <CInput
              type="text"
              id="nf-name"
              name="name"
              autoComplete="off"
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="nf-detail">Details</CLabel>
            <CTextarea
              id="nf-detail"
              name="detail"
              rows="5"
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="nf-rating">Rating</CLabel>
            <CInput
              type="number"
              id="nf-rating"
              name="rating"
              min="0"
              max="5"
            />
          </CFormGroup>
          <BaseActionCreate
            onClickCreated={handleClickCreated}
            onClickCancel={handleClickCanceled}
          />
        </CForm>
      </CCol>
    </CRow>
  )
}

export default FormProductCreate