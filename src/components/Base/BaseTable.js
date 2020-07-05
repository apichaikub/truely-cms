import React from 'react'
import { CDataTable } from '@coreui/react'

const BaseTable = (props) => {
  const {
    items = [],
    fields = [],
    columnFilter = false,
    tableFilter = false,
    footer = false,
    itemsPerPageSelect = false,
    itemsPerPage = 5,
    hover = false,
    sorter = false,
    pagination = false,
    scopedSlots = {},
    ...rest
  } = props

  const noItemsViewSlot = (
    items.length === 0 
    ? <div className="py-5 text-center">&nbsp;</div>
    : <div className="py-5 text-center">No results</div>
  )

  return (
    <CDataTable 
        items={items}
        fields={fields}
        columnFilter={columnFilter}
        tableFilter={tableFilter}
        footer={footer}
        itemsPerPageSelect={itemsPerPageSelect}
        itemsPerPage={itemsPerPage}
        hover={hover}
        sorter={sorter}
        pagination={items.length === 0 ? false : pagination}
        scopedSlots={scopedSlots}
        noItemsViewSlot={noItemsViewSlot}
        {...rest}
    />
  )
}

export default BaseTable