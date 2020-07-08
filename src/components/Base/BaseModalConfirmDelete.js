import React from 'react'
import { CModal, CModalHeader, CModalFooter } from '@coreui/react'
import BaseButton from '../Base/BaseButton'

const Products = ({ loading = false, show = false, onToggle = () => {}, onConfirmed = () => {}, ...rest }) => {
  return (
    <CModal
      show={show}
      onClose={onToggle}
      {...rest}
    >
      <CModalHeader closeButton>Do you want to delete this?</CModalHeader>
      <CModalFooter>
        <BaseButton
          loading={loading}
          size="md"
          color="danger"
          onClick={onConfirmed}
        >
          Confirm
        </BaseButton>
        <BaseButton
          size="md"
          color="secondary"
          onClick={onToggle}
        >
          Cancel
        </BaseButton>
      </CModalFooter>
    </CModal>
  )
}

export default Products