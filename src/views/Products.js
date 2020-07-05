import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Layout from '../components/Layout'
import TableProducts from '../components/Dump/TableProducts'
import { tableFields, tableScopedSlots, mapList } from './Products.selector'
import { productActions } from '../store/actions'

const Products = () => {
  const dispatch = useDispatch()
  const productState = useSelector(state => state.product.list)

  useEffect(() => {
    dispatch(productActions.requestGetProducts())
  }, [dispatch])

  return (
    <Layout>
      <TableProducts
        items={mapList(productState.data)}
        fields={tableFields}
        scopedSlots={tableScopedSlots}
        loading={productState.loading}
      />
    </Layout>
  )
}

export default Products