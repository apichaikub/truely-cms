import React from 'react'
import {
  CCol,
  CForm,
  CRow,
  CFormGroup,
  CLabel,
  CTextarea,
  CButton
} from '@coreui/react'
import BaseInput from '../Base/BaseInput'
import BaseActionCreate from '../Base/BaseActionCreate'

const FormProductCreate = ({ control, errors, formState, reset, onSubmit }) => {
  const handleClickCancel = () => {
    reset({
      name: "",
      rating: "",
    })
  }

  return (
    <CRow>
      <CCol>
        <CForm onSubmit={onSubmit}>
          <CFormGroup>
            <CLabel htmlFor="nf-name">Product Name</CLabel>
            <BaseInput
              id="nf-name"
              type="text"
              name="name"
              autoComplete="off"
              defaultValue=""
              control={control}
              rules={{required: true}}
              invalid={!!errors.name}
              invalidMessage="This field is required"
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
            <BaseInput
              id="nf-rating"
              type="number"
              name="rating"
              min="0"
              max="5"
              defaultValue=""
              control={control}
              rules={{required: true}}
            />
          </CFormGroup>
          <CButton type="submit">Submit</CButton>
          <BaseActionCreate
            loading={formState.isValid && formState.isSubmitted}
            disabled={!formState.isDirty}
            onClickCancel={handleClickCancel}
          />
        </CForm>
      </CCol>
    </CRow>
  )
}

export default FormProductCreate