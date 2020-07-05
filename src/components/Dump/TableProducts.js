import React from 'react'
import BaseTable from '../Base/BaseTable'

const TableProducts = ({ items, fields, scopedSlots, loading }) => (
  <BaseTable
      items={items}
      fields={fields}
      scopedSlots={scopedSlots}
      loading={loading}
      striped
      tableFilter
      sorter
      itemsPerPageSelect
      pagination
  />
)

export default TableProducts