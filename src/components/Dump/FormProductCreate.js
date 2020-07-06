import React from 'react'
import {
  CCol,
  CForm,
  CRow,
  CFormGroup,
  CLabel,
  CTextarea,
} from '@coreui/react'
import BaseInput from '../Base/BaseInput'
import BaseActionSubmit from '../Base/BaseActionSubmit'

const FormProductCreate = ({ control, errors, formState, onSubmit, onCancel }) => {
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
          <BaseActionSubmit
            submitText="Create"
            cancelText="Cancel"
            loading={formState.isValid && formState.isSubmitted}
            disabled={!formState.isDirty}
            onClickCancel={onCancel}
          />
        </CForm>
      </CCol>
    </CRow>
  )
}

export default FormProductCreate