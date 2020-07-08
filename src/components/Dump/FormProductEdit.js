import React from 'react'
import {
  CCol,
  CForm,
  CRow,
  CFormGroup,
  CLabel,
} from '@coreui/react'
import BaseInput from '../Base/BaseInput'
import BaseTextarea from '../Base/BaseTextarea'
import BaseActionSubmit from '../Base/BaseActionSubmit'

const FormProductCreate = ({ loading, control, errors, formState, productState, setValue, onSubmit, onCancel }) => {
  const {
    productId,
    name,
    detail,
    rating,
  } = productState.data

  if(loading) {
    return <div>Loading...</div>
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
              defaultValue={name}
              control={control}
              rules={{required: true}}
              invalid={!!errors.name}
              invalidMessage="This field is required"
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="nf-detail">Details</CLabel>
            <BaseTextarea
              id="nf-detail"
              name="detail"
              rows="5"
              defaultValue={detail}
              control={control}
              rules={{required: true}}
              invalid={!!errors.detail}
              invalidMessage="This field is required"
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
              defaultValue={rating}
              control={control}
            />
          </CFormGroup>
          <BaseActionSubmit
            submitText="Update"
            cancelText="Cancel"
            loading={formState.isSubmitting}
            disabled={!formState.isDirty}
            onClickCancel={onCancel}
          />
        </CForm>
      </CCol>
    </CRow>
  )
}

export default FormProductCreate