import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import serviceApi from '../services/api'
import { productActions } from '../store/actions'
import { mapTable } from '../helpers/table'
import { TABLE_PRODUCT_POINTER, ROUTER_PATH } from '../enum'
import Layout from '../components/Layout'
import TableProducts from '../components/Dump/TableProducts'
import BaseModalConfirmDelete from '../components/Base/BaseModalConfirmDelete'

const Products = ({ history }) => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState({ show: false, id: null })
  const [deleteLoading, setDeleteLoading] = useState(false)
  const productState = useSelector(state => state.product.list)

  // handler function
  const handleClickedView = (id) => {
    history.push(`${ROUTER_PATH.ENUM.PRODUCT_EDIT}/${id}`)
  }

  const handleClickedDelete = (id) => {
    setModal({ show: true, id })
  }

  const handleConfirmed = () => {
    setDeleteLoading(true)

    // call to graphql to delete a product
    const fetch = serviceApi.deleteProducts({
      id: modal.id
    })

    fetch.then(() => {
      setModal({ ...modal, show: false })
      setDeleteLoading(false)
      dispatch(productActions.requestGetProducts())
    })

    fetch.catch((err) => {
      // TODO: handle error
    })
  }

  const handleToggleModal = ()=>{
    setModal({ ...modal, show: !modal.show })
  }

  useEffect(() => {
    // call to graphql to get products
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
        loading={deleteLoading}
        show={modal.show}
        onToggle={handleToggleModal}
        onConfirmed={handleConfirmed}
      />
    </>
  )
}

export default Products