import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productActions } from '../store/actions'
import { mapTable } from '../helpers/table'
import { TABLE_PRODUCT_POINTER, ROUTER_PATH } from '../enum'
import Layout from '../components/Layout'
import TableProducts from '../components/Dump/TableProducts'
import BaseModalConfirmDelete from '../components/Base/BaseModalConfirmDelete'

const Products = ({ history }) => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState({ show: false, id: null })
  const productState = useSelector(state => state.product.list)

  // handler function
  const handleClickedView = (id) => {
    history.push(`${ROUTER_PATH.ENUM.PRODUCT_EDIT}/${id}`)
  }

  const handleClickedDelete = (id) => {
    setModal({ show: true, id })
  }

  const handleConfirmed = () => {
    console.log('handleConfirmed', modal.id)
  }

  const handleToggleModal = ()=>{
    setModal({ ...modal, show: !modal.show })
  }

  useEffect(() => {
    dispatch(productActions.requestGetProducts())
  }, [dispatch])

  return (
    <>
      <Layout>
        <TableProducts
          loading={productState.loading}
          items={mapTable(productState.data, TABLE_PRODUCT_POINTER.ENUM)}
          onClickedView={handleClickedView}
          onClickedDelete={handleClickedDelete}
        />
      </Layout>
      <BaseModalConfirmDelete
        show={modal.show}
        onToggle={handleToggleModal}
        onConfirmed={handleConfirmed}
      />
    </>
  )
}

export default Products