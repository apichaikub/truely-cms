import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import serviceApi from '../services/api'
import { productActions } from '../store/actions'
import { ROUTER_PATH } from '../enum'
import { cleanObj } from '../utils'
import Layout from '../components/Layout'
import FormProductEdit from '../components/Dump/FormProductEdit'

const ProductsCreate = ({ history, match: { params }}) => {
  const dispatch = useDispatch()
  const { id } = params
  const productState = useSelector(state => state.product.one)
  const { control, errors, formState, getValues, setValue, reset, handleSubmit } = useForm()

  // listener function
  const onCreateProduct = (formValues) => {
    return new Promise((resolve, reject) => {
      const params = {
        id: id,
        name: formValues.name,
        detail: formValues.detail,
        specifications: [],
        rating: parseFloat(formValues.rating),
      }
      const fetch = serviceApi.editProducts(params)
      fetch.then(() => resolve(history.push(ROUTER_PATH.ENUM.PRODUCTS)))
      fetch.catch((error) => reject(error))
    })
  }

  // hanler function
  const handleCancel = () => {
    const formValues = getValues()
    const cleanForm = cleanObj(formValues, "")
    reset(cleanForm)
  }

  useEffect(() => {
    dispatch(productActions.requestGetProduct({ id }))
  }, [dispatch, id])

  return (
    <Layout>
      <FormProductEdit
        loading={productState.loading}
        control={control}
        errors={errors}
        formState={formState}
        productState={productState}
        setValue={setValue}
        onSubmit={handleSubmit(onCreateProduct)}
        onCancel={handleCancel}
      />
    </Layout>
  )
}

export default ProductsCreate