import React from 'react'
import { CButtonGroup } from '@coreui/react'
import { TABLE_PRODUCT_FIELD } from '../../enum'
import BaseTable from '../Base/BaseTable'
import BaseButton from '../Base/BaseButton'

const TableProducts = ({ loading, items }) => (
  <BaseTable
      loading={loading}
      items={items}
      fields={[
        {
          key: TABLE_PRODUCT_FIELD.ENUM.ID,
          label: 'Product Id',
          _style: { width: '350px' },
          sorter: true,
          filter: true
        },
        {
          key: TABLE_PRODUCT_FIELD.ENUM.NAME,
          label: 'Product Name',
          sorter: true,
          filter: true
        },
        {
          key: TABLE_PRODUCT_FIELD.ENUM.CREATED,
          label: 'Created At',
          _style: { width: '250px' },
          sorter: false,
          filter: false
        },
        {
          key: TABLE_PRODUCT_FIELD.ENUM.ACTION,
          label: '',
          _style: { width: '150px' },
          sorter: false,
          filter: false
        }
      ]}
      scopedSlots={{
        [TABLE_PRODUCT_FIELD.ENUM.ACTION]: (item, index) => (
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
      }}
      striped
      tableFilter
      sorter
      itemsPerPageSelect
      pagination
  />
)

export default TableProducts