import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productSelector } from './Products.selector'
import { productActions } from '../store/actions'
import Layout from '../components/Layout'
import TableProducts from '../components/Dump/TableProducts'

const Products = () => {
  const dispatch = useDispatch()
  const productState = useSelector(state => state.product.list)
  const { tableItems, tableFields, tableScopedSlots, tableLoading } = productSelector(productState)

  useEffect(() => {
    dispatch(productActions.requestGetProducts())
  }, [dispatch])

  return (
    <Layout>
      <TableProducts
        items={tableItems}
        fields={tableFields}
        scopedSlots={tableScopedSlots}
        loading={tableLoading}
      />
    </Layout>
  )
}

export default Products