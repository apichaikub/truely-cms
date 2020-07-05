import React, { useState } from 'react'
import Layout from '../components/Layout'
import TableProducts from '../components/Dump/TableProducts'
import { fields, scopedSlots } from './Products.selector'

const Products = () => {
  const [productsData, setProductsData] = useState([])
  const [loading, setLoading] = useState(true)
  
  setTimeout(() => {
    const items = []
    for(let i = 0; i < 200; i++) {
      items.push({ id: (i+1), name: 'John Doe', created: "2020-01-01 15:30:69" })
    }
    setProductsData(items)
    setLoading(false)
  }, 3000)

  return (
    <Layout>
      <TableProducts
        items={productsData}
        fields={fields}
        scopedSlots={scopedSlots}
        loading={loading}
      />
    </Layout>
  )
}

export default Products