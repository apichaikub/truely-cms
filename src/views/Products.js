import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productActions } from '../store/actions'
import { mapTable } from '../helpers/table'
import { TABLE_PRODUCT_POINTER } from '../enum'
import Layout from '../components/Layout'
import TableProducts from '../components/Dump/TableProducts'

const Products = () => {
  const dispatch = useDispatch()
  const productState = useSelector(state => state.product.list)

  useEffect(() => {
    dispatch(productActions.requestGetProducts())
  }, [dispatch])

  return (
    <Layout>
      <TableProducts
        loading={productState.loading}
        items={mapTable(productState.data, TABLE_PRODUCT_POINTER.ENUM)}
      />
    </Layout>
  )
}

export default Products