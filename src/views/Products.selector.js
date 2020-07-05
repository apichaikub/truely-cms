import React from 'react'
import { CButtonGroup } from '@coreui/react'
import BaseButton from '../components/Base/BaseButton'

export const fields = [
  {
    key: 'id',
    label: 'Product Id',
    _style: { width: '200px' },
    sorter: true,
    filter: true
  },
  {
    key: 'name',
    label: 'Product Name',
    sorter: true,
    filter: true
  },
  {
    key: 'created',
    label: 'Created At',
    _style: { width: '250px' },
    sorter: false,
    filter: false
  },
  {
    key: 'action',
    label: '',
    _style: { width: '150px' },
    sorter: false,
    filter: false
  }
]

export const scopedSlots = {
  action: (item, index) => (
    <td className="px-2">
      <CButtonGroup>
        <BaseButton
          color="info"
          size="sm"
        >
          View
        </BaseButton>
        <BaseButton
          color="danger"
          size="sm"
        >
          Delete
        </BaseButton>
      </CButtonGroup>
    </td>
  )
}