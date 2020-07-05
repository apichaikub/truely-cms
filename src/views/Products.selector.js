import React from 'react'
import { CButtonGroup } from '@coreui/react'
import BaseButton from '../components/Base/BaseButton'

export const TABLE_KEYS = Object.freeze({
  ID: 'id',
  NAME: 'name',
  CREATED: 'created',
  ACTION: 'action',
})

export const tableFields = [
  {
    key: TABLE_KEYS.ID,
    label: 'Product Id',
    _style: { width: '350px' },
    sorter: true,
    filter: true
  },
  {
    key: TABLE_KEYS.NAME,
    label: 'Product Name',
    sorter: true,
    filter: true
  },
  {
    key: TABLE_KEYS.CREATED,
    label: 'Created At',
    _style: { width: '250px' },
    sorter: false,
    filter: false
  },
  {
    key: TABLE_KEYS.ACTION,
    label: '',
    _style: { width: '150px' },
    sorter: false,
    filter: false
  }
]

export const tableScopedSlots = {
  [TABLE_KEYS.ACTION]: (item, index) => (
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

export const mapList = (list) => (
  list.map((item) => ({
    [TABLE_KEYS.ID]: item.productId,
    [TABLE_KEYS.NAME]: item.name,
    [TABLE_KEYS.CREATED]: item.createdAt,
  }))
)